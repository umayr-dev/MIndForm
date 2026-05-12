import { ArchitectureSection } from "@/components/mindform/architecture-section";
// import { CtaSection } from "@/components/mindform/cta-section";
import { FocusSection } from "@/components/mindform/focus-section";
import { FutureSection } from "@/components/mindform/future-section";
import { HeroSection } from "@/components/mindform/hero-section";
import { MissionSection } from "@/components/mindform/mission-section";
import { ResearchLibrarySection } from "@/components/mindform/research-library-section";
import { SiteFooter } from "@/components/mindform/site-footer";
import { SiteHeader } from "@/components/mindform/site-header";
import { SpotlightGridSection } from "@/components/mindform/spotlight-grid-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <SpotlightGridSection />
        <MissionSection />
        <ResearchLibrarySection />
        <FocusSection />
        <ArchitectureSection />
        <FutureSection />
        {/* <CtaSection /> */}
      </main>
      <SiteFooter />
    </>
  );
}
