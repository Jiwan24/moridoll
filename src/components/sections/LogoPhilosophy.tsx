"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { logoColors } from "@/data/logo-colors";
import { cn } from "@/lib/utils";

export default function LogoPhilosophy() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="logo" className="py-16 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Filosofi Logo MoriDoll"
          subtitle="Setiap warna dalam logo MoriDoll memiliki makna yang mendalam."
        />

        {/* Logo image */}
        <div className="relative mx-auto mb-10 h-20 w-48 md:h-24 md:w-60">
          <Image
            src="/logo/logo.jpeg"
            alt="Logo MoriDoll"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Color cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {logoColors.map((item, idx) => (
            <div
              key={item.name}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={cn(
                "rounded-card bg-white shadow-sm overflow-hidden flex flex-col",
                "border-t-4 transition-all duration-200 cursor-default",
                hoveredIdx === idx
                  ? "scale-105 shadow-xl"
                  : "scale-100 shadow-sm"
              )}
              style={{ borderTopColor: item.hex }}
            >
              {/* Color swatch circle */}
              <div className="flex justify-center pt-5 pb-3">
                <div
                  className="h-12 w-12 rounded-full"
                  style={{ backgroundColor: item.hex }}
                  aria-label={`Warna ${item.name}: ${item.hex}`}
                />
              </div>
              {/* Info */}
              <div className="flex flex-col gap-1 px-4 pb-5">
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
