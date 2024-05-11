import { joinStyles } from "@/utils";
import { InputProps } from "./types";

export function containerStyles({ width = "w-fit" }: Partial<InputProps>) {
  const styles = {
    base: `
  bg-neutral-white
    flex
    flex-col
    gap-2
    `,
    focus: `
    data-[isfocused=true]:shadow-lg
    `,
    hover: `
  hover:bg-neutral-grey100
    hover:cursor-pointer
    data-[ishovered=true]:bg-neutral-grey100
    `,
    variant: `
    data-[variant=default]:rounded-full
    data-[variant=default]:px-8
    data-[variant=default]:py-3

    data-[variant=mobile]:rounded-xl
    data-[variant=mobile]:border
  data-[variant=mobile]:border-neutral-grey200
    data-[variant=mobile]:px-6
    data-[variant=mobile]: py-4
    data-[variant=mobile]:w-full

    `,
  };

  return joinStyles(styles, width);
}

export function inputStyles() {
  const styles = {
    base: `
    relative
    flex
    items-start
    w-full
    max-w-[500px]
    `,
  };

  return joinStyles(styles);
}

export function labelStyles() {
  const styles = {
    base: `flex
    gap-2
    items-center
    font-bold
    text-sm
    w-full
    `,
  };

  return joinStyles(styles);
}

export function labelTextStyles() {
  const styles = {
    base: `flex
    gap-2
    items-center
    font-bold
    text-sm
    w-full
    `,
  };

  return joinStyles(styles);
}

export function selectIconStyles() {
  const styles = {
    base: `
    flex
    items-center
    justify-center
    
    `,
    isFocused: `
    data-[isfocused=true]:rotate-180
    `,
  };

  return joinStyles(styles);
}

export function inputTextStyles() {
  const styles = {
    base: `
    w-[250px]
    bg-transparent
    border-none
    text-base
    outline-none
    `,
    type: `
    data-[type=select]:pointer-events-none
    data-[type=select]:caret-transparent
    data-[type=select]:select-none
    `,
  };

  return joinStyles(styles);
}
