import { useSwiper } from "swiper/react";
import { CarouselSlideButtonProps } from "./types";

export function CarouselSlideButton({
  children,
  direction,
}: CarouselSlideButtonProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() =>
        direction === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
    >
      {children}
    </button>
  );
}
