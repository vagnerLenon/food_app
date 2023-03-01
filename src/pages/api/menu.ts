// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IMenu } from "@/Utils/Interfaces/IMenuProps";

import {
  Calendario,
  GarfoEFaca,
  Pulso,
  Favorito,
  Usuario,
} from "@/components/Icons";
import { IIconProps } from "@/Utils/Interfaces";

const menu = [
  {
    id: "calendario",
    title: "Semana",
    icone: Calendario,
  },
  {
    id: "receitas",
    title: "Receitas",
    icone: GarfoEFaca,
  },
  {
    id: "status",
    title: "Status",
    icone: Pulso,
  },
  {
    id: "favoritos",
    title: "Favoritos",
    icone: Favorito,
  },
  {
    id: "usuario",
    title: "Usuário",
    icone: Usuario,
  },
] as IMenu[];

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  menu: IMenu[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ menu });
}
