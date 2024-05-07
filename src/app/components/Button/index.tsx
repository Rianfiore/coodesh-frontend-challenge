import { buttonStyles } from "./styles";
import { ButtonProps } from "./types";

export function Button({ variant = "default", ...props }: ButtonProps) {
  const { className, ...restProps } = props;
  return (
    <button
      data-testid="button"
      className={buttonStyles({ variant })}
      {...restProps}
    >
      {props.children}
    </button>
  );
}
