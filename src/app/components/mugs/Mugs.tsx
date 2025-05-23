import Image from "next/image";
import { ChevronRight } from "react-feather";

import capybaraCup from "../../assets/images/capybara-cup.png";
import lazyCup from "../../assets/images/lazy-cup.png";
import catLanguageCup from "../../assets/images/cats-language-cup.png";
import spaceCup from "../../assets/images/space-cup.png";

const produtos = [
    { nome: "Caneca Capivara", preco: "R$ 99,99", imagem: capybaraCup },
    { nome: "Caneca Snorlax", preco: "R$ 129,99", imagem: lazyCup },
    { nome: "Caneca cat body language", preco: "R$ 79,99", imagem: catLanguageCup },
    { nome: "Caneca Space", preco: "R$ 149,99", imagem: spaceCup }
  ];

const Mugs = () => {

    return (
      <div className="grid grid-cols-1 mx-auto mt-10 mb-10 w-full max-w-[75%]">
      {/* Header com título e botão "Ver mais" */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#11131A] text-2xl font-semibold">Canecas</h2>
        <button className="flex items-center justify-around border-[0.75px] border-[#11131A] rounded-[75px] px-3 py-1 cursor-pointer">
          <span className="text-[#11131A] text-[9px] md:text-xs">Ver mais</span>
          <ChevronRight size={12} className="text-[#11131A]" />
        </button>
      </div>

      {/* Container dos produtos com 4 colunas */}
      <div className="grid grid-cols-4 gap-4">
        {produtos.map((produto, index) => (
          <div key={index} className="flex flex-col items-left">
            {/* Imagem do produto */}
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={200}
              height={200}
              className="object-cover rounded cursor-pointer"
            />
            {/* Nome do produto */}
            <span className="text-[#11131A] text-[12px] mt-2">{produto.nome}</span>
            {/* Preço do produto */}
            <span className="text-[#11131A] text-[12px] font-bold mt-1">{produto.preco}</span>
          </div>
        ))}
      </div>
    </div>
    )

}

export default Mugs;