import { FlatType } from "@/types";
import { render, screen } from "@testing-library/react";
import { AnnouncementItem } from ".";

jest.mock("swiper/react", () => ({
  Swiper: () => jest.fn(),
  SwiperSlide: () => jest.fn(),
}));

describe("AnnouncementItem", () => {
  const flatData: FlatType = {
    title: "Apartment in the city center",
    tags: ["elevator", "parking"],
    rooms: 2,
    price: 150000,
    city: "São Paulo",
    author: "John",
    imageUrls: ["image1.jpg", "image2.jpg", "image3.jpg"],
    has3DView: true,
  };

  test("correctly renders title and city", () => {
    render(<AnnouncementItem {...flatData} />);
    const titleElement = screen.getByText("Apartment in the city center");
    const cityElement = screen.getByText("John, São Paulo");
    expect(titleElement).toBeInTheDocument();
    expect(cityElement).toBeInTheDocument();
  });

  test("correctly renders tags", () => {
    render(<AnnouncementItem {...flatData} />);
    const elevatorTagElement = screen.getByText("Elevador");
    const parkingTagElement = screen.getByText("Garagem");
    expect(elevatorTagElement).toBeInTheDocument();
    expect(parkingTagElement).toBeInTheDocument();
  });

  test("correctly renders formatted price", () => {
    render(<AnnouncementItem {...flatData} />);
    const priceElement = screen.getByText("R$ 150.000");
    expect(priceElement).toBeInTheDocument();
  });
});
