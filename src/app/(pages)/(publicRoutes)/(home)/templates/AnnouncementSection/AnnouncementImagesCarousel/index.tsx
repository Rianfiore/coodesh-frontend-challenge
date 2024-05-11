import { ArrowButton } from "@/icons/ArrowButton";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  buttonsContainerStyles,
  nextButtonStyles,
  prevButtonStyles,
} from "./styles";
import "./styles.css";

export function AnnouncementImagesCarousel({
  imageUrls,
}: {
  imageUrls: string[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const swipperRef = useRef<any>(null);

  const handleNext = () => {
    if (currentSlide < imageUrls.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (swipperRef.current && swipperRef.current.swiper) {
      swipperRef.current.swiper.slideTo(currentSlide, 500, false);
    }
  }, [currentSlide, swipperRef]);

  return (
    <Swiper
      ref={swipperRef}
      slidesPerView={1}
      spaceBetween={0}
      cssMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="images-carousel"
    >
      <span
        className={buttonsContainerStyles()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ArrowButton
          data-testid="prev-button"
          onClick={handlePrevious}
          data-ishovered={isHovered}
          className={prevButtonStyles()}
        />
        <ArrowButton
          data-testid="next-button"
          onClick={handleNext}
          data-ishovered={isHovered}
          className={nextButtonStyles()}
        />
      </span>
      {imageUrls.map((image) => (
        <SwiperSlide
          key={image}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={image} alt={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
