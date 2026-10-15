import Image from "next/image";
import SmileDivider from "@/components/layout/SmileDivider";
import { site } from "@/lib/site";

const menuLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Panduan Usia", href: "#usia" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <>
      <SmileDivider color="#7B4FBF" flip />
      <footer className="bg-purple text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Column 1: Logo + tagline */}
            <div className="flex flex-col gap-4">
              <a href="#beranda" aria-label="MoriDoll — Beranda">
                <Image
                  src="/logo/moridoll-logo-white.svg"
                  alt="MoriDoll"
                  width={130}
                  height={40}
                />
              </a>
              <p className="font-body text-sm text-white/80 max-w-xs">
                {site.tagline} — Sensory play kit edukatif untuk tumbuh kembang balita yang optimal.
              </p>
            </div>

            {/* Column 2: Menu links */}
            <div>
              <h3 className="font-heading font-bold text-base mb-4 text-white">Menu</h3>
              <ul className="flex flex-col gap-2">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact + WhatsApp */}
            <div>
              <h3 className="font-heading font-bold text-base mb-4 text-white">Hubungi Kami</h3>
              <div className="flex flex-col gap-2 text-sm text-white/80 font-body">
                <p>Email: <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a></p>
                <p>WA: <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {site.whatsapp}
                </a></p>
              </div>
              <a
                href={`https://wa.me/${site.whatsapp}?text=Halo%20MoriDoll%2C%20saya%20ingin%20memesan!`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-orange text-white font-heading font-bold px-5 py-2 text-sm min-h-[44px] hover:bg-orange/90 transition-colors"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-white/20 text-center font-body text-sm text-white/60">
            © 2026 MoriDoll. Semua hak dilindungi.
          </div>
        </div>
      </footer>
    </>
  );
}
