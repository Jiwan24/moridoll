import Reveal from "@/components/ui/Reveal";

export default function ProblemSolution() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          {/* Problem column */}
          <Reveal>
            <div className="rounded-card border-l-4 border-orange bg-orange/5 p-8">
              <h2 className="font-heading text-2xl font-bold text-orange mb-4">Masalah</h2>
              <p className="font-body text-base text-ink/80 leading-relaxed">
                Orang tua dan pendidik membutuhkan media bermain yang mampu menstimulasi berbagai
                aspek perkembangan anak secara serentak — sensorik, motorik, bahasa, dan
                kemandirian — dalam satu produk yang mudah digunakan dan diakses.
              </p>
            </div>
          </Reveal>

          {/* Center divider / arrow */}
          <div className="flex items-center justify-center lg:pt-12" aria-hidden="true">
            <div className="hidden lg:flex flex-col items-center gap-2">
              {/* Smile curve SVG as separator */}
              <svg
                viewBox="0 0 60 80"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-16 text-purple"
                aria-hidden="true"
              >
                <path
                  d="M10,10 Q30,40 50,10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Arrow */}
                <polygon points="50,10 44,20 56,20" fill="currentColor" />
              </svg>
              <span className="font-heading text-xs font-bold text-purple/60 tracking-widest uppercase">
                Solusi
              </span>
            </div>
            {/* Mobile divider */}
            <div className="lg:hidden flex items-center gap-3 w-full">
              <div className="flex-1 h-px bg-purple/20" />
              <span className="font-heading text-sm font-bold text-purple">→ Solusi</span>
              <div className="flex-1 h-px bg-purple/20" />
            </div>
          </div>

          {/* Solution column */}
          <Reveal delay={0.15}>
            <div className="rounded-card border-l-4 border-green bg-green/5 p-8">
              <h2 className="font-heading text-2xl font-bold text-green mb-4">Solusi MoriDoll</h2>
              <p className="font-body text-base text-ink/80 leading-relaxed">
                MoriDoll menjawab kebutuhan akan media bermain edukatif yang mampu menstimulasi
                berbagai aspek perkembangan anak dalam satu produk. Produk ini juga membantu orang
                tua memberikan stimulasi yang lebih terarah serta mengenalkan keterampilan dasar
                kemandirian melalui aktivitas bermain yang praktis dan interaktif.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
