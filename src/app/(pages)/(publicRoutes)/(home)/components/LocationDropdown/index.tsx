import places from "@/assets/data/place.json";
import { useClickInOut } from "@/hooks";
import { RefStateType, LocationItemType } from "@/types";
import { RefObject, useEffect, useState } from "react";
import { LocationDropdownItem } from "./LocationDropdownItem";
import { descriptionStyles, locationDropdownStyles } from "./styles";
import { LocationDropdownProps } from "./types";

export function LocationDropdown({
  onSelectItem,
  variant,
  onClose,
}: LocationDropdownProps) {
  const [LocationSearchRef, setLocationSearchRef] = useState<RefStateType>({
    current: null,
  });
  const { ref: dropdownRef, isClickedOutside } = useClickInOut({
    ignoredRefs: [LocationSearchRef],
  });

  function formatPlace(place: LocationItemType) {
    return `${place.name}, ${place.state.shortname}`;
  }

  useEffect(() => {
    if (isClickedOutside) {
      if (onClose) {
        onClose();
      }
    }
  }, [isClickedOutside]);

  useEffect(() => {
    if (!LocationSearchRef.current) {
      const RoomSearch = document.getElementById("location-input");

      setLocationSearchRef({ current: RoomSearch });
    }
  }, []);

  return (
    <div
      data-variant={variant}
      data-testid="location-dropdown"
      className={locationDropdownStyles()}
      ref={dropdownRef as RefObject<HTMLDivElement>}
    >
      <h3 className={descriptionStyles()}>
        Busque por cidade, região, bairro ou código
      </h3>
      <>
        {places.map((place) => (
          <LocationDropdownItem
            key={place.placeId}
            title={place.name}
            subtitle={`${place.name}, ${place.state.shortname}`}
            onClick={() => {
              onSelectItem(formatPlace(place));
            }}
          />
        ))}
      </>
    </div>
  );
}
