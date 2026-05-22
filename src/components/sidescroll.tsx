import { useEffect, useState } from "react";
import gsap from "gsap";
import { Progress } from "@/components/ui/progress";

const labels = ["Hello", "About Me", "Skills", "Experience", "Projects"];
const numSections = 5;

export const Sidescroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressValues, setProgressValues] = useState<number[]>([
    100, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const sectionHeight = docHeight / (numSections - 1);

      const index = Math.min(
        numSections - 1,
        Math.ceil(scrollY / sectionHeight),
      );
      setActiveIndex(index);

      setProgressValues(
        labels.map((_, i) => {
          if (i === 0) return 100;
          const start = (i - 1) * sectionHeight;
          return Math.min(
            100,
            Math.max(0, ((scrollY - start) / sectionHeight) * 100),
          );
        }),
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50 font-poppins">
      {labels.map((label, i) => (
        <div key={i} className="flex items-center justify-end gap-2">
          <span
            className={`text-xs pr-2 select-none font-light tracking-wider transition-colors duration-300 ${
              i === activeIndex ? "text-black" : "text-gray-400"
            }`}
          >
            {label}
          </span>
          <div
            className="relative w-3 h-12 overflow-hidden rounded-full cursor-pointer"
            onClick={() => handleBarClick(i)}
          >
            <Progress
              value={progressValues[i]}
              className="absolute top-1/2 left-1/2 w-12 h-3 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gray-300 [&_[data-slot=progress-indicator]]:bg-black"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
