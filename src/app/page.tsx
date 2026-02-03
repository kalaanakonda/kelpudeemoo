import { HeroSection } from "@/components/landing/hero-section";
import { StatsSection } from "@/components/landing/stats-section";
import { PartnersSection } from "@/components/landing/partners-section";
import { OutworksSection } from "@/components/landing/outworks-section";
import { SecuritySection } from "@/components/landing/security-section";
import { Footer } from "@/components/landing/footer";
import { SimulationSection } from "@/components/landing/simulation-section";
import { ExploreSection } from "@/components/landing/explore-section";
import { LogoRevealSection } from "@/components/landing/logo-reveal-section";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <PartnersSection />
        <LogoRevealSection />
        <ExploreSection />
        <OutworksSection />
        <SimulationSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}
