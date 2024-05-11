import { joinStyles } from "@/utils";

export function tagStyles() {
  const styles = {
    base: `
    text-xs
    flex
    items-center
    justify-center
    px-2
    py-1
    bg-neutral-grey000
    text-neutral-grey400
    rounded-full
    w-fit
    `,
  };

  return joinStyles(styles);
}
