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
        {/* 1. Hero */}
        <Hero />

        {/* Divider: cream → cream (wave decoration) */}
        <SmileDivider color="#FFFFFF" />

        {/* 2. Four Aspects */}
        <FourAspects />

        {/* 3. Concept */}
        <Concept />

        {/* Divider */}
        <SmileDivider color="#FFFFFF" />

        {/* 4. Package Contents */}
        <PackageContents />

        {/* 5. Benefits */}
        <Benefits />

        {/* 6. Problem / Solution */}
        <ProblemSolution />

        {/* Divider */}
        <SmileDivider color="#FFF9F0" />

        {/* 7. Advantages */}
        <Advantages />

        {/* 8. Age Guide (placeholder) */}
        <AgeGuide />

        {/* Divider */}
        <SmileDivider color="#FFFFFF" />

        {/* 9. Logo Philosophy (static swatches) */}
        <LogoPhilosophy />

        {/* 10. Sketch Gallery (placeholder) */}
        <SketchGallery />

        {/* 11. Contact CTA (placeholder form + WA button) */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
