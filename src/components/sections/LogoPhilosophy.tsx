// Stub — FEAT-003 replaces with hover-interactive version using SVG logo per-letter
import SectionHeading from "@/components/ui/SectionHeading";
import { logoColors } from "@/data/logo-colors";

export default function LogoPhilosophy() {
  return (
    <section id="logo" className="py-16 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Filosofi Logo MoriDoll"
          subtitle="Setiap warna dalam logo MoriDoll memiliki makna yang mendalam."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {logoColors.map((item) => (
            <div
              key={item.name}
              className="rounded-card bg-white shadow-sm overflow-hidden flex flex-col"
            >
              {/* Color swatch */}
              <div
                className="h-20 w-full"
                style={{ backgroundColor: item.hex }}
                aria-label={`Warna ${item.name}: ${item.hex}`}
              />
              {/* Info */}
              <div className="flex flex-col gap-1 p-4">
                <h3 className="font-heading text-sm font-bold text-ink">{item.name}</h3>
                <p className="font-body text-xs text-ink/60">{item.parts}</p>
                <p className="font-body text-xs text-ink/70 mt-1">{item.meaning}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 mx-auto max-w-3xl font-body text-sm text-ink/70 text-center leading-relaxed">
          Secara keseluruhan, kelima warna ini menggambarkan dunia bermain yang penuh warna:
          imajinasi (ungu), semangat (oranye), kebahagiaan (kuning), rasa ingin tahu (teal),
          dan pertumbuhan (hijau). Garis senyum di bawah logo menyatukan semuanya dengan pesan
          bahwa MoriDoll membawa kebahagiaan untuk anak dan keluarga.
        </p>
      </div>
    </section>
  );
}
