import {
  Calendario,
  GarfoEFaca,
  Pulso,
  Favorito,
  Usuario,
} from "@/components/Icons";

export const images = {
  image_header: "/sandwich.jpg",
  delivery_logo: "/delivery.svg",
};

export const dias = [
  {
    n: 2,
    ds: "Seg",
  },
  {
    n: 3,
    ds: "Ter",
  },
  {
    n: 4,
    ds: "Qua",
  },
  {
    n: 5,
    ds: "Qui",
  },
  {
    n: 6,
    ds: "Sex",
  },
  {
    n: 7,
    ds: "Sáb",
  },
  {
    n: 8,
    ds: "Dom",
  },
];

export const menu = [
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
];
