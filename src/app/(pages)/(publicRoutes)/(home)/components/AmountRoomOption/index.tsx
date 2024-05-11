import { amountRoomOptionStyles } from "./styles";
import { AmountRoomOptionProps } from "./types";

export function AmountRoomOption({
  option,
  isSelected,
  onSelect,
}: AmountRoomOptionProps) {
  return (
    <span
      data-testid="amount-room-option"
      className={amountRoomOptionStyles({ isSelected })}
      onClick={() => onSelect(option)}
    >
      {option.value}
    </span>
  );
}
