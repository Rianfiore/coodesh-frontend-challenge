import { joinStyles } from "@/utils";

export function searchBarStyles() {
  const styles = {
    base: `
    flex
    items-center
    justify-end
    w-fit
    gap-2
    bg-neutral-white
    rounded-full
    `,
  };

  return joinStyles(styles);
}

export function searchBarSkeletonStyles() {
  const styles = {
    base: `
    w-[804px]
    h-[80px]
    `,
  };

  return joinStyles(styles);
}

export function searchDividerStyles() {
  const styles = {
    base: `
    h-[38px]
    w-[1px]
    bg-neutral-grey200
    `,
  };

  return joinStyles(styles);
}

export function searchButtonContainerStyles() {
  const styles = {
    base: `
    absolute
    translate-x-[-10px]
    `,
  };

  return joinStyles(styles);
}
