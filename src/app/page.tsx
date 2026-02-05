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
      <HeroSection />
      <div className="p-2 md:p-3 space-y-1.5">
        <main className="flex-1 space-y-1.5">
          <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
            <StatsSection />
          </div>
          <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
            <KusdSection />
          </div>
          <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
            <VaultsSection />
          </div>
          <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
            <OutworksSection />
          </div>
          <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
            <EcosystemSection />
          </div>
          <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
            <NewsletterSection />
          </div>
          <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
            <SecuritySection />
          </div>
        </main>
        <div className="rounded-xl bg-card text-card-foreground overflow-hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
