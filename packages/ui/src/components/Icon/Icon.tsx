import { twMerge } from "tailwind-merge";
export interface IconProps {
  name: string;
  twStyle?: string;
}

/**
 * Icons that use Material Symbols Icons - see https://fonts.google.com/icons
 *
 * @example
 *
 * <Icon name="search" twStyle="text-red-500 text-4xl"/>
 *
 */

export function Icon({ name, twStyle }: IconProps) {
  return (
    <span
      title={name}
      className={twMerge("material-symbols-outlined", twStyle)}
      dangerouslySetInnerHTML={{ __html: name }}
    />
  );
}
