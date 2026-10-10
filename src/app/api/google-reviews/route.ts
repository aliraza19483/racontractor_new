import { NextResponse } from "next/server";

export interface GoogleReviewItem {
  id: string;
  clientName: string;
  clientImage: string;
  projectType: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  timestamp?: number;
  verifiedGoogle: boolean;
}

interface PlacesNewReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
}
interface PlacesLegacyReview {
  rating?: number;
  text?: string;
  time?: number;
  author_name?: string;
  profile_photo_url?: string;
  relative_time_description?: string;
}

// Ordered strictly with the freshest 5-star reviews first
const fallbackTestimonials: GoogleReviewItem[] = [
  {
    id: "hyd-5",
    clientName: "Shinde Sidduu",
    clientImage: "",
    projectType: "False Ceiling & Painting Work",
    location: "Hyderabad",
    rating: 5,
    review:
      "Top-notch execution for false ceiling, painting and electrical installation in Hyderabad. Very neat and punctual work!",
    date: "3 weeks ago",
    timestamp: Date.now() - 21 * 24 * 60 * 60 * 1000,
    verifiedGoogle: true,
  },
  {
    id: "hyd-3",
    clientName: "Meraj Sher",
    clientImage: "",
    projectType: "Complete Electrical & Ceiling Work",
    location: "Hyderabad",
    rating: 5,
    review:
      "Experience person very good work I get .At the starting the work he said me you won't complain me about anything I will will be taking responsibility. Absolutely he did that what he say.Thank you",
    date: "9 months ago",
    timestamp: Date.now() - 270 * 24 * 60 * 60 * 1000,
    verifiedGoogle: true,
  },
  {
    id: "hyd-2",
    clientName: "Mohammed Adil",
    clientImage: "",
    projectType: "Gypsum False Ceiling & Concealed Wiring",
    location: "Hyderabad",
    rating: 5,
    review:
      "Excellent work very good person I thank you Mr Ansari For your Support nd corporate u will definitely recommend to my friends nd family 👍",
    date: "10 months ago",
    timestamp: Date.now() - 300 * 24 * 60 * 60 * 1000,
    verifiedGoogle: true,
  },
  {
    id: "hyd-1",
    clientName: "Home Theatre Crafts",
    clientImage: "",
    projectType: "False Ceiling, Painting & Showroom Carpentry",
    location: "Borabanda, Hyderabad",
    rating: 5,
    review:
      "Excellent and timely service by Farhan. We used their services for False ceiling, Painting, and carpentry in our Home Theater Crafts showroom. We are very happy with the quality of work and highly recommended.",
    date: "1 year ago",
    timestamp: Date.now() - 365 * 24 * 60 * 60 * 1000,
    verifiedGoogle: true,
  },
  {
    id: "hyd-4",
    clientName: "Drx Mansoor Ansari (Interior Des)",
    clientImage: "",
    projectType: "Turnkey False Ceiling & Lighting",
    location: "Hyderabad",
    rating: 5,
    review:
      "Highly professional and outstanding work Work complete 💯 in given time space …",
    date: "1 year ago",
    timestamp: Date.now() - 370 * 24 * 60 * 60 * 1000,
    verifiedGoogle: true,
  },
  {
    id: "hyd-6",
    clientName: "Riyaz Ahmad",
    clientImage: "",
    projectType: "Interior Painting & Grid Ceiling",
    location: "Hyderabad",
    rating: 5,
    review:
      "Great quality false ceiling design and interior painting work. Professional staff and fair pricing.",
    date: "1 year ago",
    timestamp: Date.now() - 380 * 24 * 60 * 60 * 1000,
    verifiedGoogle: true,
  },
];

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        reviews: fallbackTestimonials,
        isLive: false,
      },
      { headers: CACHE_HEADERS }
    );
  }

  // 1. Try Places API (New) first (Recommended by Google)
  try {
    const newApiUrl = `https://places.googleapis.com/v1/places/${placeId}`;
    const newRes = await fetch(newApiUrl, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,reviews",
      },
      next: { revalidate: 1800 }, // Cache for 30 minutes
    });

    if (newRes.ok) {
      const newData = await newRes.json();
      if (newData.reviews && Array.isArray(newData.reviews) && newData.reviews.length > 0) {
        // Filter: Only good reviews (rating >= 4) with actual text
        const goodReviews = newData.reviews.filter(
          (r: PlacesNewReview) => (r.rating || 5) >= 4 && (r.text?.text || r.originalText?.text || "").trim().length > 10
        );

        // Sort: Newest publish time first
        goodReviews.sort((a: PlacesNewReview, b: PlacesNewReview) => {
          const timeA = a.publishTime ? new Date(a.publishTime).getTime() : 0;
          const timeB = b.publishTime ? new Date(b.publishTime).getTime() : 0;
          return timeB - timeA;
        });

        const mappedReviews: GoogleReviewItem[] = goodReviews.map((r: PlacesNewReview, idx: number) => ({
          id: `google-new-${idx}`,
          clientName: r.authorAttribution?.displayName || "Verified Client",
          clientImage: r.authorAttribution?.photoUri || "",
          projectType: "Verified Google Customer",
          location: "Hyderabad",
          rating: r.rating || 5,
          review: r.text?.text || r.originalText?.text || "",
          date: r.relativePublishTimeDescription || "Recent Google Review",
          timestamp: r.publishTime ? new Date(r.publishTime).getTime() : Date.now() - idx * 100000,
          verifiedGoogle: true,
        }));

        if (mappedReviews.length > 0) {
          return NextResponse.json(
            {
              reviews: mappedReviews,
              isLive: true,
              userRatingsTotal: newData.userRatingCount,
              overallRating: newData.rating,
              source: "places_api_new",
            },
            { headers: CACHE_HEADERS }
          );
        }
      }
    }
  } catch (err) {
    console.warn("Places API (New) attempt:", err);
  }

  // 2. Fallback to Legacy Places API
  try {
    const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&reviews_sort=newest&key=${apiKey}`;
    const legacyRes = await fetch(legacyUrl, {
      next: { revalidate: 1800 },
    });

    if (legacyRes.ok) {
      const legacyData = await legacyRes.json();
      if (legacyData.status === "OK" && legacyData.result?.reviews) {
        // Filter: Only good reviews (rating >= 4) with actual text
        const goodReviews = legacyData.result.reviews.filter(
          (r: PlacesLegacyReview) => (r.rating || 5) >= 4 && (r.text || "").trim().length > 10
        );

        // Sort: Newest first (time descending)
        goodReviews.sort((a: PlacesLegacyReview, b: PlacesLegacyReview) => (b.time || 0) - (a.time || 0));

        const mappedReviews: GoogleReviewItem[] = goodReviews.map((r: PlacesLegacyReview, idx: number) => ({
          id: `google-legacy-${idx}`,
          clientName: r.author_name || "Verified Client",
          clientImage: r.profile_photo_url || "",
          projectType: "Verified Google Customer",
          location: "Hyderabad",
          rating: r.rating || 5,
          review: r.text,
          date: r.relative_time_description || "Recent Google Review",
          timestamp: r.time ? r.time * 1000 : Date.now() - idx * 100000,
          verifiedGoogle: true,
        }));

        if (mappedReviews.length > 0) {
          return NextResponse.json(
            {
              reviews: mappedReviews,
              isLive: true,
              userRatingsTotal: legacyData.result.user_ratings_total,
              overallRating: legacyData.result.rating,
              source: "places_api_legacy",
            },
            { headers: CACHE_HEADERS }
          );
        }
      }
    }
  } catch (err) {
    console.warn("Places API (Legacy) attempt:", err);
  }

  // 3. Graceful fallback to verified reviews sorted newest-first
  return NextResponse.json(
    {
      reviews: fallbackTestimonials,
      isLive: false,
    },
    { headers: CACHE_HEADERS }
  );
}
