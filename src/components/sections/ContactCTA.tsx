// Stub — FEAT-003 replaces with full RHF+Zod interactive form
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { MessageCircle } from "lucide-react";

const waMessage = encodeURIComponent(
  "Halo MoriDoll! Saya ingin mengetahui lebih lanjut tentang produk MoriDoll."
);

export default function ContactCTA() {
  return (
    <section id="kontak" className="py-16 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Yuk, mulai bermain dan tumbuh bersama MoriDoll!"
          subtitle="Hubungi kami untuk informasi pemesanan atau pertanyaan lebih lanjut."
        />

        <div className="mx-auto max-w-xl flex flex-col items-center gap-8">
          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${site.whatsapp}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-green px-8 py-4 font-heading font-bold text-white text-lg min-h-[52px] hover:bg-green/90 transition-colors shadow-lg"
          >
            <MessageCircle size={24} aria-hidden="true" />
            Hubungi via WhatsApp
          </a>

          {/* Static placeholder form — FEAT-003 replaces with RHF+Zod */}
          <div className="w-full rounded-card bg-white shadow-md p-8">
            <h3 className="font-heading text-lg font-bold text-ink mb-6">Kirim Pesan</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-body text-sm font-semibold text-ink/80" htmlFor="name-placeholder">
                  Nama
                </label>
                <div
                  id="name-placeholder"
                  className="h-11 rounded-xl border border-ink/20 bg-cream/60 px-4 flex items-center text-ink/40 font-body text-sm"
                  aria-disabled="true"
                  role="presentation"
                >
                  Nama Anda
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-body text-sm font-semibold text-ink/80" htmlFor="contact-placeholder">
                  Email / WhatsApp
                </label>
                <div
                  id="contact-placeholder"
                  className="h-11 rounded-xl border border-ink/20 bg-cream/60 px-4 flex items-center text-ink/40 font-body text-sm"
                  aria-disabled="true"
                  role="presentation"
                >
                  email@contoh.com atau 08XX-XXXX-XXXX
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-body text-sm font-semibold text-ink/80" htmlFor="message-placeholder">
                  Pesan (opsional)
                </label>
                <div
                  id="message-placeholder"
                  className="h-24 rounded-xl border border-ink/20 bg-cream/60 px-4 py-3 text-ink/40 font-body text-sm"
                  aria-disabled="true"
                  role="presentation"
                >
                  Tuliskan pesan Anda di sini…
                </div>
              </div>
              <div
                className="w-full rounded-full bg-orange/40 text-white font-heading font-bold py-3 text-center text-base cursor-not-allowed"
                aria-disabled="true"
                role="presentation"
              >
                Kirim Pesan (segera hadir)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
