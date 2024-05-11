import { render, screen } from "@testing-library/react";
import { CarouselSlideButton } from ".";

jest.mock("swiper/react", () => ({
  useSwiper: (props: any) => props,
  Swiper: ({ children }: { children: React.ReactNode }) => children,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => children,
}));

describe("CarouselSlideButton", () => {
  test("should render correctly", () => {
    render(<CarouselSlideButton direction="next">Next</CarouselSlideButton>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Next");
  });
});
