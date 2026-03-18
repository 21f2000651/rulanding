import { HeroSection } from "../components/HeroSection";
import { StoryFlow } from "../components/StoryFlow";
import { RigorUpOverview } from "../components/RigorUpOverview";
import { FeaturesBento } from "../components/FeaturesBento";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { RoleCards } from "../components/RoleCards";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-0 pt-8 sm:px-6 lg:px-8">
        <HeroSection />
        <StoryFlow />
      </div>

      {/* Full-width dark section with gradient transitions */}
      <RigorUpOverview />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 pt-0 sm:px-6 lg:px-8">
        <FeaturesBento />
        <TestimonialsSection />
        <FAQSection />
        <RoleCards />
      </div>
    </>
  );
}
