import { Input } from "@/components";
import { useCurrentBreakpoint } from "@/hooks";
import { Pin } from "@/icons";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { useState } from "react";
import { LocationDropdown } from "../LocationDropdown";
import { LocationSearchProps } from "./types";

export function LocationSearch({ onInputChange }: LocationSearchProps) {
  const currentBreakpoint = useCurrentBreakpoint();
  const isMobile =
    currentBreakpoint?.screenSize! <
    convertPixelIntoNumber(defaultTheme.screens.laptop);
  const dropdownVariant = isMobile ? "mobile" : "default";

  const [selectedItem, setSelectedItem] = useState<string>();

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  function onSelectedItem(text: string) {
    setIsDropdownOpened(false);
    setSelectedItem(text);

    if (onInputChange) {
      onInputChange(text);
    }
  }

  function onDropdownClose() {
    setIsDropdownOpened(false);
  }

  function onInputFocus() {
    setIsDropdownOpened(true);
  }

  return (
    <Input
      variant={isMobile ? "mobile" : "default"}
      id="location-input"
      data-testid="location-input"
      icon={<Pin />}
      label="Localização"
      placeholder="Qual é a localização?"
      width="w-[414px]"
      onInputChange={onInputChange}
      onInputFocus={onInputFocus}
      currentValue={selectedItem}
    >
      {isDropdownOpened && (
        <LocationDropdown
          variant={dropdownVariant}
          onClose={onDropdownClose}
          onSelectItem={onSelectedItem}
        />
      )}
    </Input>
  );
}
