import { twMerge } from "tailwind-merge";
import { Icon, IconProps } from "../Icon/Icon";

export interface ButtonProps extends IconProps {
  onClick: () => void;
  buttonStyles?: string;
}

export function IconButton({
  onClick,
  buttonStyles,
  iconName,
  iconStyles,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge("flex items-center", buttonStyles)}
    >
      <Icon {...{ iconName, iconStyles }} />
    </button>
  );
}
