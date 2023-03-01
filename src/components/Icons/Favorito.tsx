import { CiStar } from "react-icons/ci";

import { IIconProps } from "@/Utils/Interfaces";

export default function Favorito({ size, color, className }: IIconProps) {
  return <CiStar size={size} color={color} className={className} />;
}
