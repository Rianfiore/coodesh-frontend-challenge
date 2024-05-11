"use client";

import { FlatType } from "@/types";
import { formatToBRL } from "@/utils/formatToBRL";

import { Tag } from "@/components";
import { TagEnum } from "@/enum/tag.enum";
import { Blueprint, Camera3D, VideoCamera } from "@/icons";
import { AnnouncementImagesCarousel } from "../AnnouncementImagesCarousel";
import {
  bulletStyles,
  descriptionStyles,
  flatDetailsStyles,
  imageContainerStyles,
  itemContainerStyles,
  priceStyles,
  specificationsContainerStyles,
  subtitleStyles,
  tagsContainerStyles,
  textContentStyles,
  titleStyles,
  view3DTagContainerStyles,
} from "./styles";

export function AnnouncementItem({
  title,
  tags,
  rooms,
  price,
  city,
  author,
  imageUrls,
  has3DView,
}: FlatType) {
  return (
    <div className={itemContainerStyles()}>
      <div className={imageContainerStyles()}>
        {has3DView && (
          <span className={view3DTagContainerStyles()}>
            <VideoCamera width={16} height={16} />
            <Camera3D width={16} height={16} />
            <Blueprint width={16} height={16} />
          </span>
        )}

        <AnnouncementImagesCarousel imageUrls={imageUrls} />
      </div>

      <div className={textContentStyles()}>
        <div className={descriptionStyles()}>
          <h1 className={titleStyles()}>{title}</h1>
          <h2 className={subtitleStyles()}>{`${author}, ${city}`}</h2>
        </div>

        <div className={specificationsContainerStyles()}>
          <span className={flatDetailsStyles()}>
            <p>{`${rooms} ${rooms > 1 ? "Quartos" : "Quarto"}`}</p>
            <span className={bulletStyles()}></span>
            <p> 2 Banheiros</p>
            <span className={bulletStyles()}></span>
            <p>4 Vagas</p>
          </span>

          <span className={tagsContainerStyles()}>
            {tags.map((tag) => (
              <Tag key={tag}>{TagEnum[tag]}</Tag>
            ))}
          </span>
        </div>

        <span className={priceStyles()}>{`R$ ${formatToBRL(price)}`}</span>
      </div>
    </div>
  );
}
