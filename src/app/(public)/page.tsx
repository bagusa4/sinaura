import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Contribute from "@/features/home/sections/Contribute";
import CourseCatalog from "@/features/home/sections/CourseCatalog";
import FAQ from "@/features/home/sections/FAQ";
import FeaturedResources from "@/features/home/sections/FeaturedResources";
import FinalCTA from "@/features/home/sections/FinalCTA";
import Hero from "@/features/home/sections/Hero";
import LearningPrinciples from "@/features/home/sections/LearningPrinciples";
import LearningStreak from "@/features/home/sections/LearningStreak";
import OpenLibrary from "@/features/home/sections/OpenLibrary";
import Stats from "@/features/home/sections/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <LearningPrinciples />
        <CourseCatalog />
        <LearningStreak />
        <OpenLibrary />
        <FeaturedResources />
        <Contribute />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
