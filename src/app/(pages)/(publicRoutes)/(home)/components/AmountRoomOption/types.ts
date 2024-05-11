import { RoomItemType } from "@/types";

export interface AmountRoomOptionProps {
  option: RoomItemType;
  isSelected: boolean;
  onSelect: (option: RoomItemType) => void;
}
