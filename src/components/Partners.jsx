const partnerImages = import.meta.glob("../../public/partners/*.png", {
  eager: true,
  import: "default",
});

const partnerImageUrls = Object.values(partnerImages);
const marqueeLogos = [...partnerImageUrls, ...partnerImageUrls];

export default function Partners() {
  return (
    <section
      className="overflow-x-hidden bg-white py-4 md:py-6"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 text-center md:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
            Stronger Together 
          </p>
          <h2
            id="partners-heading"
            className="text-3xl tracking-tight text-navy md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Developer Partners
          </h2>
        </header>

        <div className="partners-marquee-wrap relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/95 via-white/50 to-transparent backdrop-blur-[2px] sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white/95 via-white/50 to-transparent backdrop-blur-[2px] sm:w-24" />

          <div className="partners-marquee-mask overflow-hidden py-4">
            <div className="animate-partners-marquee flex w-max items-center gap-12 px-6">
              {marqueeLogos.map((src, i) => (
                <img
                  key={`${src}-${i}`}
                  src={src}
                  alt=""
                  className="h-16 w-auto shrink-0 object-contain md:h-20"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
 }
