import { joinStyles } from "@/utils";

export function container() {
  const styles = {
    base: `
    flex
    flex-col
    gap-6
    pt-8
    pb-10
    px-4
    `,
  };

  return joinStyles(styles);
}

export function header() {
  const styles = {
    base: `
    flex
    flex-col
    `,
  };

  return joinStyles(styles);
}

export function headerTitleContainer() {
  const styles = {
    base: `
    flex
    gap-6
    `,
  };

  return joinStyles(styles);
}

export function headerTitle() {
  const styles = {
    base: `
    text-base
    font-normal
    p-1
    pb-2
    `,
    isSelected: `
  data-[isselected=true]:text-neutral-grey400
    data-[isselected=true]:border-b-2
    data-[isselected=true]:border-b-support-orange200

    data-[isselected=false]:text-neutral-grey300
    `,
  };

  return joinStyles(styles);
}

export function headerLine() {
  const styles = {
    base: `
    border-1
    border-neutral-grey200
    `,
  };

  return joinStyles(styles);
}

export function searchSectionContainerMain() {
  const styles = {
    base: `
    w-full
    flex
    flex-col
    items-center
    gap-3
    `,
  };

  return joinStyles(styles);
}
