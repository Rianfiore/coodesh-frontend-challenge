import { joinStyles } from "@/utils";
import { ButtonProps } from "./types";

export function buttonStyles({ variant = "default" }: Partial<ButtonProps>) {
  const styles = {
    base: `
      flex
      items-center
      justify-center
      
      px-4
      py-1

      border
      border-support-purple

      text-support-purple
      font-semibold
    `,
    hover: `
    hover:bg-support-purple
      hover:text-neutral-white
    `,
    active: `
    active:bg-support-purpleDark
    `,
  };

  const variantStyles = {
    "full-rounded": `
      rounded-full
    `,
    default: `
    rounded-lg
    `,
  };

  return joinStyles(styles, variantStyles[variant]);
}
