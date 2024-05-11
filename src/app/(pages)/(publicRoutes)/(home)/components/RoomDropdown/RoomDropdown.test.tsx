
import { fireEvent, render } from "@testing-library/react";
import { RoomDropdown } from "./";
import { amountRoomOptionMock, roomDropdownMock } from "@/__mocks__/pages/home";

describe("RoomDropdown component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<RoomDropdown {...roomDropdownMock} />);
    const roomDropdown = getByTestId("room-dropdown");
    expect(roomDropdown).toBeInTheDocument();
  });

  test("should initiate with default options selected", () => {
    const { getAllByTestId } = render(<RoomDropdown {...roomDropdownMock} />);

    const defaultOptions = getAllByTestId("amount-room-option").filter(
      (option) =>
        option.textContent === roomDropdownMock.selectedAmountRoomsOption.value
    )[0];

    expect(defaultOptions).toBeTruthy();
  });

  test("should call onSelectItem function when clicked on option", () => {
    const optionMock = amountRoomOptionMock.option;

    const { getAllByTestId } = render(<RoomDropdown {...roomDropdownMock} />);
    const roomDropdownItem = getAllByTestId("amount-room-option").filter(
      (option) => option.textContent === optionMock.value
    )[0];

    roomDropdownItem.click();

    expect(roomDropdownMock.onSelectItem).toHaveBeenCalledWith(optionMock);
  });

  test("calls onClose when clicked outside the dropdown", () => {
    render(<RoomDropdown {...roomDropdownMock} />);

    fireEvent.mouseDown(document.body);
    expect(roomDropdownMock.onClose).toHaveBeenCalled();
  });
});
