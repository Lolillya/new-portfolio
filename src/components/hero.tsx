import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <>
      <section className="mt-50">
        <div className="flex gap-3 ">
          <div className="flex flex-col div-wrapper w-3/4 text-6xl">
            <span>Hello, I am</span>
            <span>Jerald Dagaang</span>
            <span>I am a Fullstack Developer</span>
          </div>

          <div className="flex flex-col justify-between w-full div-wrapper">
            <div className="">
              <p className="text-4xl font-thin">
                I am a motivated and versatile individual, always eager to take on new challenges.
                With a passion for learning, I am dedicated to delivering high-quality results.
                With a positive attitude and a growth mindset, I am ready to make a meaningful
                contribution and achieve great things.
              </p>
            </div>

            <div className="flex gap-3">
              <Button style="1">Check Resume</Button>
              <Button style="2">LinkedIn</Button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
