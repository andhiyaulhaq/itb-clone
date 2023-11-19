import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center py-1 px-2 rounded border-2 border-blue-950">
      <span className="text-blue-950">{children}</span>
    </button>
  );
};

export default Button;
