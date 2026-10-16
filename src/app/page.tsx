import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmileDivider from "@/components/layout/SmileDivider";

import Hero from "@/components/sections/Hero";
import FourAspects from "@/components/sections/FourAspects";
import Concept from "@/components/sections/Concept";
import PackageContents from "@/components/sections/PackageContents";
import Benefits from "@/components/sections/Benefits";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Advantages from "@/components/sections/Advantages";
import AgeGuide from "@/components/sections/AgeGuide";
import LogoPhilosophy from "@/components/sections/LogoPhilosophy";
import SketchGallery from "@/components/sections/SketchGallery";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero (bg-cream) */}
        <Hero />

        {/* Divider: cream → cream */}
        <SmileDivider color="#FFF9F0" />

        {/* 2. Four Aspects (bg-cream) */}
        <FourAspects />

        {/* Divider: cream → cream */}
        <SmileDivider color="#FFF9F0" />

        {/* 3. Concept (bg-cream) */}
        <Concept />

        {/* Divider: cream → white */}
        <SmileDivider color="#FFF9F0" />

        {/* 4. Package Contents (bg-white) */}
        <PackageContents />

        {/* Divider: white → cream */}
        <SmileDivider color="#FFFFFF" />

        {/* 5. Benefits (bg-cream) */}
        <Benefits />

        {/* Divider: cream → white */}
        <SmileDivider color="#FFF9F0" />

        {/* 6. Problem / Solution (bg-white) */}
        <ProblemSolution />

        {/* Divider: white → cream */}
        <SmileDivider color="#FFFFFF" />

        {/* 7. Advantages (bg-cream) */}
        <Advantages />

        {/* Divider: cream → white */}
        <SmileDivider color="#FFF9F0" />

        {/* 8. Age Guide (bg-white) */}
        <AgeGuide />

        {/* Divider: white → cream */}
        <SmileDivider color="#FFFFFF" />

        {/* 9. Logo Philosophy (bg-cream) */}
        <LogoPhilosophy />

        {/* Divider: cream → white */}
        <SmileDivider color="#FFF9F0" />

        {/* 10. Sketch Gallery (bg-white) */}
        <SketchGallery />

        {/* Divider: white → purple */}
        <SmileDivider color="#FFFFFF" />

        {/* 11. Contact CTA (bg-purple) */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
