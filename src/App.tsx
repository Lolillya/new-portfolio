import { Header } from "@/components/header";
import "./index.css";
import { Hero } from "./components/hero";
import heroBg from "@/assets/hero-bg.jpg";
import { Skills } from "./components/skills";
import { AboutMe } from "./components/about-me";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        {/* <img src={heroBg} alt="hero" className="absolute inset-0 w-screen h-screen object-cover -z-10" /> */}
        {/* Downward-fading gradient overlay */}
        {/* <div className="absolute inset-0 -z-10 pointer-events-none hero-gradient" /> */}

        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
