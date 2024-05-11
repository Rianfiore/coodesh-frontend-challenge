import { defaultTheme } from "@/styles/theme";
import { convertPixelIntoNumber } from "@/utils";
import { act, render } from "@testing-library/react";
import Home from "./page";

jest.mock("swiper/react", () => ({
  useSwiper: (props: any) => props,
  Swiper: ({ children }: { children: React.ReactNode }) => children,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => children,
}));

describe("Home page", () => {
  test("should render searchSection when screen is smaller than laptop", () => {
    const { getByTestId } = render(<Home />);
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: convertPixelIntoNumber(defaultTheme.screens.laptop) - 1,
    });
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    const searchBar = getByTestId("search-section");
    expect(searchBar).toBeInTheDocument();
  });
});
