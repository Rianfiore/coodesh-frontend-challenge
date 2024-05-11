import { Chevron } from "@/icons";
import { placeholderStyles, selectStyles } from "./styles";
import { SelectProps } from "./types";

export function Select({ defaultValue }: SelectProps) {
  return (
    <span data-testid='select' className={selectStyles()}>
      <p className={placeholderStyles()}>{defaultValue}</p>
      <Chevron />
    </span>
  );
}
