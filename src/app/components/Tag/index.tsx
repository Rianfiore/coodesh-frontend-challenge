import { tagStyles } from "./styles";
import { TagProps } from "./types";

export function Tag({ children }: TagProps) {
  return (
    <span data-testid="tag" className={tagStyles()}>
      {children}
    </span>
  );
}
