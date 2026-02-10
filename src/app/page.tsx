import Hero from "@/components/home/Hero";
import FeaturedGrid from "@/components/home/FeaturedGrid";
import AboutPreview from "@/components/home/AboutPreview";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import ParallaxShowcase from "@/components/home/ParallaxShowcase";
import Services from "@/components/home/Services";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedGrid />
      <HorizontalScroll />
      <AboutPreview />
      <ParallaxShowcase />
      <Services />
      <ContactCTA />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-[10px] uppercase tracking-[0.3em] text-white/30">
        &copy; {new Date().getFullYear()} AURA PHOTOGRAPHY. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
