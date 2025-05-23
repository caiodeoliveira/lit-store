"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "react-feather";
import bibleOne from "../../assets/images/bible.png";
import CartImage from "../cart-image/CartImage";

const ModalDialog = ({ onClose }) => {
// Estado para controlar a quantidade, inicia em 1
  const [quantity, setQuantity] = useState(1);

  // Função para subtrair: evita que a quantidade fique menor que 1
  const handleDecrease = () => {
  if (quantity > 0) {
    setQuantity(quantity - 1);
  }

  // Fecha o modal quando a quantidade chegar a 0
  if (quantity - 1 === 0) {
    onClose();
  }
};

  // Função para aumentar a quantidade
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

    
  return (
    // Wrapper que centraliza o modal na tela
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Modal com dimensões, cor, borda e border-radius solicitados */}
      <div className="w-[485px] h-[602px] bg-[#FFFFFF] border-[3px] border-[#F3E7FA] rounded-[23px] grid grid-cols-1">
        {/* Container 1: Header do modal */}
        <div className="p-4">
          <div className="flex w-full items-center border-b border-[#F3F3F5]">
            {/* 1° Item: Ícone de carrinho (20% da largura) */}
            <div className="w-[20%] flex items-center justify-center">
              <CartImage />
            </div>
            {/* 2° Item: Container grid com título e subtítulo (80%) */}
            <div className="flex-1 grid">
              <span className="text-[18px] text-[#344054] font-bold">
                Bíblia 35 anos
              </span>
              <span className="text-[14px] text-[#344054]">
                Lorem ipsum dolor sit amet consectetur. Sit leo gravida vulputate in maecenas nullam. Egestas libero placerat ullamcorper magna.
              </span>
            </div>
            {/* 3° Item: Ícone de fechar */}
            <div className="w-10 flex items-center justify-center">
              <X onClick={onClose} size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Container 2: Produto com imagem, detalhes e quantidade */}
        <div className="p-4">
          <div className="flex">
            {/* Lado esquerdo: Imagem (metade do espaço) */}
            <div className="w-1/2 flex items-center justify-center">
              {/* Ajuste o src, width e height conforme o produto; aqui é apenas exemplo */}
              <Image
                src={bibleOne}
                alt="Produto Exemplo"
                width={150}
                height={150}
                className="object-cover rounded"
              />
            </div>
            {/* Lado direito: Grid com nome, preço e quantidade */}
            <div className="w-1/2 grid grid-cols-1 gap-2 justify-start">
              {/* Nome do produto */}
              <span className="text-[20px] text-[#11131A] font-bold">
                Bíblia
              </span>
              {/* Preço do produto */}
              <span className="text-[18px] text-[#067C7A]">
                R$ 467,90
              </span>
              {/* Container de quantidade */}
              <div className="flex justify-around items-center w-[79px] h-[24.8px] border-[0.4px] border-[#45474F] rounded-[4.3px]">
      {/* Botão de subtrair (20%) */}
      <button onClick={handleDecrease} className="w-[20%] flex items-center justify-center cursor-pointer">
        <span className="text-[#45474F] text-[12px]">-</span>
      </button>

      {/* Número da quantidade (60%) */}
      <span className="w-[60%] text-center text-[12px] text-[#45474F]">
        {quantity}
      </span>

      {/* Botão de aumentar (20%) */}
      <button onClick={handleIncrease} className="w-[20%] flex items-center justify-center cursor-pointer">
        <span className="text-[#45474F] text-[12px]">+</span>
      </button>
    </div>
            </div>
          </div>
        </div>

        {/* Container 3 */}
        {/* Container 3: Price Summary */}
<div className="flex justify-center items-center">
  <div className="grid grid-cols-2 w-[430px] h-[111px] border-[1px] border-[#E1E6EE] p-4 rounded">
    {/* Linha 1: Subtotal */}
    <div className="flex items-center justify-start">
      <span className="text-[14px] font-normal text-[#000000]">Subtotal</span>
    </div>
    <div className="flex items-center justify-end">
      <span className="text-[14px] font-bold text-[#000000]">930,54</span>
    </div>
    {/* Linha 2: Frete */}
    <div className="flex items-center justify-start">
      <span className="text-[14px] font-normal text-[#000000]">Frete</span>
    </div>
    <div className="flex items-center justify-end">
      <span className="text-[14px] font-bold text-[#000000]">30,54</span>
    </div>
    {/* Linha 3: Total */}
    <div className="flex items-center justify-start">
      <span className="text-[14px] font-normal text-[#000000]">Total</span>
    </div>
    <div className="flex items-center justify-end">
      <span className="text-[14px] font-bold text-[#067C7A]">960,54</span>
    </div>
  </div>
</div>
        {/* Container 4 */}
        {/* Container 4: Botão */}
<div className="flex justify-center mt-[49px] mb-[30px]">
  <button className="w-[174px] h-[36px] rounded-[8px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] bg-[#067C7A] hover:bg-[#30c7c5] cursor-pointer">
    <span className="text-[14px] text-white">Finalizar Compra</span>
  </button>
</div>
      </div>
    </div>
  );
};

export default ModalDialog;