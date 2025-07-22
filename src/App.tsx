import { Header } from "@/components/header";
import "./index.css";
import { Hero } from "./components/hero";
import heroBg from "@/assets/hero-bg.jpg";
import { Skills } from "./components/skills";
import { AboutMe } from "./components/about-me";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });
    return () => {
      smoother && smoother.kill();
    };
  }, []);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <main id="smooth-content" className="wrapper">
          <img src={heroBg} alt="hero" className="absolute inset-0 w-screen h-screen object-cover -z-10" />
          <div className="absolute inset-0 h-screen -z-10 pointer-events-none hero-gradient" />
          {/* Background fade overlay */}
          <div className="absolute inset-x-0 top-[40vh] bottom-0 z-10 pointer-events-none bg-gradient-to-b from-transparent to-[var(--base-white)]" />

          <Hero />
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
