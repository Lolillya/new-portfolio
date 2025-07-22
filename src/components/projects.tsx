import projectsData from "../constants/const.json";
import { Button } from "./ui/button";


export const Projects = () => {
  const projects = projectsData.projects;
  return (
    <>
      <section>
        <div className="w-full flex justify-center border-b border-border py-5">
          <span className="text-6xl">Projects</span>
        </div>
        <div className="py-5 flex flex-col gap-8">
          {projects.map((project) => (
            <div className="flex gap-4 justify-between" key={project.name}>
              <div>
                {/* <div className="bg-gray-400 w-[30rem] h-[30rem] flex items-center justify-center rounded-md"> */}
                  <img src={project.img} alt={project.name} width={300} className="object-contain rounded-md" />
                  {/* Optionally add an image here if available */}
                {/* </div> */}
              </div>
              <div className="flex flex-col gap-2 max-w-[40rem]">
                <span className="text-2xl">{project.name}</span>
                <p className="text-justify">{project.desc}</p>
                <div>
                  <span>Tech Stack</span>
                  <ul className="flex gap-2 flex-wrap mt-1">
                    {project.stack.map((tech: string) => (
                      <li className="bg-surface shadow-md p-2 rounded-full text-xs" key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 mt-2">
                  <Button style="1">Live</Button>
                  <Button style="2">GitHub</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
