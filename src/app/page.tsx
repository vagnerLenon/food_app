import Image from "next/image";
import Link from "next/link";

import { images, dias, menu } from "@/Utils/constants";

export default function Home() {
  const dia_selecionado = 8;
  const menu_selecionado = "calendario";
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
        <ul className="flex w-full justify-between h-[66px]">
          {dias.map((d) => (
            <li
              key={d.n}
              className="flex flex-shrink-0 items-center cursor-pointer"
              style={{
                width: d.n === dia_selecionado ? "46px" : "40px",
                padding: d.n === dia_selecionado ? "0" : "10px 0",
              }}
            >
              {d.n !== dia_selecionado && (
                <div className="transition-all ease-in-out hover:font-semibold flex flex-col w-full h-full items-center justify-center bg-green-dark hover:bg-white rounded-lg text-white hover:text-green-dark">
                  <p>{d.n}</p>
                </div>
              )}
              {d.n === dia_selecionado && (
                <div className="transition-all ease-in-out flex flex-col w-full h-full items-center justify-center bg-white rounded-lg text-green-dark font-semibold border-t-[10px] border-t-green-600">
                  <p className="text-xl leading-tight">{d.n}</p>
                  <span className="leading-tight">{d.ds}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-between items-center fixed bottom-0 h-[113px] bg-[#222223] rounded-t-3xl  p-4 z-50">
        {menu.map((m) => (
          <Link
            key={m.id}
            href="#"
            className={`flex gap-2 items-center justify-center px-3 py-2 ${
              menu_selecionado === m.id ? "bg-[#2A2F31]" : "none"
            } rounded-xl text-white h-14`}
          >
            <m.icone size={22} />
            <p className={`${menu_selecionado === m.id ? "flex" : "hidden"}`}>
              {m.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
