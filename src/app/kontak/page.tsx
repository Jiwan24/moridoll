import type { Metadata } from "next";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.name} untuk informasi pemesanan atau pertanyaan lebih lanjut tentang sensory play kit edukatif untuk balita.`,
};

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4">
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
