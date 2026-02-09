import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { FEATURES, CTA_BUTTONS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Full Stack Developer"
        subtitle="& AI Automation Expert"
        description="Crafting cutting-edge web applications powered by AI. Specializing in automation, prompt engineering, and full-stack development."
        buttons={CTA_BUTTONS}
      />

      {/* Features Section */}
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-background px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
