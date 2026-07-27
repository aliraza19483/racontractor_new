"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";
import useEmblaCarousel from "embla-carousel-react";

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientImage: string;
  projectType: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  verifiedGoogle: boolean;
}

const initialTestimonials: TestimonialItem[] = [
  {
    id: "hyd-1",
    clientName: "Home Theatre Crafts",
    clientImage: "https://lh3.googleusercontent.com/a/ACg8ocL-real-avatar-htc",
    projectType: "False Ceiling, Painting & Showroom Carpentry",
    location: "Borabanda, Hyderabad",
    rating: 5,
    review:
      "Excellent and timely service by Farhan. We used their services for False ceiling, Painting, and carpentry in our Home Theater Crafts showroom. We are very happy with the quality of work and highly recommended.",
    date: "1 year ago",
    verifiedGoogle: true,
  },
  {
    id: "hyd-2",
    clientName: "Mohammed Adil",
    clientImage: "https://lh3.googleusercontent.com/a/ACg8ocL-real-avatar-ma",
    projectType: "Gypsum False Ceiling & Concealed Wiring",
    location: "Hyderabad",
    rating: 5,
    review:
      "Excellent work very good person I thank you Mr Ansari For your Support nd corporate u will definitely recommend to my friends nd family 👍",
    date: "10 months ago",
    verifiedGoogle: true,
  },
  {
    id: "hyd-3",
    clientName: "Meraj Sher",
    clientImage: "https://lh3.googleusercontent.com/a/ACg8ocL-real-avatar-ms",
    projectType: "Complete Electrical & Ceiling Work",
    location: "Hyderabad",
    rating: 5,
    review:
      "Experience person very good work I get .At the starting the work he said me you won't complain me about anything I will will be taking responsibility. Absolutely he did that what he say.Thank you",
    date: "9 months ago",
    verifiedGoogle: true,
  },
  {
    id: "hyd-4",
    clientName: "Drx Mansoor Ansari (Interior Des)",
    clientImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmMSyW5T0JVagsKpXbjlLZ0jyBIYufKwfxPrVZzCd6xNpVpceJ3SRb2mQCTABjjDW9FIJMKuUpbdqfi0AO-d9wu0Lr4xP5QiQqP4rmfjvK5btP2tln2EhJHHthBFRwjmVes5H-CVoN6qrtE=k-no",
    projectType: "Turnkey False Ceiling & Lighting",
    location: "Hyderabad",
    rating: 5,
    review:
      "Highly professional and outstanding work Work complete 💯 in given time space …",
    date: "1 year ago",
    verifiedGoogle: true,
  },
  {
    id: "hyd-5",
    clientName: "Shinde Sidduu",
    clientImage: "https://lh3.googleusercontent.com/a/ACg8ocL-real-avatar-ss",
    projectType: "False Ceiling & Painting Work",
    location: "Hyderabad",
    rating: 5,
    review:
      "Top-notch execution for false ceiling, painting and electrical installation in Hyderabad. Very neat and punctual work!",
    date: "3 weeks ago",
    verifiedGoogle: true,
  },
  {
    id: "hyd-6",
    clientName: "Riyaz Ahmad",
    clientImage: "https://lh3.googleusercontent.com/a/ACg8ocL-real-avatar-ra",
    projectType: "Interior Painting & Grid Ceiling",
    location: "Hyderabad",
    rating: 5,
    review:
      "Great quality false ceiling design and interior painting work. Professional staff and fair pricing.",
    date: "1 year ago",
    verifiedGoogle: true,
  },
];

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8";

export default function Testimonials() {
  const [reviewsList, setReviewsList] = useState<TestimonialItem[]>(initialTestimonials);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [isLiveGoogle, setIsLiveGoogle] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && data.reviews.length > 0) {
            setReviewsList(data.reviews);
            if (data.isLive) {
              setIsLiveGoogle(true);
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch live Google reviews:", err);
      }
    }
    fetchGoogleReviews();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 6500);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(interval);
    };
  }, [emblaApi, reviewsList]);

  return (
    <section className="section section-dark" id="testimonials">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Verified Client Feedback · Hyderabad"
          title="False Ceiling, Painting & Electrical Excellence"
          description="Real reviews and ratings from our valued clients across Jubilee Hills, Banjara Hills, Gachibowli, and Hyderabad."
          dark
        />

        {/* Google Maps Business Verification Badge Bar */}
        <SectionReveal>
          <div className="max-w-4xl mx-auto mb-10 bg-[#0E1A2E]/90 border border-[var(--color-gold)]/40 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-gold)]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm md:text-base font-[family-name:var(--font-playfair)]">
                    Find Us on Google Maps
                  </span>
                </div>
                <p className="text-xs text-white/60 flex items-center gap-1.5 mt-0.5 font-[family-name:var(--font-dm-sans)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  False Ceiling, Painting & Electrical Installation Hyderabad (near JK Point, Borabanda)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury btn-gold !py-2 !px-3.5 text-xs font-semibold flex items-center gap-1.5 shadow-md shrink-0"
              >
                View on Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviewsList.map((testimonial, idx) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] min-w-0 px-4"
                  >
                    <div className="relative bg-[#0E1A2E]/60 border border-white/10 rounded-2xl p-6 md:p-10 text-center shadow-lg">
                      {/* Newest review tag if index 0 */}
                      {idx === 0 && (
                        <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-[var(--color-navy)] px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          ⭐ Latest Review
                        </div>
                      )}

                      {/* Quote icon */}
                      <Quote className="w-10 h-10 text-[var(--color-gold)]/40 mx-auto mb-5" />

                      {/* Review */}
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-[family-name:var(--font-cormorant)] italic max-w-3xl mx-auto">
                        &ldquo;{testimonial.review}&rdquo;
                      </p>

                      {/* Rating & Verified Tag */}
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
                              />
                            )
                          )}
                        </div>
                        <span className="text-xs text-[var(--color-gold)] font-medium">
                          ({testimonial.rating}.0)
                        </span>
                        {testimonial.verifiedGoogle && (
                          <span className="text-[11px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                            ✓ Google Reviewed
                          </span>
                        )}
                        <span className="text-xs text-white/40 ml-1">
                          {testimonial.date}
                        </span>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-gold)]/40 bg-[var(--color-gold)]/20 shrink-0 flex items-center justify-center font-bold text-white text-sm">
                          {!imgErrors[testimonial.id] ? (
                            <Image
                              src={testimonial.clientImage}
                              alt={testimonial.clientName}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                              onError={() => setImgErrors((prev) => ({ ...prev, [testimonial.id]: true }))}
                            />
                          ) : (
                            <span>
                              {testimonial.clientName
                                .split(" ")
                                .filter(Boolean)
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="text-left">
                          <h4 className="text-sm font-semibold text-white font-[family-name:var(--font-dm-sans)]">
                            {testimonial.clientName}
                          </h4>
                          <p className="text-xs text-white/50 font-[family-name:var(--font-dm-sans)] flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                            {testimonial.projectType} · <strong className="text-white/70">{testimonial.location}</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex gap-2 max-w-[200px] overflow-x-auto py-1">
                {reviewsList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all shrink-0 ${
                      selectedIndex === i
                        ? "w-8 bg-[var(--color-gold)]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
