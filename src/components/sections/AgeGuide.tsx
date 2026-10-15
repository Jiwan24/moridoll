"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Tabs from "@/components/ui/Tabs";
import { ageGuide, type AgeGroup } from "@/data/age-guide";
import { cn } from "@/lib/utils";

const colorMap: Record<AgeGroup["color"], string> = {
  teal: "border-teal bg-teal/5 text-teal",
  orange: "border-orange bg-orange/5 text-orange",
  yellow: "border-yellow bg-yellow/5 text-ink",
  green: "border-green bg-green/5 text-green",
};

const iconColorMap: Record<AgeGroup["color"], string> = {
  teal: "text-teal",
  orange: "text-orange",
  yellow: "text-yellow",
  green: "text-green",
};

export default function AgeGuide() {
  const [activeId, setActiveId] = useState<string>(ageGuide[0].id);
  const shouldReduce = useReducedMotion();

  const activeGroup = ageGuide.find((g) => g.id === activeId) ?? ageGuide[0];

  const tabs = ageGuide.map((g) => ({ id: g.id, label: g.range }));

  return (
    <section id="usia" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Panduan Aktivitas per Usia"
          subtitle="Aktivitas yang sesuai dengan tahapan tumbuh kembang si kecil."
        />

        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <Tabs tabs={tabs} activeId={activeId} onChange={setActiveId} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              role="tabpanel"
              aria-label={`Panduan usia ${activeGroup.range}`}
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduce ? {} : { opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={cn(
                "rounded-card border-2 p-6 md:p-8",
                colorMap[activeGroup.color]
              )}
            >
              <div className="mb-4">
                <span className="font-heading text-xs font-semibold uppercase tracking-wider opacity-70">
                  {activeGroup.range}
                </span>
                <h3 className="font-heading text-2xl font-bold mt-1">
                  {activeGroup.title}
                </h3>
              </div>

              <ul className="flex flex-col gap-3 mt-4">
                {activeGroup.activities.map((activity) => (
                  <li key={activity} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className={cn("mt-0.5 shrink-0", iconColorMap[activeGroup.color])}
                      aria-hidden="true"
                    />
                    <span className="font-body text-base text-ink">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
