import { twMerge } from "tailwind-merge";
// TODO: ensure info about using material symbols appears in type def file
export interface IconProps {
  iconName: string;
  iconStyles?: string; // TODO: add instructions for how to get autocomplete or rename to className?
}

/**
 * Icons that use Material Symbols Icons - see https://fonts.google.com/icons
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
