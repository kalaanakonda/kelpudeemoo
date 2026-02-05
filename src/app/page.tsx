import { HeroSection } from "@/components/landing/hero-section";
import { StatsSection } from "@/components/landing/stats-section";
import { OutworksSection } from "@/components/landing/outworks-section";
import { SecuritySection } from "@/components/landing/security-section";
import { Footer } from "@/components/landing/footer";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import { EcosystemSection } from "@/components/landing/ecosystem-section";
import { KusdSection } from "@/components/landing/kusd-section";
import { VaultsSection } from "@/components/landing/vaults-section";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <KusdSection />
        <VaultsSection />
        <OutworksSection />
        <EcosystemSection />
        <NewsletterSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}
