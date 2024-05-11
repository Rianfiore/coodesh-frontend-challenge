import { locationDropdownItemMock } from "@/__mocks__/pages/home";
import { render } from "@testing-library/react";
import { LocationDropdownItem } from "./LocationDropdownItem";

describe("LocationDropdownItem component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(
      <LocationDropdownItem {...locationDropdownItemMock} />
    );

    const locationDropdownItem = getByTestId("location-dropdown-item");

    expect(locationDropdownItem).toBeInTheDocument();
  });

  test("should call onClick when clicked", () => {
    const { getByTestId } = render(
      <LocationDropdownItem {...locationDropdownItemMock} />
    );

    const locationDropdownItem = getByTestId("location-dropdown-item");

    locationDropdownItem.click();

    expect(locationDropdownItemMock.onClick).toHaveBeenCalled();
  });
});
