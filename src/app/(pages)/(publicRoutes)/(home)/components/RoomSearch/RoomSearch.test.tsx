
import { fireEvent, render } from "@testing-library/react";
import { RoomSearch } from ".";
import { roomSearchMock } from "@/__mocks__/pages/home";
import { roomOptionMock } from "@/__mocks__/pages/home/RoomOption";

describe("RoomSearch Component", () => {
  test("should open dropdownMenu when clicks on input", () => {
    const { getByTestId } = render(<RoomSearch {...roomSearchMock} />);

    const input = getByTestId("room-input");

    fireEvent.click(input);

    const roomDropdown = getByTestId("room-dropdown");

    expect(roomDropdown).toBeInTheDocument();
  });

  test("should call onInputChange when select item from dropdown", () => {
    const { getByTestId, getByText } = render(
      <RoomSearch {...roomSearchMock} />
    );
    const input = getByTestId("room-input");
    fireEvent.click(input);

    const dropdown = getByTestId("room-dropdown");
    expect(dropdown).toBeInTheDocument();

    const option = getByText(roomOptionMock.value);
    fireEvent.click(option);

    expect(roomSearchMock.onInputChange).toHaveBeenCalledWith(
      roomOptionMock.text
    );
    expect(dropdown).not.toBeInTheDocument();
  });

  test("should close dropdownMenu when clicked outside", () => {
    const { getByTestId } = render(<RoomSearch {...roomSearchMock} />);
    const input = getByTestId("room-input");
    fireEvent.click(input);

    const dropdown = getByTestId("room-dropdown");
    expect(dropdown).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(dropdown).not.toBeInTheDocument();
  });
});
