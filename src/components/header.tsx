import Logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <>
      <header className="w-full z-10">
        <div className="div-wrapper flex items-center">
          <img src={Logo} width={50} />
        </div>
      </header>
    </>
  );
};
