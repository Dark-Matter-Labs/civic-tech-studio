import Hero from "@/components/Hero";
import WhyCivicTech from "@/components/WhyCivicTech";
import OurPosition from "@/components/OurPosition";
import OurApproach from "@/components/OurApproach";
import CivicInfrastructure from "@/components/CivicInfrastructure";
import CurrentProjects from "@/components/CurrentProjects";
import LearningSection from "@/components/LearningSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyCivicTech />
      <OurPosition />
      <OurApproach />
      <CivicInfrastructure />
      <CurrentProjects />
      <LearningSection />
      <CallToAction />
    </main>
  );
}
