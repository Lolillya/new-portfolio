

export const AboutMe = () => {
  return (
    <>
      <section>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel viverra sem, eu viverra leo. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin dapibus commodo erat. Vivamus dignissim mattis neque eget pretium. In tristique consectetur ligula in sagittis. Curabitur pharetra ultricies ligula sit amet pretium. Maecenas laoreet elit in dolor porta, sit amet interdum felis tristique. Donec leo velit, convallis non gravida sagittis, fermentum at metus.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
