import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-navy)] min-h-[70vh] flex items-center pt-32 pb-16">
      <div className="container-luxury text-center">
        <h1 className="!text-white text-4xl md:text-5xl font-[family-name:var(--font-playfair)]">Page not found</h1>
        <p className="mt-4 text-white/70 font-[family-name:var(--font-dm-sans)]">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-luxury btn-gold">Home</Link>
          <Link href="/services" className="btn-luxury btn-outline">Services</Link>
          <Link href="/projects" className="btn-luxury btn-outline">Projects</Link>
          <Link href="/contact" className="btn-luxury btn-outline">Contact</Link>
        </div>
      </div>
    </section>
  );
}
