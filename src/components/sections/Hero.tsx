"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-cream via-purple/5 to-orange/5 pt-16 pb-12 md:pt-24 md:pb-20"
    >
      {/* Enhanced decorative blobs with movement */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div 
          animate={!shouldReduce ? {
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-teal to-purple blur-3xl" 
        />
        <motion.div 
          animate={!shouldReduce ? {
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tl from-yellow via-orange to-teal blur-3xl" 
        />
        <motion.div 
          animate={!shouldReduce ? {
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-green/30 blur-3xl" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Age badge with icon */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-teal/30 to-green/30 backdrop-blur-sm px-5 py-2 text-sm font-heading font-bold text-teal border-2 border-teal/20 shadow-lg"
            >
              <Sparkles size={16} className="text-teal" />
              Untuk usia 18 bulan – 5 tahun
            </motion.span>

            {/* Headline with gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-balance md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-purple via-orange to-purple bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Play Today,
              </span>
              <br />
              <span className="text-purple drop-shadow-sm">
                Grow Every Day
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-lg md:text-xl text-ink/80 max-w-xl leading-relaxed"
            >
              MoriDoll — sensory play kit edukatif yang menstimulasi <strong className="text-purple font-bold">sensorik, motorik halus, bahasa, dan kemandirian</strong> balita lewat bermain yang menyenangkan.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#produk"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange to-orange/90 text-white font-heading font-bold px-8 py-4 text-base min-h-[44px] hover:shadow-xl hover:shadow-orange/30 hover:scale-105 active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 shadow-lg"
              >
                <Sparkles size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                Lihat Produk
              </a>
              <a
                href="#usia"
                className="inline-flex items-center justify-center rounded-full border-2 border-purple bg-white/50 backdrop-blur-sm text-purple font-heading font-bold px-8 py-4 text-base min-h-[44px] hover:bg-white hover:shadow-lg hover:scale-105 active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
              >
                Panduan Aktivitas
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center text-sm font-body text-ink/60 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green animate-pulse" />
                Aman untuk anak
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                Edukatif & menyenangkan
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — Premium logo showcase with 3D-like effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
          >
            {/* Orbit ring effect */}
            {!shouldReduce && (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="h-[420px] w-[420px] md:h-[500px] md:w-[500px] rounded-full border-2 border-dashed border-purple/20" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="h-[360px] w-[360px] md:h-[420px] md:w-[420px] rounded-full border-2 border-dotted border-teal/20" />
                </motion.div>
              </>
            )}

            {/* Floating decorative elements - more dynamic */}
            {!shouldReduce && (
              <>
                {/* Yellow star - animated orbit */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 md:-top-12"
                  >
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="#FFC933" className="drop-shadow-lg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Teal heart bubble */}
                <motion.div
                  animate={{ 
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-4 right-8 md:right-4 z-20"
                  aria-hidden="true"
                >
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-teal to-green shadow-xl flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-teal/40 animate-ping" />
                  </div>
                </motion.div>

                {/* Orange playful blob */}
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 left-4 md:left-8 z-20"
                  aria-hidden="true"
                >
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-orange to-yellow shadow-xl flex items-center justify-center font-heading text-white text-2xl font-bold">
                      😊
                    </div>
                    <div className="absolute inset-0 rounded-full bg-orange/30 blur-xl" />
                  </div>
                </motion.div>

                {/* Green sparkle */}
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    x: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-16 right-8 md:bottom-20 md:right-12 z-20"
                  aria-hidden="true"
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green to-teal shadow-lg rotate-45 flex items-center justify-center">
                    <Sparkles size={28} className="text-white -rotate-45" />
                  </div>
                </motion.div>

                {/* Purple music note */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, -15, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-1/4 -left-4 md:left-0 z-20"
                  aria-hidden="true"
                >
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-purple to-purple/80 shadow-lg flex items-center justify-center text-white text-2xl">
                    ♪
                  </div>
                </motion.div>

                {/* Additional sparkle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: i * 0.8,
                      ease: "easeInOut"
                    }}
                    className="absolute"
                    style={{
                      top: `${20 + i * 25}%`,
                      left: `${30 + i * 20}%`,
                    }}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFC933">
                      <path d="M12 0l1.5 8.5L22 10l-8.5 1.5L12 20l-1.5-8.5L2 10l8.5-1.5L12 0z"/>
                    </svg>
                  </motion.div>
                ))}
              </>
            )}

            {/* Main Logo with premium 3D card effect */}
            <motion.div
              animate={!shouldReduce ? { 
                y: [0, -12, 0],
              } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Multi-layer shadow for 3D depth */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple via-orange to-yellow opacity-30 blur-2xl scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-[2rem] bg-white/50 backdrop-blur-sm -z-10 translate-y-4 translate-x-4" />
              <div className="absolute inset-0 rounded-[2rem] bg-white/30 backdrop-blur-sm -z-20 translate-y-8 translate-x-8" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 lg:p-16 border-4 border-white/50">
                {/* Animated gradient border glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple via-orange via-yellow via-teal to-purple bg-[length:400%_400%] animate-gradient opacity-50 blur-xl -z-10" />
                
                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-yellow shadow-lg" />
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-teal shadow-lg" />
                <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-green shadow-lg" />
                <div className="absolute -bottom-3 -right-3 h-8 w-8 rounded-full bg-purple shadow-lg" />
                
                {/* Logo */}
                <div className="relative h-48 w-72 md:h-56 md:w-96 lg:h-64 lg:w-[28rem]">
                  <Image
                    src="/logo/logo.jpeg"
                    alt="MoriDoll Logo — Play Today, Grow Every Day"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 448px"
                  />
                </div>

                {/* Shine effect overlay */}
                {!shouldReduce && (
                  <motion.div
                    animate={{
                      x: ['-200%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    style={{ transformOrigin: 'center' }}
                  />
                )}
              </div>

              {/* Floating badge below logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div className="bg-gradient-to-r from-purple to-orange text-white font-heading font-bold px-6 py-3 rounded-full shadow-xl text-sm md:text-base flex items-center gap-2">
                  <Sparkles size={18} />
                  Sensory Play Kit #1
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
