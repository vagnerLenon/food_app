import { CiCalendarDate } from "react-icons/ci";

import { IIconProps } from "@/Utils/Interfaces";

export default function Calendario({ size, color, className }: IIconProps) {
  return <CiCalendarDate size={size} color={color} className={className} />;
}
