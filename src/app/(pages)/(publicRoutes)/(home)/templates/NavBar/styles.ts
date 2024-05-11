import { joinStyles } from "@/utils";

export function navBarStyles() {
  const styles = {
    base: `
      bg-white
      h-[56px]
      px-4
      py-3
      flex
      justify-center

      tablet:h-[64px]
    `,
  };

  return joinStyles(styles);
}

export function navContentStyles() {
  const styles = {
    base: `
    flex
    justify-between
    items-center
    gap-12

    w-full
    max-w-[1248px]
    `,
  };

  return joinStyles(styles);
}
