import meData from "../constants/const.json";

export const Footer = () => {
  const me = meData.me[0];
  return (
    <>
      <footer>
        <div className="flex justify-between w-full max-w-[1200px]">
          <span>© 2025 ir1ya</span>

          <div className="flex gap-5">
            <a href={me.github} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
              <span>GitHub</span>
              <div className="h-0.5 rounded-full w-full bg-border origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>

            <span>/</span>

            <a href={me.linkedin} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
              <span>LinkedIn</span>
              <div className="h-0.5 rounded-full w-full bg-border origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>

            <span>/</span>

            <a href={me.facebook} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
              <span>Facebook</span>
              <div className="h-0.5 rounded-full w-full bg-border origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>

            <span>/</span>

            <a href={me.whatsapp} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
              <span>WhatsApp</span>
              <div className="h-0.5 rounded-full w-full bg-border origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
