// Placeholder stub — FEAT-003 replaces this with the full interactive Tabs component
import SectionHeading from "@/components/ui/SectionHeading";

export default function AgeGuide() {
  return (
    <section id="usia" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Panduan Aktivitas per Usia"
          subtitle="Aktivitas yang sesuai dengan tahapan tumbuh kembang si kecil."
        />
        <div className="mx-auto max-w-lg rounded-card border-2 border-dashed border-teal/40 bg-teal/5 p-10 text-center">
          <p className="font-body text-base text-ink/60">
            Panduan Usia <span className="font-heading font-bold text-teal">(interaktif — segera hadir)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
