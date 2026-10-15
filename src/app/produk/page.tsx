import type { Metadata } from "next";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PackageContents from "@/components/sections/PackageContents";

export const metadata: Metadata = {
  title: "Produk",
  description: `Lihat selengkapnya isi paket ${site.name}: boneka interaktif, kaus kaki sensorik, sensory cube, buku panduan, lagu edukatif, dan kemasan praktis.`,
};

export default function ProdukPage() {
  return (
    <>
      <Navbar />
      <main className="pt-4">
        <PackageContents />
      </main>
      <Footer />
    </>
  );
}
