import { joinStyles } from "@/utils";

export function roomDropdownStyles() {
  const styles = {
    base: `
    absolute
    translate-y-[80px]
    z-10
    flex
    flex-col
    gap-6
    px-6
    py-4
    pb-8
    bg-neutral-white
    rounded-2xl
    shadow-md
  `,
    variant: `
  data-[variant=mobile]:translate-y-[96px]
  `,
  };

  return joinStyles(styles);
}

export function roomDropdownItemStyles() {
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

export function optionGroupStyles() {
  const styles = {
    base: `
    flex
    flex-col
    gap-3
    `,
  };

  return joinStyles(styles);
}

export function dividerStyles() {
  const styles = {
    base: `
    border-t
    
    border-neutral-grey100
    `,
  };

  return joinStyles(styles);
}

export function labelStyles() {
  const styles = {
    base: `
    text-sm
    text-neutral-grey400

    `,
  };

  return joinStyles(styles);
}

export function buttonsContainerStyles() {
  const styles = {
    base: `
    flex
    gap-3
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
