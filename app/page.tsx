import { AnimatedSection } from "@/components/animated-section"
import { GradientParticles } from "@/components/gradient-particles"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ExpertiseSection } from "@/components/sections/expertise-section"
import { ProductsOverviewSection } from "@/components/sections/products-overview-section"
import { TransformationSection } from "@/components/sections/transformation-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <div className="relative pt-16 overflow-hidden">
      <GradientParticles />
      <div className="relative z-10 space-y-16 md:space-y-20">
        <HeroSection />
        <AnimatedSection delay={0.05} intensity="bold">
          <StatsSection />
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <ExpertiseSection />
        </AnimatedSection>
        <AnimatedSection delay={0.12} intensity="bold">
          <ProductsOverviewSection />
        </AnimatedSection>
        <AnimatedSection delay={0.16}>
          <TransformationSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2} intensity="subtle">
          <CtaSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
