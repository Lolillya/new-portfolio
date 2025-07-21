import Logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <>
      <header className="bg-bg-surface absolute w-full backdrop-blur-md shadow-lg">
        <section className="div-wrapper flex items-center">
          <img src={Logo} width={50} />

        </section>
      </header>
    </>
  );
};
