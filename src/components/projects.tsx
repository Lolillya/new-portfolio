import projectsData from "../constants/const.json";
import chedxLogo from '../assets/chedx-logo.svg';
import infectino from '../assets/infectino.png';
import prince from '../assets/prince.svg';
import closeout from '../assets/closeout-connection.svg';
import popstop from '../assets/popstop-logo.svg';


export const Projects = () => {
  const projects = projectsData.projects;
  const imageMap: Record<string, string> = {
    'chedx-logo.svg': chedxLogo,
    'infectino.png': infectino,
    'prince.svg': prince,
    'closeout-connection.svg': closeout,
    'popstop-logo.svg': popstop,
  };
  return (
    <>
      <section id="section-4">
        <div className="w-full flex justify-center border-b border-border py-5">
          <span className="text-6xl">Projects</span>
        </div>
        <div className="py-10 flex flex-col gap-10">
          {projects.map((project) => (
            <div className="flex gap-4 justify-between border-b border-border rounded-md" key={project.name}>
              <div className="flex mx-auto h-[20rem]">
                {/* <div className="bg-gray-400 w-[30rem] h-[30rem] flex items-center justify-center rounded-md"> */}
                <img
                  src={
                    typeof project.img === 'string' && imageMap[project.img.split('/').pop() as string]
                      ? imageMap[project.img.split('/').pop() as string]
                      : project.img
                  }
                  alt={project.name}
                  width={300}
                  className="object-contain rounded-md"
                />
                {/* Optionally add an image here if available */}
                {/* </div> */}
              </div>
              <div className="flex flex-col gap-2 max-w-[40rem]">
                <span className="text-2xl">{project.name}</span>
                <p className="text-justify">{project.desc}</p>
                <div>
                  <ul className="flex gap-2 flex-wrap mt-1">
                    {project.stack.map((tech: string) => (
                      <li className="bg-surface shadow-md p-2 rounded-full text-xs" key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex gap-4 mt-2"> */}
                {/*   <Button style="1">Live</Button> */}
                {/*   <Button style="2">GitHub</Button> */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
