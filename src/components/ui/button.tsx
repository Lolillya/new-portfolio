interface ButtonProps {
  style: "1" | "2";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ style, className, children }: ButtonProps) => {
  let styleClass = "";
  if (style === "1") {
    styleClass = "bg-black/50 text-white";
  } else if (style === "2") {
    styleClass = "bg-white/30 text-black";
  }
  return (
    <button className={`${styleClass} ${className ?? ""}py-4 px-10 backdrop-blur-sm rounded-md border-border cursor-pointer shadow-md text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>{children}</button>
  );
};
