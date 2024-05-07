import { joinStyles } from "@/utils";

export function navBarStyles() {
  const styles = {
    base: `
      bg-white
      h-[64px]

      px-4
      py-3
      
      flex
      justify-center
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
