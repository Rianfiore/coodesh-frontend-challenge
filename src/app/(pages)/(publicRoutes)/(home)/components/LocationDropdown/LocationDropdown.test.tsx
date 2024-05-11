import {
  locationDropdownMock,
  locationOptionMock,
} from "@/__mocks__/pages/home";
import { fireEvent, render } from "@testing-library/react";
import { LocationDropdown } from "./";

describe("LocationDropdown component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(
      <LocationDropdown {...locationDropdownMock} />
    );
    const locationDropdown = getByTestId("location-dropdown");
    expect(locationDropdown).toBeInTheDocument();
  });

  test("should call onSelectItem function when clicked on option", () => {
    const { getAllByTestId } = render(
      <LocationDropdown {...locationDropdownMock} />
    );
    const locationDropdownItem = getAllByTestId(
      "location-dropdown-item"
    ).filter((option) =>
      option.textContent!.includes(locationOptionMock.name)
    )[0];

    locationDropdownItem.click();

    expect(locationDropdownMock.onSelectItem).toHaveBeenCalledWith(
      locationOptionMock.name + ", " + locationOptionMock.state.shortname
    );
  });

  test("calls onClose when clicked outside the dropdown", () => {
    render(<LocationDropdown {...locationDropdownMock} />);

    fireEvent.mouseDown(document.body);
    expect(locationDropdownMock.onClose).toHaveBeenCalled();
  });
});
