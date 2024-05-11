import { fireEvent, render, screen } from "@testing-library/react";
import { AnnouncementImagesCarousel } from ".";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => children,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => children,
}));

describe("AnnouncementImagesCarousel", () => {
  const imageUrls = ["image1.jpg", "image2.jpg", "image3.jpg"];

  test("renders images correctly", () => {
    render(<AnnouncementImagesCarousel imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);
  });

  test("handles next and previous button clicks correctly", () => {
    const { getByTestId } = render(
      <AnnouncementImagesCarousel imageUrls={imageUrls} />
    );

    const nextButton = getByTestId("next-button");
    const prevButton = getByTestId("prev-button");

    fireEvent.click(nextButton);
    expect(screen.getByAltText("image2.jpg")).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByAltText("image1.jpg")).toBeInTheDocument();
  });
});
