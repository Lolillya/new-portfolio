import mmcmLogo from "../assets/mmcm-logo.svg";
import chedLogo from "../assets/ched-logo.svg";
import shopifyLogo from "../assets/react.svg"; // Placeholder, update if you have a shopify logo
import experienceData from "../constants/const.json";

const imageMap: Record<string, string> = {
  "Mapua Malayan Colleges Mindanao": mmcmLogo,
  CHED: chedLogo,
  "Self-Employed": shopifyLogo,
};

export const Experience = () => {
  const experience = experienceData.experience;
  return (
    <>
      <section id="section-3" className="flex flex-col">
        <div className="flex justify-center border-b border-border py-5">
          <span className="text-6xl">Experience</span>
        </div>
        {experience.map((exp, idx) =>
          idx % 2 === 0 ? (
            <div className="flex gap-4 py-10 justify-between" key={exp.company}>
              <div className="flex justify-center items-center w-full max-w-[20rem]">
                <img
                  src={imageMap[exp.company]}
                  alt={exp.company}
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
              <div className="flex flex-col justify-evenly flex-1 max-w-[40rem] text-justify">
                <div className="flex flex-col gap-2 justify-evenly">

                  <span className="text-4xl">{exp.company}</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">{exp.role}</span>
                    <div>
                      <ul className="flex gap-5">
                        {exp.stack.map((tech: string) => (
                          <li className="bg-surface shadow-md p-2 rounded-full text-xs" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-lg">{exp.desc}</p>

                {/* <div>
                  <Button style="1">GitHub</Button>
                </div> */}
              </div>
            </div>
          ) : (
            <div className="flex gap-4 py-10 justify-between" key={exp.company}>
              <div className="flex flex-col justify-evenly flex-1 max-w-[40rem] text-justify">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl">{exp.company}</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">{exp.role}</span>
                    <div>
                      <ul className="flex gap-5">
                        {exp.stack.map((tech: string) => (
                          <li className="bg-surface shadow-md p-2 rounded-full text-xs" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-lg">{exp.desc}</p>
                {/* <div>
                  <Button style="1">GitHub</Button>
                </div> */}
              </div>
              <div className="flex justify-center items-center w-full max-w-[20rem]">
                <img
                  src={imageMap[exp.company]}
                  alt={exp.company}
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};
