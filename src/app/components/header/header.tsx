"use client"

import  bag  from "../../../../public/bag.png"; // Importando ícone do Feather Icons
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-300">
      <h1 className="text-lg font-bold text-gray-800">Todos os Livros</h1>
      <Image
        src={bag}
        alt="Carrinho"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => console.log("Ícone clicado!")}
      />
    </header>
  );
}