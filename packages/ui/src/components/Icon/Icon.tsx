import { twMerge } from "tailwind-merge";
export interface IconProps {
  iconName: string;
  iconStyles?: string; // TODO: add instructions for how to get autocomplete or rename to className?
}

/**
 * Icon that uses Material Symbols Icons and Tailwind for styling
 *
 * @param iconName - use Material Symbols names, see https://fonts.google.com/icons
 * @param iconStyles - use Tailwind styling, see https://tailwindcss.com/
 *
 * @example
 *
 * <Icon iconName="search" iconStyles="text-red-500 text-4xl"/>
 *
 */

export function Icon({ iconName, iconStyles }: IconProps) {
  return (
    <span
      title={iconName}
      className={twMerge("material-symbols-outlined", iconStyles)}
      dangerouslySetInnerHTML={{ __html: iconName }}
    />
  );
}
