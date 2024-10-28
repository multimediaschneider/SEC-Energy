import { ICONS } from "@/app/constants/icons";

export type IconType = keyof typeof ICONS;

export interface ContentItem {
  heading: string;
  text: string;
  icon?: IconType;
}
