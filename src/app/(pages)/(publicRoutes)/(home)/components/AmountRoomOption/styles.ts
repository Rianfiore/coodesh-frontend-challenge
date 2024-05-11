import { joinStyles } from "@/utils";
import { AmountRoomOptionProps } from "./types";

export function amountRoomOptionStyles({
  isSelected,
}: Partial<AmountRoomOptionProps>) {
  const selectedStyles = isSelected
    ? "bg-neutral-grey000 text-support-purple200 outline-support-purple200"
    : " bg-neutral-white text-neutral-grey400 outline-neutral-grey200";

  const styles = {
    base: `
    min-w-[42px]
    h-[42px]
    flex
    items-center
    justify-center
    p-3    
    rounded-full
    text-sm
    font-semibold
    outline
    outline-1
    `,
    hover: `
    hover:cursor-pointer
    hover:bg-neutral-grey000/50
    `,
  };

  return joinStyles(styles, selectedStyles);
}
