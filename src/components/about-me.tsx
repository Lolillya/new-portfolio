export const AboutMe = () => {
  return (
    <>
      <section id="section-1">
        <div className="flex w-full items-center">
          <div className="w-full">
            <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl font-header">Web Developer</span>
            </div>

            <div className="w-5 h-5 bg-base-white rounded-full shadow-md" />

            {/* <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl font-header">Blockchain Developer</span>
            </div> */}

            {/* <div className="w-5 h-5 bg-base-white rounded-full shadow-md" /> */}

            {/* <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl font-header">Mobile Developer</span>
            </div> */}

            {/* <div className="w-5 h-5 bg-base-white rounded-full shadow-md" /> */}

            <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl font-header">Fullstack Developer</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <span className="text-6xl border-b border-border font-header text-center py-4">
              About Me
            </span>

            <div>
              <p className="text-xl text-justify">
                Full-Stack Developer specializing in React, Node.js, and .NET
                (C#) with experience building scalable web applications. Skilled
                in developing REST APIs, integrating frontend and backend
                systems, and delivering end-to-end solutions from design to
                deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
