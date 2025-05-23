"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "react-feather";
import bibleOne from "../../assets/images/bible.png";
import CartImage from "../cart-image/CartImage";

const ModalDialog = ({ onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
  if (quantity > 0) {
    setQuantity(quantity - 1);
  }

  if (quantity - 1 === 0) {
    onClose();
  }
};

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

    
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-[485px] h-[602px] bg-[#FFFFFF] border-[3px] border-[#F3E7FA] rounded-[23px] grid grid-cols-1">
        <div className="p-4">
          <div className="flex w-full items-center border-b border-[#F3F3F5]">
            <div className="w-[20%] flex items-center justify-center">
              <CartImage />
            </div>
            <div className="flex-1 grid">
              <span className="text-[18px] text-[#344054] font-bold">
                Bíblia 35 anos
              </span>
              <span className="text-[14px] text-[#344054]">
                Lorem ipsum dolor sit amet consectetur. Sit leo gravida vulputate in maecenas nullam. Egestas libero placerat ullamcorper magna.
              </span>
            </div>
            <div className="w-10 flex items-center justify-center">
              <X onClick={onClose} size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={bibleOne}
                alt="Produto Exemplo"
                width={150}
                height={150}
                className="object-cover rounded"
              />
            </div>
            <div className="w-1/2 grid grid-cols-1 gap-2 justify-start">
              <span className="text-[20px] text-[#11131A] font-bold">
                Bíblia
              </span>
              <span className="text-[18px] text-[#067C7A]">
                R$ 467,90
              </span>
              <div className="flex justify-around items-center w-[79px] h-[24.8px] border-[0.4px] border-[#45474F] rounded-[4.3px]">
      <button onClick={handleDecrease} className="w-[20%] flex items-center justify-center cursor-pointer">
        <span className="text-[#45474F] text-[12px]">-</span>
      </button>

      <span className="w-[60%] text-center text-[12px] text-[#45474F]">
        {quantity}
      </span>

      <button onClick={handleIncrease} className="w-[20%] flex items-center justify-center cursor-pointer">
        <span className="text-[#45474F] text-[12px]">+</span>
      </button>
    </div>
            </div>
          </div>
        </div>

<div className="flex justify-center items-center">
  <div className="grid grid-cols-2 w-[430px] h-[111px] border-[1px] border-[#E1E6EE] p-4 rounded">
    <div className="flex items-center justify-start">
      <span className="text-[14px] font-normal text-[#000000]">Subtotal</span>
    </div>
    <div className="flex items-center justify-end">
      <span className="text-[14px] font-bold text-[#000000]">930,54</span>
    </div>
    <div className="flex items-center justify-start">
      <span className="text-[14px] font-normal text-[#000000]">Frete</span>
    </div>
    <div className="flex items-center justify-end">
      <span className="text-[14px] font-bold text-[#000000]">30,54</span>
    </div>
    <div className="flex items-center justify-start">
      <span className="text-[14px] font-normal text-[#000000]">Total</span>
    </div>
    <div className="flex items-center justify-end">
      <span className="text-[14px] font-bold text-[#067C7A]">960,54</span>
    </div>
  </div>
</div>
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