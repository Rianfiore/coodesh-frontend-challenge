import { fireEvent, render } from "@testing-library/react";
import { SearchBar } from ".";

describe("SearchBar Component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<SearchBar />);

    const searchBar = getByTestId("search-bar");

    expect(searchBar).toBeInTheDocument();
  });

  test("should location input text change when user change location input", () => {
    const { getByTestId } = render(<SearchBar />);

    const LocationSearch =
      getByTestId("location-input").getElementsByTagName("input")[0];

    fireEvent.change(LocationSearch, { target: { value: "Nova York" } });

    expect(LocationSearch.value).toBe("Nova York");
  });

  test("should call onMouseEnter when mouse enter in the search button container", () => {
    const { getByTestId } = render(<SearchBar />);
    const searchButtonContainer = getByTestId("search-button-container");
    const RoomSearch = getByTestId("room-input");

    expect(RoomSearch.getAttribute("data-ishovered")).toBe("false");

    fireEvent.mouseEnter(searchButtonContainer);

    expect(RoomSearch.getAttribute("data-ishovered")).toBe("true");
  });

  test("should call onMouseLeave when mouse leave in the search button container", () => {
    const { getByTestId } = render(<SearchBar />);
    const searchButtonContainer = getByTestId("search-button-container");
    const RoomSearch = getByTestId("room-input");

    fireEvent.mouseEnter(searchButtonContainer);

    expect(RoomSearch.getAttribute("data-ishovered")).toBe("true");

    fireEvent.mouseLeave(searchButtonContainer);

    expect(RoomSearch.getAttribute("data-ishovered")).toBe("false");
  });
});
