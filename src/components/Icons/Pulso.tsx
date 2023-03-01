import { CiWavePulse1 } from "react-icons/ci";

import { IIconProps } from "@/Utils/Interfaces";

export default function Pulso({ size, color, className }: IIconProps) {
  return <CiWavePulse1 size={size} color={color} className={className} />;
}
