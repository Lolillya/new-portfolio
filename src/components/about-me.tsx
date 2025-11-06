export const AboutMe = () => {
  return (
    <>
      <section id="section-1">
        <div className="flex w-full items-center">
          <div className="w-full">
            <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl">Web Developer</span>
            </div>

            <div className="w-5 h-5 bg-base-white rounded-full shadow-md" />

            <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl">Blockchain Developer</span>
            </div>

            <div className="w-5 h-5 bg-base-white rounded-full shadow-md" />

            <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl">Mobile Developer</span>
            </div>

            <div className="w-5 h-5 bg-base-white rounded-full shadow-md" />

            <div className="border-l-2 border-border p-5 ml-2 my-2">
              <span className="text-2xl">Fullstack Developer</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <span className="text-6xl border-b border-border">About Me</span>

            <div>
              <p className="text-2xl text-justify">
                Passionate software engineer dedicated to building clean,
                functional, and intuitive applications. Skilled at solving
                complex problems, quickly learning new technologies, and
                delivering software that drives real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
