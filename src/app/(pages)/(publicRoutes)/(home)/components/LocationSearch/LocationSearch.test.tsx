import { locationOptionMock, locationSearchMock } from "@/__mocks__/pages/home";
import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { act, fireEvent, render } from "@testing-library/react";
import { LocationSearch } from ".";

describe("LocationSearch Component", () => {
  test("should open dropdownMenu when clicks on input", () => {
    const { getByTestId } = render(<LocationSearch {...locationSearchMock} />);

    const input = getByTestId("location-input");

    fireEvent.click(input);

    const locationDropdown = getByTestId("location-dropdown");

    expect(locationDropdown).toBeInTheDocument();
  });

  test('should render mobile version when screen is smaller than "laptop"', () => {
    const { getByTestId } = render(<LocationSearch {...locationSearchMock} />);

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.laptop) - 1,
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const input = getByTestId("location-input");

    expect(input).toHaveAttribute("data-variant", "mobile");
  });

  test('should render desktop version when screen is larger than "laptop"', () => {
    const { getByTestId } = render(<LocationSearch {...locationSearchMock} />);

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.laptop),
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const input = getByTestId("location-input");

    expect(input).toHaveAttribute("data-variant", "default");
  });

  test("should call onInputChange when user type in the input", () => {
    const { getByTestId, getAllByTestId } = render(
      <LocationSearch {...locationSearchMock} />
    );
    const input =
      getByTestId("location-input").getElementsByTagName("input")[0];

    fireEvent.click(input);

    const dropdown = getByTestId("location-dropdown");
    expect(dropdown).toBeInTheDocument();

    const option = getAllByTestId("location-dropdown-item").filter((option) =>
      option.textContent?.includes(locationOptionMock.name)
    )[0];

    fireEvent.click(option);

    expect(locationSearchMock.onInputChange).toHaveBeenCalledWith(
      `${locationOptionMock.name}, ${locationOptionMock.state.shortname}`
    );

    expect(dropdown).not.toBeInTheDocument();
  });

  test("should close dropdownMenu when clicked outside", () => {
    const { getByTestId } = render(<LocationSearch {...locationSearchMock} />);
    const input =
      getByTestId("location-input").getElementsByTagName("input")[0];
    fireEvent.click(input);

    const dropdown = getByTestId("location-dropdown");
    expect(dropdown).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(dropdown).not.toBeInTheDocument();
  });
});
