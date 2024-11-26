import { twMerge } from "tailwind-merge";

// TODO: component currently not being used by any external apps
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  twStyle?: string;
}

export function Button({ children, onClick, twStyle }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge("border rounded py-2 px-8 bg-white", twStyle ?? "")}
    >
      {children}
    </button>
  );
}
