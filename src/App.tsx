import { Header } from "@/components/header";
import "./index.css";
import { Hero } from "./components/hero";
import heroBg from "@/assets/hero-bg.jpg";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <img src={heroBg} alt="hero" className="absolute inset-0 w-screen h-screen object-cover -z-10" />
        {/* Downward-fading gradient overlay */}
        <div className="absolute inset-0 -z-10 pointer-events-none hero-gradient" />

        <Hero />
      </main>
    </>
  );
}

export default App;
