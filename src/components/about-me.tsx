

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
          </div>

          <div className="w-full flex flex-col gap-5">
            <span className="text-6xl border-b border-border">About Me</span>

            <div>
              <p className="text-2xl text-justify">I'm a passionate web developer with over 5 years of coding experience and a deep love for software engineering. I enjoy building clean, functional, and user-friendly web applications, and I'm constantly exploring new technologies to expand my skill set. Currently, I'm also diving into the world of blockchain development, driven by a strong interest in decentralized technologies and their potential to reshape the digital landscape. Whether it's crafting sleek front-end interfaces or exploring smart contracts, I'm always excited to learn, build, and push the limits of what software can do.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
