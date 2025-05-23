"use client";

import React, { useState } from "react";
import CartImage from "../../components/cart-image/CartImage";
import Modal from "../modal/Modal"; // ajuste o caminho conforme sua estrutura

interface HeaderProps {
  hasItemsInCart: boolean; // Estado booleano recebido via prop
}

export default function Header({ hasItemsInCart }: HeaderProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="relative w-full flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold text-gray-800">Todos os Livros</h1>
        {hasItemsInCart ? (
          <CartImage visible={hasItemsInCart} onClick={() => setShowModal(true)} />
        ) : (
          <></>
        )}
        <div className="absolute bottom-0 left-6 right-0 border-b border-gray-300"></div>
      </header>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
}