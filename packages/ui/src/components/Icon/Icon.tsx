export interface IconProps {
  name: string;
}

/**
 * Icons that use Material Symbols Icons - see https://fonts.google.com/icons
 *
 * @example
 *
 * <Icon name="search" />
 *
 */

export function Icon({ name }: { name: string }) {
  return (
    <span
      title={name}
      className={"material-symbols-outlined"}
      dangerouslySetInnerHTML={{ __html: name }}
    />
  );
}
