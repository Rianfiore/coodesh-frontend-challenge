import { joinStyles } from "@/utils";

export function locationDropdownStyles() {
  const styles = {
    base: `
    absolute
    translate-y-[80px]
    z-10
    pt-3
    pb-4
    bg-neutral-white
    rounded-2xl
    shadow-md
  `,
    variant: `
    data-[variant=mobile]:translate-y-[90px]  
  `,
  };

  return joinStyles(styles);
}

export function locationDropdownItemStyles() {
  const styles = {
    base: `flex
    items-start
    gap-3
    px-3
    py-3
    hover:bg-neutral-grey000
    hover:cursor-pointer
    `,
  };

  return joinStyles(styles);
}

export function iconStyles() {
  const styles = {
    base: `
    relative
    top-1
    `,
  };

  return joinStyles(styles);
}

export function descriptionStyles() {
  const styles = {
    base: `
    text-sm
    text-neutral-grey200
    px-6
    py-3
    `,
  };

  return joinStyles(styles);
}

export function textContentStyles() {
  const styles = {
    base: `
    flex
    flex-col
    gap-1
    `,
  };

  return joinStyles(styles);
}

export function titleStyles() {
  const styles = {
    base: `
    text-sm`,
  };

  return joinStyles(styles);
}

export function subtitleStyles() {
  const styles = {
    base: `
    text-xs
    `,
  };

  return joinStyles(styles);
}
