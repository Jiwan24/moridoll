import type { Metadata } from "next";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Concept from "@/components/sections/Concept";
import LogoPhilosophy from "@/components/sections/LogoPhilosophy";

export const metadata: Metadata = {
  title: "Tentang MoriDoll",
  description: `Kenali lebih dalam konsep, visi, dan filosofi logo di balik ${site.name} — sensory play kit edukatif untuk balita.`,
};

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4">
        <Concept />
        <LogoPhilosophy />
      </main>
      <Footer />
    </>
  );
}
