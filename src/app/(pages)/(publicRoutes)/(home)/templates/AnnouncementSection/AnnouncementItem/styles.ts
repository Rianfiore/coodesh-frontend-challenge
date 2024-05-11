import { joinStyles } from "@/utils";

export function itemContainerStyles() {
  const styles = {
    base: `
    flex
    flex-col
    justify-center
    bg-neutral-white
    h-full
    `,
  };

  return joinStyles(styles);
}

export function imageContainerStyles() {
  const styles = {
    base: `
    h-full
    bg-contain
    bg-no-repeat
    `,
  };

  return joinStyles(styles);
}

export function view3DTagContainerStyles() {
  const styles = {
    base: `
    flex
    gap-2
    absolute
    z-10
    left-[20px]
    top-[12px]
    bg-neutral-grey000
    py-1
    px-2
    rounded-full
    shadow-2xl
    `,
  };

  return joinStyles(styles);
}

export function textContentStyles() {
  const styles = {
    base: `
    flex
    flex-col
    gap-3
    w-full
    items-start
    text-start
    p-4
    bottom-9
    relative
    `,
  };

  return joinStyles(styles);
}

export function descriptionStyles() {
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
    text-base
    font-bold
    `,
  };

  return joinStyles(styles);
}

export function subtitleStyles() {
  const styles = {
    base: `
    text-sm
    font-normal
    text-neutral-grey300
    `,
  };

  return joinStyles(styles);
}

export function specificationsContainerStyles() {
  const styles = {
    base: `
    flex
    flex-col
    gap-3
    `,
  };

  return joinStyles(styles);
}

export function flatDetailsStyles() {
  const styles = {
    base: `
    flex
    items-center
    gap-2
    `,
  };

  return joinStyles(styles);
}

export function bulletStyles() {
  const styles = {
    base: `
    w-[4px]
    h-[4px]
    bg-neutral-grey300
    rounded-full
    `,
  };

  return joinStyles(styles);
}

export function tagsContainerStyles() {
  const styles = {
    base: `
    flex
    gap-2
    items-center
    `,
  };

  return joinStyles(styles);
}
export function priceStyles() {
  const styles = {
    base: `
    text-support-orange300
    font-bold
    text-xl
    `,
  };

  return joinStyles(styles);
}
