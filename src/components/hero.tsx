import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <>
      <section id="section-0" className="mt-20">
        <div className="flex flex-col-reverse gap-6 md:flex-row md:gap-3">
          <div className="flex flex-col div-wrapper w-full md:w-3/4 gap-10 justify-center">
            <span className="font-header text-4xl md:text-6xl">Hello.</span>
            <span className="font-thin text-2xl md:text-4xl">
              -----------I'm Jerald
            </span>
            <span className="font-light text-xl md:text-3xl">
              Fullstack Developer
            </span>
          </div>

          <div className="flex flex-col justify-center items-center w-full div-wrapper">
            <img src={logo} className="w-48 md:w-full" />
            {/* <p className="text-2xl font-thin text-justify"> */}
            {/*   I am a motivated and versatile individual, always eager to take on new challenges. With a passion for */}
            {/*   learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth */}
            {/*   mindset, I am ready to make a meaningful contribution and achieve great things. */}
            {/* </p> */}
          </div>
        </div>
      </section>
    </>
  );
};
