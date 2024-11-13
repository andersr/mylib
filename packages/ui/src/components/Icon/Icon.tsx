import { twMerge } from "tailwind-merge";
export interface IconProps {
  name: string;
  twStyle?: string;
  sizePx?: string;
}

/**
 * Icons that use Material Symbols Icons - see https://fonts.google.com/icons
 *
 * @example
 *
 * <Icon name="search" />
 *
 */

export function Icon({ name, twStyle, sizePx }: IconProps) {
  return (
    <span
      style={{
        fontSize: sizePx,
      }}
      title={name}
      className={twMerge("material-symbols-outlined", twStyle)}
      dangerouslySetInnerHTML={{ __html: name }}
    />
  );
}
