import { joinStyles } from "@/utils";

export function announcementSectionStyles() {
  const styles = {
    base: `
    flex
    pt-10
    pb-16
    px-4
   justify-center
    `,
  };

  return joinStyles(styles);
}

export function announcementPrevButtonStyles() {
  const styles = {
    base: `
    flex
    items-center
    justify-center
    w-[40px]
    h-[40px]
    -rotate-180
    rounded-full
    `,
    hover: `
    hover:bg-neutral-grey100/50 
    `,
  };

  return joinStyles(styles);
}

export function announcementNextButtonStyles() {
  const styles = {
    base: `
    flex
    items-center
    justify-center
    w-[40px]
    h-[40px]
    rounded-full
    `,
    hover: `
    hover:bg-neutral-grey100/50 
    `,
  };

  return joinStyles(styles);
}

export function announcementTitleStyles() {
  const styles = {
    base: `
    flex
    items-center
    gap-1
    font-bold
    text-2xl
    `,
  };

  return joinStyles(styles);
}

export function announcementCityStyles() {
  const styles = {
    base: `
    flex
    items-center
    font-bold
    text-2xl
    text-support-orange300
    gap-1
    `,
    hover: `
    hover:cursor-pointer
    `,
  };

  return joinStyles(styles);
}

export function textToLinkStyles() {
  const styles = {
    base: `
    text-base
    text-support-blue300
    flex
    items-center
    gap-1
    `,
  };

  return joinStyles(styles);
}
