import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { IntroSection } from "@/components/sections/IntroSection";
import { LocalSeoSection } from "@/components/sections/LocalSeoSection";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/data/site";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <AboutSection />
      <PracticeAreasSection />
      <ApproachSection />
      <GallerySection preview />
      <LocalSeoSection />
      <BlogPreviewSection />
      <FaqSection />
      <ContactSection />
      <JsonLd data={faqJsonLd(faqItems)} />
    </>
  );
}
