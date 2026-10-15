"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  contact: z.string().min(5, "Email atau WhatsApp minimal 5 karakter"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const waDefaultMessage = encodeURIComponent(
  "Halo MoriDoll! Saya ingin mengetahui lebih lanjut tentang produk MoriDoll."
);

export default function ContactCTA() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const parts = [
      `Nama: ${data.name}`,
      `Kontak: ${data.contact}`,
      data.message ? `Pesan: ${data.message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(parts.join("\n"));
    // TODO: ganti whatsapp number di src/lib/site.ts sebelum go-live
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kontak" className="py-16 md:py-20 bg-purple text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Yuk, mulai bermain dan tumbuh bersama MoriDoll!
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-2xl mx-auto">
            Hubungi kami untuk informasi pemesanan atau pertanyaan lebih lanjut.
          </p>
        </div>

        <div className="mx-auto max-w-xl flex flex-col items-center gap-8">
          {/* WhatsApp direct link */}
          <a
            href={`https://wa.me/${site.whatsapp}?text=${waDefaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-green px-8 py-4 font-heading font-bold text-white text-lg min-h-[52px] hover:bg-green/90 transition-colors shadow-lg"
          >
            <MessageCircle size={24} aria-hidden="true" />
            Hubungi via WhatsApp
          </a>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full flex flex-col gap-5"
            aria-label="Formulir pesan"
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-name"
                className="font-body text-sm font-semibold text-white/90"
              >
                Nama <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Nama Anda"
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "error-name" : undefined}
                className="h-11 rounded-xl bg-white/20 px-4 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow"
                {...register("name")}
              />
              {errors.name && (
                <p id="error-name" role="alert" className="font-body text-xs text-yellow mt-0.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-contact"
                className="font-body text-sm font-semibold text-white/90"
              >
                Email / WhatsApp <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-contact"
                type="text"
                autoComplete="email"
                placeholder="email@contoh.com atau 08XX-XXXX-XXXX"
                aria-required="true"
                aria-invalid={errors.contact ? "true" : "false"}
                aria-describedby={errors.contact ? "error-contact" : undefined}
                className="h-11 rounded-xl bg-white/20 px-4 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow"
                {...register("contact")}
              />
              {errors.contact && (
                <p id="error-contact" role="alert" className="font-body text-xs text-yellow mt-0.5">
                  {errors.contact.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-message"
                className="font-body text-sm font-semibold text-white/90"
              >
                Pesan (opsional)
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Tuliskan pesan Anda di sini…"
                className="rounded-xl bg-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow resize-none"
                {...register("message")}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-orange py-3 font-heading font-bold text-white text-base hover:bg-orange/90 transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Kirim Pesan via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
