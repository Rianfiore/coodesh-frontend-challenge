import amountRoomsData from "@/assets/data/amountRooms.json";
import { Select } from "@/components";
import { useClickInOut } from "@/hooks";
import { RefStateType } from "@/types";
import { RefObject, useEffect, useState } from "react";
import { AmountRoomOption } from "../AmountRoomOption";
import {
  buttonsContainerStyles,
  dividerStyles,
  labelStyles,
  optionGroupStyles,
  roomDropdownStyles,
} from "./styles";
import { RoomDropdownProps } from "./types";

export function RoomDropdown({
  variant = "default",
  selectedAmountRoomsOption,
  onSelectItem,
  onClose,
}: RoomDropdownProps) {
  const [roomSearchRef, setRoomSearchRef] = useState<RefStateType>({
    current: null,
  });
  const { ref: dropdownRef, isClickedOutside } = useClickInOut({
    ignoredRefs: [roomSearchRef],
  });

  useEffect(() => {
    if (isClickedOutside) {
      if (onClose) {
        onClose();
      }
    }
  }, [isClickedOutside]);

  useEffect(() => {
    if (!roomSearchRef.current) {
      const RoomSearch = document.getElementById("room-input");

      setRoomSearchRef({ current: RoomSearch });
    }
  }, []);

  return (
    <div
      data-variant={variant}
      data-testid="room-dropdown"
      className={roomDropdownStyles()}
      ref={dropdownRef as RefObject<HTMLDivElement>}
    >
      <div className={optionGroupStyles()}>
        <h3 className={labelStyles()}>Número de Quartos</h3>
        <span className={buttonsContainerStyles()}>
          {amountRoomsData.map((amountRoom) => (
            <AmountRoomOption
              key={amountRoom.id}
              onSelect={onSelectItem}
              isSelected={amountRoom.id === selectedAmountRoomsOption.id}
              option={amountRoom}
            />
          ))}
        </span>
      </div>

      <hr className={dividerStyles()} />

      <div className={optionGroupStyles()}>
        <h3 className={labelStyles()}>Tipo de Propriedade</h3>
        <Select defaultValue="Todos os tipos" />
      </div>
    </div>
  );
}
