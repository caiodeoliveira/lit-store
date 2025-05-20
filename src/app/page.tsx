"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, AlignLeft, ChevronRight } from "react-feather";
import BookDayBanner1 from "./assets/images/book-day-banner.jpg";
import BookDayBanner2 from "./assets/images/book-day-banner-2.jpg";
import BookDayBanner3 from "./assets/images/book-day-banner-3.jpg";
import NewBookBanner from "./assets/images/new-book-banner.png";

const images = [BookDayBanner1, BookDayBanner2, BookDayBanner3];

export default function Home() {

const categories = ["Todos", "Ficção", "Não-Ficção", "Romance", "Fantasia", "Mistério", "Biografia", "História", "Ciência"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");


const produtos = [
    { nome: "Produto 1", preco: "R$ 99,99", imagem: "/assets/images/produto1.jpg" },
    { nome: "Produto 2", preco: "R$ 129,99", imagem: "/assets/images/produto2.jpg" },
    { nome: "Produto 3", preco: "R$ 79,99", imagem: "/assets/images/produto3.jpg" },
    { nome: "Produto 4", preco: "R$ 149,99", imagem: "/assets/images/produto4.jpg" }
  ];



  return (
      <div className="grid grid-cols-[20%_80%] h-screen">
          {/* Sidebar */}
          <aside className="bg-[#FFFFFF] p-4">
            <h2 className="text-lg font-semibold">Sidebar</h2>
          </aside>

          {/* Main Content como Grid Container */}
          <main className="grid gap-6 p-6">
            {/* Container: Área de Pesquisa */}
            <div className="flex items-center justify-between  w-11/12">
              {/* Input de Pesquisa */}
              <div className="relative w-full max-w-[429px]">
                <button className="absolute left-3 top-1/2 -translate-y-1/2 p-1">
                  <Search size={18} color="#112E38" />
                </button>
                <input
                  type="text"
                  placeholder="Pesquisar e filtrar"
                  className="w-full h-[31px] pl-10 border border-[#112E38] bg-white text-[#344054] rounded-full"
                />
              </div>

              {/* Botão Ordenar */}
              <button className="flex items-center justify-around w-[95px] h-[32px] border border-[#E1E5EA] rounded-[26px] text-[#390054] text-[12px]">
                <AlignLeft size={16} />
                <span>Ordenar</span>
              </button>
            </div>

            {/* Container: Banner + Controle de Navegação */}
            <div className="grid w-[100%] mx-auto justify-start">
      {/* Imagem do Banner */}
      <div className="relative cursor-pointer">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            width={1200}
            height={400}
            className={`max-w-[94%] h-auto rounded-[18px] object-cover transition-opacity duration-500 ${
              index === 0 ? "opacity-100" : "opacity-0 absolute top-0 left-0"
            }`}
            data-index={index}
          />
        ))}
      </div>

      {/* Controles de Navegação (Pontos) */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition-all cursor-pointer"
            onClick={() => switchBanner(index)}
            data-index={index}
          />
        ))}
      </div>

        <div className="flex flex-wrap items-center justify-center w-160 gap-3 mx-auto mt-10">
  {categories.map((category, index) => (
    <button
      key={index}
      className={`px-4 py-1 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer ${
        selectedCategory === category
          ? "bg-[#EA7C2D]"
          : "bg-[#B3B3C1] hover:bg-gray-300"
      }`}
      onClick={() => {
        if (category !== "Todos" && selectedCategory === category) {
          // Se um filtro (exceto "Todos") já ativo for clicado novamente,
          // volta a ativar o botão "Todos" 
          setSelectedCategory("Todos");
        } else {
          setSelectedCategory(category);
        }
      }}
    >
      {category}
    </button>
  ))}
</div>

<div className="grid grid-cols-1 mx-auto mt-10 w-full max-w-[75%]">
      {/* Título "Novidades" */}
      <h2 className="text-[#11131A] text-2xl font-semibold mb-4">Novidades</h2>

      {/* Container dos produtos em 4 colunas */}
      <div className="grid grid-cols-4 gap-4">
        {produtos.map((produto, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Imagem */}
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={200}
              height={200}
              className="object-cover rounded"
            />
            {/* Nome do produto */}
            <span className="text-[#11131A] text-[12px] mt-2">{produto.nome}</span>
            {/* Preço do produto */}
            <span className="text-[#11131A] text-[12px] font-bold mt-1">{produto.preco}</span>
          </div>
        ))}
      </div>
    </div>

        <div className="relative mt-10 mx-auto max-w-[85%]">
        <Image
          src={NewBookBanner}
          alt="Banner"
          width={900}
          height={301}
          className="w-full h-auto rounded-lg"
        />
      </div>

<div className="grid grid-cols-1 mx-auto mt-20 w-full max-w-[75%]">
      {/* Header com título e botão "Ver mais" */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#11131A] text-2xl font-semibold">Promoções</h2>
        <button className="flex items-center justify-around border-[0.75px] border-[#11131A] rounded-[75px] px-3 py-1 cursor-pointer">
          <span className="text-[#11131A] text-[9px] md:text-xs">Ver mais</span>
          <ChevronRight size={12} className="text-[#11131A]" />
        </button>
      </div>

      {/* Container dos produtos com 4 colunas */}
      <div className="grid grid-cols-4 gap-4">
        {produtos.map((produto, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Imagem do produto */}
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={200}
              height={200}
              className="object-cover rounded"
            />
            {/* Nome do produto */}
            <span className="text-[#11131A] text-[12px] mt-2">{produto.nome}</span>
            {/* Preço do produto */}
            <span className="text-[#11131A] text-[12px] font-bold mt-1">{produto.preco}</span>
          </div>
        ))}
      </div>
    </div>

{/* Texto entre os containers */}
      <div className="grid grid-cols-1 mx-auto mt-10 w-full max-w-[85%]">
        <p className="text-[#959CB6] text-[10px] md:text-[10px] text-right">
          © 2024 Powered by BuzzMonitor
        </p>
      </div>



<div className="grid grid-cols-1 mx-auto mt-10 w-full max-w-[75%]">
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
          <div key={index} className="flex flex-col items-center">
            {/* Imagem do produto */}
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={200}
              height={200}
              className="object-cover rounded"
            />
            {/* Nome do produto */}
            <span className="text-[#11131A] text-[12px] mt-2">{produto.nome}</span>
            {/* Preço do produto */}
            <span className="text-[#11131A] text-[12px] font-bold mt-1">{produto.preco}</span>
          </div>
        ))}
      </div>
    </div>

      </div>
          </main>
    </div>
  );
}

// Função para trocar a imagem com base nos "pontos"
function switchBanner(index: number) {
  const banners = document.querySelectorAll("[data-index]");
  banners.forEach((banner) => {
    const bannerIndex = parseInt(banner.getAttribute("data-index") ?? "0");
    
    if (banner.tagName === "IMG") { // Só altera a opacidade das imagens
      banner.classList.toggle("opacity-100", bannerIndex === index);
      banner.classList.toggle("opacity-0", bannerIndex !== index);
    }
  });
}