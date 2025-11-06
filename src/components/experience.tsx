import chedLogo from '../assets/ched-logo.svg';
import shopifyLogo from '../assets/shopify-logo.png';
import experienceData from '../constants/const.json';
import ReactLogo from '../assets/react.svg';

const imageMap: Record<string, string> = {
  CHED: chedLogo,
  'Contractual Developer': ReactLogo,
  Freelance: shopifyLogo,
};

export const Experience = () => {
  const experience = experienceData.experience;
  return (
    <>
      <section id="section-3" className="flex flex-col">
        <div className="flex justify-center border-b border-border py-5">
          <h1 className="text-6xl">Experience</h1>
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
                  <h3 className="text-4xl">{exp.company}</h3>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <div>
                      <ul className="flex gap-5 flex-wrap">
                        {exp.stack.map((tech: string) => (
                          <li
                            className="bg-surface shadow-md p-2 rounded-full text-xs text-nowrap"
                            key={tech}
                          >
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
                  <h3 className="text-4xl">{exp.company}</h3>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <div>
                      <ul className="flex gap-5 flex-wrap">
                        {exp.stack.map((tech: string) => (
                          <li
                            className="bg-surface shadow-md p-2 rounded-full text-xs"
                            key={tech}
                          >
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
          ),
        )}
      </section>
    </>
  );
};
