import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ExperienceEducation from "@/components/ExperienceEducation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="frame">
      <div className="hero-wrap">
        <HeroBackground />
        <Header />
        <Hero />
      </div>

      <About />
      <Projects />
      <Skills />
      <ExperienceEducation />
      <Footer />
    </div>
  );
}
