import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pathways from "@/components/Pathways";
import About from "@/components/About";
import EducationGovernment from "@/components/EducationGovernment";
import Consulting from "@/components/Consulting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll } from "framer-motion";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <motion.div 
        className="progress-bar" 
        style={{ scaleX: scrollProgress }}
      />
      
      <Nav />
      
      <main>
        <Hero />
        <Pathways />
        <About />
        <EducationGovernment />
        <Consulting />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
