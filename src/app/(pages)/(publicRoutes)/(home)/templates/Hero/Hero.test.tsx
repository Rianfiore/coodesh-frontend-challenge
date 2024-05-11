import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { act, render } from "@testing-library/react";
import { Hero } from ".";

describe("Hero template", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Hero />);

    const hero = getByTestId("hero");

    expect(hero).toBeInTheDocument();
  });

  test("should render searchbar when screen is larger than laptop", () => {
    const { getByTestId } = render(<Hero />);
    Object.defineProperty(window.screen, "width", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.laptop),
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const searchBar = getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });
});
