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
      <div className="p-4 md:p-6 space-y-6">
        <main className="flex-1 space-y-6">
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <HeroSection />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <StatsSection />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <KusdSection />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <VaultsSection />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <OutworksSection />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <EcosystemSection />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <NewsletterSection />
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <SecuritySection />
          </div>
        </main>
        <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
