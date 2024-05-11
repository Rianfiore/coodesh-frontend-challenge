import { FlatTagType } from "./flatTag.type";

export type FlatType = {
  city: string;
  title: string;
  author: string;
  rooms: number;
  tags: FlatTagType[];
  imageUrls: string[];
  price: number;
  has3DView: boolean;
};
