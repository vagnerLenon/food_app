import { FaGoogle } from "react-icons/fa";

import { IIconProps } from "@/Utils/Interfaces";

export default function Google({ size, color, className }: IIconProps) {
  return <FaGoogle size={size} color={color} className={className} />;
}
