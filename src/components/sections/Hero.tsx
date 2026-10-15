"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-cream pt-16 pb-8 md:pt-20 md:pb-12"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-yellow/30 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-48 w-48 rounded-full bg-purple/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Age badge */}
            <span className="inline-flex w-fit items-center rounded-full bg-teal/20 px-4 py-1.5 text-sm font-heading font-bold text-teal">
              Untuk usia 18 bulan – 5 tahun
            </span>

            {/* Headline */}
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-purple md:text-5xl lg:text-6xl">
              Play Today,<br />Grow Every Day
            </h1>

            {/* Sub-headline */}
            <p className="font-body text-lg text-ink/70 max-w-lg">
              MoriDoll — sensory play kit edukatif yang menstimulasi sensorik, motorik halus,
              bahasa, dan kemandirian balita lewat bermain yang menyenangkan.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#produk"
                className="inline-flex items-center justify-center rounded-full bg-orange text-white font-heading font-bold px-8 py-4 text-base min-h-[44px] hover:bg-orange/90 transition-colors"
              >
                Lihat Produk
              </a>
              <a
                href="#usia"
                className="inline-flex items-center justify-center rounded-full border-2 border-purple text-purple font-heading font-bold px-8 py-4 text-base min-h-[44px] hover:bg-purple/10 transition-colors"
              >
                Panduan Aktivitas
              </a>
            </div>
          </div>

          {/* Right column — hero image with floating blobs */}
          <div className="relative flex items-center justify-center">
            {/* Floating decorative circles */}
            {!shouldReduce && (
              <>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 left-8 h-14 w-14 rounded-full bg-yellow/70 shadow-lg"
                  aria-hidden="true"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-12 -right-4 h-10 w-10 rounded-full bg-teal/60 shadow-md"
                  aria-hidden="true"
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-8 left-4 h-12 w-12 rounded-full bg-orange/50 shadow-md"
                  aria-hidden="true"
                />
              </>
            )}

            {/* Hero image */}
            <div className="relative h-72 w-64 md:h-96 md:w-80">
              <Image
                src="/images/hero-doll.webp"
                alt="Boneka MoriDoll — sensory play kit edukatif untuk balita"
                fill
                priority
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
