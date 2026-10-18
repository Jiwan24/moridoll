"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const sketches = [
  {
    id: "boneka",
    src: "/images/sketch-doll.webp",
    label: "Sketsa Boneka",
    bgColor: "bg-purple/20",
  },
  {
    id: "socks",
    src: "/images/sketch-socks.webp",
    label: "Sketsa Kaus Kaki",
    bgColor: "bg-orange/20",
  },
  {
    id: "cube",
    src: "/images/sketch-cube.webp",
    label: "Sketsa Sensory Cube",
    bgColor: "bg-teal/20",
  },
  {
    id: "hero",
    // TODO: ganti dengan sketch-kemasan.webp saat aset tersedia
    src: "/images/hero-doll.webp",
    label: "Sketsa Kemasan",
    bgColor: "bg-yellow/30",
  },
];

export default function SketchGallery() {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const [openLabel, setOpenLabel] = useState<string>("");
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!openSrc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenSrc(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openSrc]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Galeri Sketsa MoriDoll"
          subtitle="Tampilan komponen produk MoriDoll dari dekat."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {sketches.map((sketch) => (
            <button
              key={sketch.id}
              onClick={() => {
                setOpenSrc(sketch.src);
                setOpenLabel(sketch.label);
              }}
              className={cn(
                "relative aspect-square rounded-card overflow-hidden",
                sketch.bgColor,
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2",
                "hover:opacity-90 transition-opacity"
              )}
              aria-label={`Lihat ${sketch.label}`}
            >
              {/* TODO: ganti dengan next/image saat aset tersedia */}
              <Image
                src={sketch.src}
                alt={sketch.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                unoptimized
              />
              {/* Fallback label shown when image fails to load / is placeholder */}
              <span className="absolute inset-0 flex items-center justify-center font-heading text-sm font-bold text-center px-2 text-ink/50 pointer-events-none">
                {sketch.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {openSrc && (
          <motion.div
            key="lightbox"
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduce ? {} : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setOpenSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox: ${openLabel}`}
          >
            <motion.div
              initial={shouldReduce ? false : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={shouldReduce ? {} : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square w-full rounded-card overflow-hidden bg-ink/20">
                <Image
                  src={openSrc}
                  alt={openLabel}
                  fill
                  sizes="(max-width: 768px) 90vw, 672px"
                  className="object-contain"
                  unoptimized
                />
              </div>
              <button
                onClick={() => setOpenSrc(null)}
                className="absolute -top-4 -right-4 rounded-full bg-white p-2 shadow-lg hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Tutup lightbox"
              >
                <X size={20} className="text-ink" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


