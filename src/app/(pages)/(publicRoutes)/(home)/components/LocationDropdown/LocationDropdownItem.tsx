import { PinFilled } from "@/icons";
import { iconStyles, locationDropdownItemStyles, subtitleStyles, textContentStyles, titleStyles } from "./styles";
import { LocationDropdownItemProps } from "./types";

export function LocationDropdownItem({
  subtitle,
  title,
  ...props
}: LocationDropdownItemProps) {
  return (
    <span
      className={locationDropdownItemStyles()}
      {...props}
      data-testid="location-dropdown-item"
    >
      <PinFilled className={iconStyles()} />
      <span className={textContentStyles()}>
        <span className={titleStyles()}>{title}</span>
        <span className={subtitleStyles()}>{subtitle}</span>
      </span>
    </span>
  );
}
