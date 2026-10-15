import { LayoutGrid, Baby, Fingerprint, BookOpen, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

const advantages: Advantage[] = [
  {
    id: "aspek",
    title: "4 Aspek Perkembangan",
    description: "Menstimulasi sensorik, motorik halus, bahasa, dan kemandirian dalam satu paket.",
    icon: LayoutGrid,
    color: "text-purple",
    bg: "bg-purple/10",
  },
  {
    id: "boneka",
    title: "Boneka Interaktif",
    description: "Boneka yang bisa diajak berpakaian, menyisir, dan menyikat gigi bersama.",
    icon: Baby,
    color: "text-orange",
    bg: "bg-orange/10",
  },
  {
    id: "tekstur",
    title: "Variasi Tekstur",
    description: "Kaus kaki sensorik dan sensory cube dengan beragam tekstur untuk eksplorasi.",
    icon: Fingerprint,
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    id: "panduan",
    title: "Buku Panduan & Lagu Edukatif",
    description: "Panduan aktivitas lengkap dan lagu edukatif via QR code yang mudah diakses.",
    icon: BookOpen,
    color: "text-ink",
    bg: "bg-yellow/15",
  },
  {
    id: "kemasan",
    title: "Kemasan Praktis",
    description: "Dikemas dengan rapi agar mudah digunakan dan disimpan kembali kapan saja.",
    icon: Package,
    color: "text-green",
    bg: "bg-green/10",
  },
];

export default function Advantages() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Keunggulan MoriDoll"
          subtitle="Mengapa MoriDoll menjadi pilihan tepat untuk tumbuh kembang si kecil?"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <Reveal key={adv.id} delay={i * 0.08}>
                <Card className="flex flex-col gap-4">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${adv.bg}`}
                    aria-hidden="true"
                  >
                    <Icon size={24} className={adv.color} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink">{adv.title}</h3>
                  <p className="font-body text-sm text-ink/70">{adv.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
