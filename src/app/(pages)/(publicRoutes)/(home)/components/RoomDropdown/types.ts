import { RoomItemType } from "@/types";

export interface RoomDropdownItemProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  title: string;
  subtitle: string;
}

export interface RoomDropdownProps {
  variant?: "default" | "mobile";
  onClose: () => void;
  onSelectItem: (item: RoomItemType) => void;
  selectedAmountRoomsOption: RoomItemType;
}
