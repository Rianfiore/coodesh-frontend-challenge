import { render } from "@testing-library/react";
import { Carousel } from ".";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => children,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => children,
}));

describe("CarouselSlideButton", () => {
  test("renders children correctly", () => {
    const { getByTestId } = render(
      <Carousel>
        <Carousel.Item>Item 1</Carousel.Item>
        <Carousel.Item>Item 2</Carousel.Item>
        <Carousel.Item>Item 3</Carousel.Item>
      </Carousel>
    );

    const carousel = getByTestId("carousel");

    expect(carousel).toHaveTextContent("Item 1");
    expect(carousel).toHaveTextContent("Item 2");
    expect(carousel).toHaveTextContent("Item 3");
  });
});
