import { joinStyles } from "@/utils";

export function menuStyles() {
  const styles = {
    base: `
      flex
      justify-between
      w-full
    `,
  };

  return joinStyles(styles);
}

export function buttonsContainerStyles() {
  const styles = {
    base: `
      flex
      items-center
      gap-4
    `,
  };

  return joinStyles(styles);
}

export function menuOptionsStyles() {
  const styles = {
    base: `
      flex
      items-center
      gap-10
    `,
  };

  return joinStyles(styles);
}

export function optionWithDropdownStyles() {
  const styles = {
    base: `
    flex
    items-center
    gap-1
    `,
  };

  return joinStyles(styles);
}
