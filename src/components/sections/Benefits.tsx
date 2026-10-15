import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { benefits } from "@/data/benefits";

export default function Benefits() {
  return (
    <section id="manfaat" className="py-16 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Manfaat MoriDoll"
          subtitle="Dirancang bersama prinsip-prinsip tumbuh kembang anak untuk hasil yang optimal."
        />

        <ul className="mx-auto max-w-2xl flex flex-col gap-4" role="list">
          {benefits.map((benefit, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <li className="flex items-start gap-4 rounded-card bg-white p-5 shadow-sm">
                <CheckCircle2
                  size={24}
                  className="mt-0.5 shrink-0 text-green"
                  aria-hidden="true"
                />
                <p className="font-body text-base text-ink/80">{benefit}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
