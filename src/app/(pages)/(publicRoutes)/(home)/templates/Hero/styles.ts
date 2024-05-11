import { joinStyles } from "@/utils";

export function heroContainerStyles() {
  const styles = {
    base: `
    bg-[url("/images/hero-banner-mobile.png")]
    bg-cover
    bg-no-repeat
    flex
    flex-col
    items-center
    justify-center
    w-full
    h-[40vw]
    max-h-[640px]
    min-h-[173px]
    bg-neutral-grey400
    px-16
    gap-8

    laptop:h-[35vw]
    laptop:justify-start
    laptop:pt-16
    laptop:bg-[url("/images/hero-banner.png")]

    `,
  };

  return joinStyles(styles);
}

export function heroTitleStyles() {
  const styles = {
    base: `
    self-start
    w-[93px]
    text-neutral-white
    text-2xl
    font-bold

    tablet:text-3xl
    tablet:leading-normal

    laptop:text-3xl
    laptop:w-fit
    laptop:self-center

    desktop:self-center
    desktop:pt-32
    `,
  };

  return joinStyles(styles);
}
