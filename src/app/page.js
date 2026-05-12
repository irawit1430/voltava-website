import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TechnologySection from "@/components/sections/TechnologySection";
import WhyVoltavaSection from "@/components/sections/WhyVoltavaSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <IndustriesSection />
      <TechnologySection />
      <WhyVoltavaSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
