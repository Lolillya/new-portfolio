import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const labels = ["Hello", "About Me", "Skills", "Experience", "Projects"];

export const Sidescroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numSections = 5;
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const sectionHeight = docHeight / (numSections - 1);
      const index = Math.min(
        numSections - 1,
        Math.floor(scrollY / sectionHeight)
      );
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (!bar) return;
      gsap.to(bar, {
        backgroundColor: i <= activeIndex ? "#000" : "#d1d5db", // black or gray-300
        duration: 0.4,
        overwrite: "auto",
      });
    });
  }, [activeIndex]);

  const handleBarClick = (i: number) => {
    // @ts-ignore
    const smoother = gsap.core.globals().ScrollSmoother?.get();
    if (i === 0) {
      if (smoother) {
        smoother.scrollTo(0, true);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const section = document.getElementById(`section-${i}`);
      if (section) {
        if (smoother) {
          smoother.scrollTo(section, true);
        } else {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
      {labels.map((label, i) => (
        <div key={i} className="flex items-center justify-end gap-2">
          <span className={`text-xs pr-2 select-none transition-colors duration-300 ${i === activeIndex ? "text-black font-semibold" : "text-gray-400"}`}>{label}</span>
          <div
            ref={el => { barRefs.current[i] = el; }}
            className={"w-3 h-12 rounded-full cursor-pointer"}
            style={{ backgroundColor: i === 0 ? "#000" : "#d1d5db" }}
            onClick={() => handleBarClick(i)}
          />
        </div>
      ))}
    </div>
  );
};