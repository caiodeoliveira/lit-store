"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header/Header";
import SideNav from "../components/sidenav/Sidenav";

import bibleOne from "../assets/images/bible.png";
import Link from "next/link";
import { RiShoppingBag4Line } from "react-icons/ri";

export default function BookDetails() {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState("CAPA DURA");
  const [hasItemsInCart, setHasItemsInCart] = useState(false);
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div>
        <SideNav />
      </div>

      <div className="flex flex-col h-full">

        <main className="grid gap-6 p-6 overflow-y-auto">
          <nav className="w-[288px] h-[19px] text-[#11131A] text-[18px]">
            <Link href="/" className="cursor-pointer hover:text-[#EA7C2D]">Início</Link> 
            &gt;
            <Link href="/livros" className="cursor-pointer hover:underline">Livros</Link> 
            &gt;
            <Link href="/livros/seção" className="cursor-pointer hover:underline">Seção do livro</Link>
          </nav>

          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-4">
              <Image
                src={bibleOne}
                alt="Livro"
                width={473}
                height={584}
                className="rounded-[12.26px] object-cover"
              />

              <div className="flex gap-2">
                <Image
                  src={bibleOne}
                  alt="Miniatura 1"
                  width={180}
                  height={90}
                  className="object-cover cursor-pointer"
                />
                <Image
                  src={bibleOne}
                  alt="Miniatura 2"
                  width={150}
                  height={90}
                  className="object-cover cursor-pointer"
                />
                <Image
                  src={bibleOne}
                  alt="Miniatura 3"
                  width={150}
                  height={90}
                  className="object-cover cursor-pointer"
                />
              </div>
            </div>

            <div className="grid gap-6 text-left">
              <div className="grid w-[448px] h-[98px]">
                <h1 className="text-[#11131A] text-[40px]">Bíblia 35 anos</h1>
                <span className="text-[#067C7A] text-[24px]">R$ 129,99</span>
                <span className="text-[#45474F] text-[16px]">Autor: Jhon Grey</span>
              </div>

              <div className="grid">
                <p className="text-[#000000] text-[16px]">
                  {expanded
                    ? "Lorem ipsum dolor sit amet consectetur. Sit leo gravida vulputate in maecenas nullam. Egestas libero placerat ullamcorper magna."
                    : "Lorem ipsum dolor sit amet consectetur."}
                </p>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-[#11131A] text-[16px] cursor-pointer hover:underline"
                >
                  {expanded ? "Ver menos detalhes do produto" : "Ver mais detalhes do produto"}
                </button>
              </div>

              <div className="grid">
                <span className="text-[#11131A] text-[18px] font-bold">Variação</span>
                <div className="flex w-[418px] h-[44px] gap-3">
                  {["CAPA DURA", "Capa Brochura", "Edição Ilustrada"].map((variation) => (
                    <button
                      key={variation}
                      onClick={() => setSelectedVariation(variation)}
                      className={`w-[120px] h-[44px] text-[14px] px-[12px] rounded-md flex items-center justify-center cursor-pointer ${
                        selectedVariation === variation
                          ? "bg-[#067C7A] text-white"
                          : "border-[0.7px] border-[#45474F] bg-white"
                      }`}
                    >
                      {variation}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid w-[335px] h-[226px]">
                <span className="text-[#11131A] text-[17px] font-bold">Quantidade</span>
                {quantity < 3 && (
                <span className="text-[16px] text-[#45474F]">
                  ⚠️ Para este produto, quantidade mínima é: 3
                </span>
)}

                <div className="flex justify-around items-center w-[79px] h-[24.8px] border-[0.4px] border-[#45474F] rounded-[4.3px]">
                  <button onClick={handleDecrease} className="w-[20%] flex items-center justify-center cursor-pointer">
                    <span className="text-[#45474F] text-[12px]">-</span>
                  </button>
                  <span className="w-[60%] text-center text-[12px] text-[#45474F]">{quantity}</span>
                  <button onClick={handleIncrease} className="w-[20%] flex items-center justify-center cursor-pointer">
                    <span className="text-[#45474F] text-[12px]">+</span>
                  </button>
                </div>

                <div
                  className="w-[290px] h-[45.8px] bg-[#11131A] rounded-[7.5px] flex items-center justify-center gap-3 cursor-pointer px-4 mt-10 group hover:text-[#EA7C2D]"
                  onClick={() => setHasItemsInCart(true)}>
                  <RiShoppingBag4Line size={20} color="white" className="flex-shrink-0" />
                  <span className="text-white text-[16px] font-bold group-hover:text-[#EA7C2D]">
                    Adicionar à sacola
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}