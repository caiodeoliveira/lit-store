import Image from "next/image";
import bibleOne from "../../assets/images/bible.png";
import bibleTwo from "../../assets/images/bible-2.png";
import bibleThree from "../../assets/images/bible-3.png";
import biblteFour from "../../assets/images/bible-4.png";

const produtos = [
  {
    nome: "Bíblia 36 anos",
    preco: "R$ 99,99",
    imagem: bibleOne,
    newItem: true,
  },
  {
    nome: "Transformadora",
    preco: "R$ 129,99",
    imagem: bibleTwo,
    newItem: false,
  },
  {
    nome: "Bíblia",
    preco: "R$ 79,99",
    imagem: bibleThree,
    newItem: true,
  },
  {
    nome: "Bíblia Jesus",
    preco: "R$ 149,99",
    imagem: biblteFour,
    newItem: false,
  },
];

const NewArrivals = () => {
  return (
    <div className="grid grid-cols-1 mx-auto mt-20 w-full max-w-[95%]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#11131A] text-2xl font-semibold">Novidades</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {produtos.map((produto, index) => (
          <div key={index} className="flex flex-col items-left">
            <div className="relative">
              {produto.newItem && (
                <span className="absolute absolute top-1 left-1 rounded-[10px] w-[80px] h-[32px] bg-[#067C7A] text-[14px] text-white flex items-center justify-center">
                  Novidade
                </span>
              )}
              <Image
                src={produto.imagem}
                alt={produto.nome}
                width={200}
                height={200}
                className="object-cover rounded cursor-pointer"
              />
            </div>
            <span className="text-[#11131A] text-[12px] mt-2">
              {produto.nome}
            </span>
            <span className="text-[#11131A] text-[12px] font-bold mt-1">
              {produto.preco}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;