import { joinStyles } from "@/utils";

export function selectStyles() {
  const styles = {
    base: `
    flex
    items-center
    w-full
    justify-between
    border
    border-neutral-grey200
    rounded-lg
    gap-2
    p-3
    `,
    hover: `
    cursor-pointer
    `,
  };

  return joinStyles(styles);
}

export function placeholderStyles() {
  const styles = {
    base: `
    text-sm
    `,
  };

  return joinStyles(styles);
}
