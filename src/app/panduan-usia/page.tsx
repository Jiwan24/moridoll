import type { Metadata } from "next";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AgeGuide from "@/components/sections/AgeGuide";

export const metadata: Metadata = {
  title: "Panduan Usia",
  description: `Panduan aktivitas bermain ${site.name} berdasarkan rentang usia 18 bulan hingga 5 tahun untuk stimulasi tumbuh kembang optimal.`,
};

export default function PanduanUsiaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4">
        <AgeGuide />
      </main>
      <Footer />
    </>
  );
}
