import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Experience from "./Experience";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { I18nProvider } from "@/i18n/I18nContext";

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <I18nProvider>
      <div className="relative min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        {/* Ambient background glows */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.22_265)] opacity-20 blur-[120px]" />
          <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.65_0.20_300)] opacity-15 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.65_0.18_200)] opacity-15 blur-[140px]" />
        </div>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Technologies />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </I18nProvider>
  );
}
