import { CiUser } from "react-icons/ci";

import { IIconProps } from "@/Utils/Interfaces";

export default function Usuario({ size, color, className }: IIconProps) {
  return <CiUser size={size} color={color} className={className} />;
}
