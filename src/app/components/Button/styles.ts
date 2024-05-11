import { joinStyles } from "@/utils";
import { ButtonProps } from "./types";

export function buttonStyles({
  border = "default",
}: Partial<ButtonProps>) {
  const styles = {
    base: `
      flex
      items-center
      justify-center
      
      px-4
      py-1

      border
      border-support-purple200

      text-support-purple200
      font-semibold
    `,
    hover: `
    hover:bg-support-purple200
      hover:text-neutral-white
    `,
    active: `
    active:bg-support-purple300
    `,
  };

  const borderStyles = {
    "full-rounded": `
      rounded-full
    `,
    default: `
    rounded-lg
    `,
  };

  return joinStyles(styles, borderStyles[border]);
}
