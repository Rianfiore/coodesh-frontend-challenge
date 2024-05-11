"use client";

import { searchSectionHeaderData } from "@/assets/data/searchSectionHeader";
import { useState } from "react";
import { LocationSearch, RoomSearch, SearchButton } from "../../components";
import {
  container,
  header,
  headerLine,
  headerTitle,
  headerTitleContainer,
  searchSectionContainerMain,
} from "./styles";

export function SearchSection() {
  const [headerMenu, setHeaderMenu] = useState(searchSectionHeaderData);

  function handleSelectHeaderMenu(headerId: number) {
    setHeaderMenu((prev) =>
      prev.map((item) => ({
        ...item,
        isSelected: item.id === headerId,
      }))
    );
  }

  return (
    <div data-testid="search-section" className={container()}>
      <div className={header()}>
        <span className={headerTitleContainer()}>
          {headerMenu.map((item) => (
            <span
              key={item.id}
              onClick={() => handleSelectHeaderMenu(item.id)}
              className={headerTitle()}
              data-isselected={item.isSelected}
              data-testid="search-section-header-title"
            >
              {item.title}
            </span>
          ))}
        </span>
        <hr className={headerLine()} />
      </div>

      <div className={searchSectionContainerMain()}>
        <LocationSearch />
        <RoomSearch />
      </div>

      <SearchButton>Buscar imóveis</SearchButton>
    </div>
  );
}
