import { joinStyles } from "@/utils";

export function prevButtonStyles() {
  const styles = {
    base: `
     -rotate-180
     ml-2
     w-[40px]
     h-[40px]
     rounded-full
     shadow-2xl
    `,
    isHovered: `
  data-[ishovered=true]:bg-neutral-white/70
  data-[ishovered=true]:hover:bg-neutral-white/90
    data-[ishovered=false]:opacity-0
    `,
  };

  return joinStyles(styles);
}

export function nextButtonStyles() {
  const styles = {
    base: `
     mr-2
     w-[40px]
     h-[40px]
   bg-neutral-white/50
     rounded-full
     shadow-2xl
    `,
    isHovered: `
  data-[ishovered=true]:bg-neutral-white/70 
  data-[ishovered=true]:hover:bg-neutral-white/90
    data-[ishovered=false]:opacity-0
    `,
  };

  return joinStyles(styles);
}

export function buttonsContainerStyles() {
  const styles = {
    base: ` 
    flex
    justify-between
    top-2
    items-center
    absolute
    right-0
    z-10
    w-full
    h-full
    `,
  };

  return joinStyles(styles);
}
