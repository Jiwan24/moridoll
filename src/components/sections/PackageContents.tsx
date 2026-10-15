import { Baby, Footprints, Box, BookOpen, QrCode, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { packageItems } from "@/data/package";

// Explicit icon map — no dynamic string lookup
const iconMap: Record<string, LucideIcon> = {
  Baby,
  Footprints,
  Box,
  BookOpen,
  QrCode,
  Package,
};

// Colors cycling through brand palette
const cardAccents = ["teal", "orange", "yellow", "green", "purple", "teal"] as const;

const accentStyles: Record<string, { bg: string; icon: string }> = {
  teal:   { bg: "bg-teal/10",   icon: "text-teal" },
  orange: { bg: "bg-orange/10", icon: "text-orange" },
  yellow: { bg: "bg-yellow/15", icon: "text-ink" },
  green:  { bg: "bg-green/10",  icon: "text-green" },
  purple: { bg: "bg-purple/10", icon: "text-purple" },
};

export default function PackageContents() {
  return (
    <section id="produk" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Isi Paket MoriDoll"
          subtitle="Satu paket lengkap untuk stimulasi tumbuh kembang balita yang optimal."
        />

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {packageItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            const accent = accentStyles[cardAccents[i % cardAccents.length]];

            return (
              // group enables CSS-only hover for the overlay
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-card bg-white shadow-md cursor-pointer"
              >
                {/* Default state */}
                <div className="flex flex-col items-center gap-4 p-6 transition-opacity duration-200 group-hover:opacity-0">
                  {Icon && (
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${accent.bg}`}
                      aria-hidden="true"
                    >
                      <Icon size={32} className={accent.icon} />
                    </div>
                  )}
                  <h3 className="font-heading text-base font-bold text-ink text-center">
                    {item.title}
                  </h3>
                </div>

                {/* Hover overlay with description */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${accent.bg}`}
                  aria-hidden="true"
                >
                  {Icon && <Icon size={28} className={accent.icon} />}
                  <h3 className="font-heading text-sm font-bold text-ink text-center">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-ink/80 text-center">
                    {item.description}
                  </p>
                </div>

                {/* Screen-reader accessible title + description (always present) */}
                <span className="sr-only">{item.title}: {item.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
