import { flatsData } from "@/assets/data/flats";
import { Carousel } from "@/components";

import { useCurrentBreakpoint } from "@/hooks";
import { Chevron, ExternalLink } from "@/icons";
import { ArrowButton } from "@/icons/ArrowButton";
import { defaultTheme } from "@/styles/theme";
import { FlatType } from "@/types";
import { convertPixelIntoNumber } from "@/utils";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { AnnouncementItem } from "./AnnouncementItem";
import {
  announcementCityStyles,
  announcementNextButtonStyles,
  announcementPrevButtonStyles,
  announcementSectionStyles,
  announcementTitleStyles,
  textToLinkStyles,
} from "./styles";

export function AnnouncementSection() {
  const currentBreakpoint = useCurrentBreakpoint();
  const [flatsByCity, setFlatsByCity] = useState<{
    data: FlatType[];
    cityFilter: string;
  }>();
  const isMobile =
    currentBreakpoint?.screenSize! <=
    convertPixelIntoNumber(defaultTheme.screens.tablet);

  useEffect(() => {
    if (flatsByCity === undefined) {
      const flatsBySP = flatsData.filter((flat) => flat.city === "São Paulo");

      setFlatsByCity({
        data: flatsBySP,
        cityFilter: "São Paulo",
      });
    }
  }, [flatsByCity]);

  return (
    <section className={announcementSectionStyles()}>
      <Carousel>
        <Carousel.Info>
          <Carousel.Title>
            <h1 className={announcementTitleStyles()}>
              Novos Anúncios em{" "}
              <span className={announcementCityStyles()}>
                {flatsByCity?.cityFilter}
                {currentBreakpoint && !isMobile && (
                  <Chevron
                    width={16}
                    height={16}
                    className="stroke-support-orange300"
                  />
                )}
              </span>
            </h1>
          </Carousel.Title>

          <Carousel.Subtitle>
            <span className={textToLinkStyles()}>
              Ver todos os imóveis
              <ExternalLink width={16} height={16} />
            </span>
          </Carousel.Subtitle>
        </Carousel.Info>

        {currentBreakpoint && !isMobile && (
          <Carousel.SlideButtons>
            <Carousel.PrevButton>
              <ArrowButton className={announcementPrevButtonStyles()} />
            </Carousel.PrevButton>
            <Carousel.NextButton>
              <ArrowButton className={announcementNextButtonStyles()} />
            </Carousel.NextButton>
          </Carousel.SlideButtons>
        )}

        {flatsByCity &&
          flatsByCity.data.map((flat, index) => (
            <SwiperSlide key={index}>
              <AnnouncementItem {...flat} />
            </SwiperSlide>
          ))}
      </Carousel>
    </section>
  );
}
