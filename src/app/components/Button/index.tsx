import { buttonStyles } from "./styles";
import { ButtonProps } from "./types";

export function Button({ border = "default", ...props }: ButtonProps) {
  return (
    <button
      data-testid="button"
      className={buttonStyles({ border })}
      {...props}
    >
      {props.children}
    </button>
  );
}
