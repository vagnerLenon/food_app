"use client";

import Image from "next/image";
import Link from "next/link";

import { IMenu } from "@/Utils/Interfaces/IMenuProps";

import { images, dias_semana } from "@/Utils/constants";
import { useEffect, useState } from "react";

interface IDia {
  n: number;
  ds: string;
}

export default function Home() {
  const [dia, setDia] = useState<number | null>(null);
  const [page, setPage] = useState<string>("calendario");
  const [dias, setDias] = useState<IDia[]>([] as IDia[]);
  const [menuData, setMenuData] = useState<IMenu[]>([] as IMenu[]);

  useEffect(() => {
    // Pega o primeiro dia da semana

    fetch("/api/menu").then(async (d) => {
      const { menu } = await d.json();
      setMenuData(menu);
      console.log(menu);
      setPage(menu[0]?.id || null);
    });
    var curr = new Date();
    const day = curr.getDay();
    const firstday = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000);

    let datas = [new Date(curr.getTime() - 60 * 60 * 24 * day * 1000)];

    for (let index = 0; index < 6; index++) {
      datas.push(new Date(firstday.setDate(firstday.getDate() + 1)));
    }

    setDias(
      datas.map((d) => {
        return {
          n: d.getDate(),
          ds: dias_semana[d.getDay()],
        } as IDia;
      })
    );

    setDia(new Date().getDate());
  }, []);

  return (
    <div className="flex flex-col gap-8 h-screen w-full">
      <Image
        src={images.image_header}
        alt=""
        width={390}
        height={448}
        className="object-cover w-full h-[448px]"
      />
      <div className="px-8">
        <span className="text-gray-normal text-sm">Hello, Adam!</span>
        <div className="flex justify-between">
          <h2 className="flex h-full text-white text-3xl font-extralight">
            Ready to plan your week?
          </h2>
          <Image src={images.delivery_logo} alt="" width={88} height={75} />
        </div>
      </div>
      <div className="px-5 flex w-full">
        <ul className="flex w-full justify-between h-[66px] items-center">
          {dias.map((d) => (
            <li
              key={d.n}
              className="flex flex-shrink-0 items-center cursor-pointer rounded-lg overflow-hidden"
              style={{
                width: d.n === dia ? "46px" : "40px",
                height: d.n === dia ? "100%" : "80%",
              }}
            >
              {d.n !== dia && (
                <div
                  onClick={() => {
                    setDia(d.n);
                  }}
                  className="transition-all ease-in-out hover:font-semibold flex flex-col w-full h-full items-center justify-center bg-green-dark hover:bg-white text-white hover:text-green-dark"
                >
                  <p>{d.n}</p>
                </div>
              )}
              {d.n === dia && (
                <div className="transition-all ease-in-out flex flex-col w-full h-full items-center justify-center bg-white text-green-dark font-semibold border-t-[10px] border-t-green-600">
                  <p className="text-xl leading-tight">{d.n}</p>
                  <span className="leading-tight">{d.ds}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-between items-center fixed bottom-0 h-[113px] bg-[#222223] rounded-t-3xl  p-4 z-50">
        {menuData.map((m) => (
          <Link
            key={m.id}
            href="#"
            className={`flex gap-2 items-center justify-center px-3 py-2 ${
              page === m.id ? "bg-[#2A2F31]" : "none"
            } rounded-xl text-white h-14`}
            onClick={(e) => {
              e.preventDefault();
              setPage(m.id);
            }}
          >
            {<m.icone />}
            <p className={`${page === m.id ? "flex" : "hidden"}`}>{m.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
