import { joinStyles } from "@/utils";

export function searchButtonStyles() {
  const styles = {
    base: `
    flex
    gap-2
    bg-support-orange200
    p-4
    rounded-full
    text-neutral-white
    font-semibold
    w-full
    max-w-[500px]
    `,
    hover: `
    hover:bg-support-orange300
    `,
    active: `
    active:bg-support-orange100
    `,
    isExpanded: `
    data-[isexpanded=true]:after:content-['Buscar']
    `,
    variant: `
    data-[variant=mobile]:rounded-xl
    data-[variant=mobile]:justify-center
    `,
  };

  return joinStyles(styles);
}
