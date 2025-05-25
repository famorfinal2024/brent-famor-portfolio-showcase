
import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>
        
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        
        <section id="interests" className="min-h-screen py-20">
          <Interests />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
