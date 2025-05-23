"use client"

import { useState } from "react";
import { Book, ChevronDown } from "react-feather";


const OpenColapseButton = () => {

    const [isBooksOpen, setIsBooksOpen] = useState(false);
    const todosLivrosSubItems = ["Ficção", "Não-Ficção", "Romance"];
    

    return (
      <>
        <div className="grid grid-cols-[20%_60%_20%] items-center gap-x-2 p-2 rounded cursor-pointer hover:bg-[#F7F7F7]" onClick={() => setIsBooksOpen((prev) => !prev)}>
            <Book className="w-6 h-6" />
            <span className="text-[16px] font-bold text-center">Todos Livros</span>
            <button
              className="flex items-center justify-center cursor-pointer"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isBooksOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
          </div>

          {isBooksOpen && (
            <div className="grid gap-2 pl-8">
              {todosLivrosSubItems.map((item, index) => (
                <div
                  key={index}
                  className="p-2 rounded cursor-pointer hover:bg-[#F7F7F7]"
                >
                  <span className="text-[14px] font-bold">{item}</span>
                </div>
              ))}
            </div>
          )}
          </>
    )
}

export default OpenColapseButton;