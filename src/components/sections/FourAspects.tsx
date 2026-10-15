import { Fingerprint, Hand, MessageCircle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { aspects, type Aspect } from "@/data/aspects";

// Map icon names explicitly — no dynamic string lookup
const iconMap: Record<string, LucideIcon> = {
  Fingerprint,
  Hand,
  MessageCircle,
  Star,
};

// Map color names to Tailwind border color classes
const borderColorMap: Record<Aspect["color"], string> = {
  teal: "border-teal",
  orange: "border-orange",
  yellow: "border-yellow",
  green: "border-green",
};

const iconBgMap: Record<Aspect["color"], string> = {
  teal: "bg-teal/15 text-teal",
  orange: "bg-orange/15 text-orange",
  yellow: "bg-yellow/20 text-ink",
  green: "bg-green/15 text-green",
};

export default function FourAspects() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="4 Aspek Perkembangan"
          subtitle="MoriDoll menstimulasi empat aspek penting tumbuh kembang balita melalui bermain yang menyenangkan."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aspects.map((aspect, i) => {
            const Icon = iconMap[aspect.icon];
            return (
              <Reveal key={aspect.id} delay={i * 0.1}>
                <Card
                  className={`border-t-4 ${borderColorMap[aspect.color]} flex flex-col gap-4`}
                >
                  {Icon && (
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${iconBgMap[aspect.color]}`}
                      aria-hidden="true"
                    >
                      <Icon size={24} />
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-bold text-ink">{aspect.title}</h3>
                  <p className="font-body text-sm text-ink/70">{aspect.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
