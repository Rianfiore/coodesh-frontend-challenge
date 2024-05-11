"use client";

import { useState } from "react";
import { LocationSearch, RoomSearch, SearchButton } from "../../../components";
import {
  searchBarStyles,
  searchButtonContainerStyles,
  searchDividerStyles,
} from "./styles";

export function SearchBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [searchData, setSearchData] = useState({
    location: "",
    room: "",
  });

  function handleLocationSearchChange(text: string) {
    setSearchData((prev) => ({
      ...prev,
      location: text,
    }));
  }

  function handleRoomSearchChange(text: string) {
    setSearchData((prev) => ({
      ...prev,
      room: text,
    }));
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <span data-testid="search-bar" className={searchBarStyles()}>
      <LocationSearch onInputChange={handleLocationSearchChange} />
      <span className={searchDividerStyles()} />
      <RoomSearch
        onInputChange={handleRoomSearchChange}
        isHovered={isHovered}
      />
      <span
        data-testid="search-button-container"
        className={searchButtonContainerStyles()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchButton
          isExpanded={
            searchData.location.length > 0 || searchData.room.length > 0
          }
        />
      </span>
    </span>
  );
}
