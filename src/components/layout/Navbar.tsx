"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Panduan Usia", href: "#usia" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-2" aria-label="MoriDoll — Beranda">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/logo.jpeg"
            alt="MoriDoll Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink hover:text-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="inline-flex items-center justify-center rounded-full bg-orange text-white font-heading font-bold px-5 py-2 text-sm min-h-[44px] hover:bg-orange/90 transition-colors"
          >
            Pesan Sekarang
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav className="bg-white border-t border-cream px-4 py-4 flex flex-col gap-1" aria-label="Navigasi mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base text-ink hover:text-purple py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-orange text-white font-heading font-bold px-5 py-3 text-base min-h-[44px] hover:bg-orange/90 transition-colors"
            onClick={() => setOpen(false)}
          >
            Pesan Sekarang
          </a>
        </nav>
      </div>
    </header>
  );
}
