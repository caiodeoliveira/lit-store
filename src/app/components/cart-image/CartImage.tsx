"use client";

import React from "react";
import { RiShoppingBag4Line } from "react-icons/ri";

interface CartImageProps {
  visible?: boolean;
  onClick?: () => void;
}

export default function CartImage({ visible = true, onClick }: CartImageProps) {
  if (!visible) return null;
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <RiShoppingBag4Line size={30} color="black" className="flex-shrink-0" />
    </div>
  );
}