import { AmountRoomOptionType } from "../AmountRoomOption/types";

export interface RoomDropdownItemProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  title: string;
  subtitle: string;
}

export interface RoomDropdownProps {
  variant?: "default" | "mobile";
  onClose: () => void;
  onSelectItem: (item: AmountRoomOptionType) => void;
  selectedAmountRoomsOption: AmountRoomOptionType;
}
