"use client";

import { ReactNode } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselSlideButton } from "./CarouselSlideButton";

import { CarouselProps } from "./types";

import { useSlidesPerView } from "@/hooks";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

function CarouselInfo({ children }: { children: ReactNode }) {
  return <span className="slide-info">{children}</span>;
}

function CarouselSlideButtons({ children }: { children: ReactNode }) {
  return <span className="slide-buttons">{children}</span>;
}

function CarouselNextButton({ children }: { children: ReactNode }) {
  return <CarouselSlideButton direction="next">{children}</CarouselSlideButton>;
}

function CarouselPrevButton({ children }: { children: ReactNode }) {
  return <CarouselSlideButton direction="prev">{children}</CarouselSlideButton>;
}

function CarouselTitle({ children }: { children: ReactNode }) {
  return <span className="slide-title">{children}</span>;
}

function CarouselSubtitle({ children }: { children: ReactNode }) {
  return <span className="slide-subtitle">{children}</span>;
}

function CarouselItem({ children }: { children: ReactNode }) {
  return <SwiperSlide>{children}</SwiperSlide>;
}

export function Carousel({ children }: CarouselProps) {
  const slidesPerView = useSlidesPerView();

  return (
    <div
      className="flex flex-col w-full items-center max-w-[1248px]"
      data-testid="carousel"
    >
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="carousel"
      >
        {children}
      </Swiper>
    </div>
  );
}

Carousel.Item = CarouselItem;

Carousel.SlideButtons = CarouselSlideButtons;
Carousel.NextButton = CarouselNextButton;
Carousel.PrevButton = CarouselPrevButton;

Carousel.Info = CarouselInfo;
Carousel.Title = CarouselTitle;
Carousel.Subtitle = CarouselSubtitle;
