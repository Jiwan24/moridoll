// Stub — FEAT-003 replaces with next/image + lightbox gallery
import SectionHeading from "@/components/ui/SectionHeading";

const sketches = [
  { id: "boneka",  label: "Sketsa Boneka",       color: "bg-purple/20",  textColor: "text-purple" },
  { id: "socks",   label: "Sketsa Kaus Kaki",     color: "bg-orange/20",  textColor: "text-orange" },
  { id: "cube",    label: "Sketsa Sensory Cube",  color: "bg-teal/20",    textColor: "text-teal" },
  { id: "kemasan", label: "Sketsa Kemasan",       color: "bg-yellow/30",  textColor: "text-ink" },
];

export default function SketchGallery() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Galeri Sketsa MoriDoll"
          subtitle="Tampilan komponen produk MoriDoll dari dekat."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {sketches.map((sketch) => (
            <div
              key={sketch.id}
              className={`aspect-square rounded-card ${sketch.color} flex items-center justify-center`}
              aria-label={sketch.label}
            >
              {/* TODO: ganti dengan next/image saat aset tersedia */}
              <span className={`font-heading text-sm font-bold text-center px-2 ${sketch.textColor}`}>
                {sketch.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
