import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { act, render } from "@testing-library/react";
import { NavBar } from ".";

describe("NavBar component", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<NavBar />);

    const navBar = getByTestId("nav-bar");

    expect(navBar).toBeInTheDocument();
  });

  test("should render CompactMenu when screen is smaller than laptop", () => {
    const { getByTestId } = render(<NavBar />);

    //Breakpoint para laptop de acordo com o tema
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.laptop),
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const compactMenu = getByTestId("compact-menu");

    expect(compactMenu).toBeInTheDocument();
  });

  test("should render DefaultMenu when screen is larger than laptop", () => {
    const { getByTestId } = render(<NavBar />);

    //Breakpoint para laptop de acordo com o tema
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.laptop) + 1,
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const defaultMenu = getByTestId("default-menu");

    expect(defaultMenu).toBeInTheDocument();
  });
});
