import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Concept() {
  return (
    <section id="tentang" className="py-16 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <Reveal>
            <SectionHeading title="Tentang MoriDoll" align="left" />
            <p className="font-body text-base text-ink/80 leading-relaxed">
              MoriDoll merupakan sensory play kit edukatif untuk balita yang menggabungkan boneka
              interaktif, kaus kaki sensorik, dan sensory cube dengan variasi tekstur. Dilengkapi
              buku panduan dan lagu edukatif melalui QR code, MoriDoll dirancang untuk menstimulasi
              perkembangan sensorik, motorik halus, bahasa, dan kemandirian anak melalui aktivitas
              bermain yang menyenangkan. Selain itu MoriDoll juga dapat menjadi sarana untuk
              membangun kedekatan emosional antara orang tua dan anak dalam satu produk yang
              praktis dan menarik.
            </p>
          </Reveal>

          {/* Right: decorative blob placeholder */}
          <Reveal delay={0.15}>
            <div
              className="relative flex items-center justify-center min-h-[280px]"
              aria-hidden="true"
            >
              {/* Organic blob SVG — decorative */}
              <svg
                viewBox="0 0 400 350"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-sm"
                aria-hidden="true"
              >
                <path
                  d="M320,175 C320,260 260,320 175,320 C90,320 40,260 40,175 C40,90 100,30 185,30 C270,30 320,90 320,175 Z"
                  fill="#7B4FBF"
                  opacity="0.12"
                />
                <path
                  d="M290,155 C310,215 260,290 190,295 C120,300 60,250 55,180 C50,110 105,55 175,60 C245,65 270,95 290,155 Z"
                  fill="#FFC933"
                  opacity="0.18"
                />
                <path
                  d="M260,170 C265,220 225,265 170,260 C115,255 80,210 90,155 C100,100 145,75 195,85 C245,95 255,120 260,170 Z"
                  fill="#1FB5A8"
                  opacity="0.25"
                />
                {/* Center text placeholder */}
                <text
                  x="175"
                  y="180"
                  textAnchor="middle"
                  fontSize="32"
                  fill="#7B4FBF"
                  fontWeight="bold"
                  fontFamily="system-ui"
                >
                  🪆
                </text>
              </svg>
              {/* TODO: ganti dengan ilustrasi/sketsa MoriDoll yang sebenarnya */}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
