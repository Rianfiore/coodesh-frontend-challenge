import { Input } from "@/components";
import { useCurrentBreakpoint } from "@/hooks";
import { Bed } from "@/icons";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { useEffect, useState } from "react";
import { AmountRoomOptionType } from "../AmountRoomOption/types";
import { RoomDropdown } from "../RoomDropdown";
import { RoomSearchProps } from "./types";

export function RoomSearch({
  isHovered = false,
  onInputChange,
}: RoomSearchProps) {
  const [selectedItem, setSelectedItem] = useState<AmountRoomOptionType>({
    id: 0,
    text: null,
    value: "Todos",
  });
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const currentBreakpoint = useCurrentBreakpoint();
  const isMobile =
    currentBreakpoint?.screenSize! <
    convertPixelIntoNumber(defaultTheme.screens.laptop);
  const dropdownVariant = isMobile ? "mobile" : "default";

  function handleSelectedItem(item: AmountRoomOptionType) {
    setIsDropdownOpened(false);
    setSelectedItem(item);
  }

  function handleDropdownClose() {
    setIsDropdownOpened(false);
  }

  function handleInputFocus() {
    setIsDropdownOpened(true);
  }

  useEffect(() => {
    if (onInputChange) {
      onInputChange(selectedItem.text || "");
    }
  }, [selectedItem]);

  return (
    <Input
      variant={isMobile ? "mobile" : "default"}
      id="room-input"
      data-testid="room-input"
      icon={<Bed />}
      label="Nº de Quartos"
      placeholder="Quantos Quartos?"
      width="w-[373px]"
      isHovered={isHovered}
      onInputFocus={handleInputFocus}
      currentValue={selectedItem.text}
      type="select"
    >
      {isDropdownOpened && (
        <RoomDropdown
          variant={dropdownVariant}
          onClose={handleDropdownClose}
          onSelectItem={handleSelectedItem}
          selectedAmountRoomsOption={selectedItem}
        />
      )}
    </Input>
  );
}
