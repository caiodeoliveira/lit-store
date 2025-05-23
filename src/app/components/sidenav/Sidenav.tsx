"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  Bell,
  Settings,
  ChevronLeft,
  Book,
  ChevronDown,
} from "react-feather";

const SideNav = () => {
  
  const pathname = usePathname();
  if (pathname === "/login") return null;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const todosLivrosSubItems = ["Ficção", "Não-Ficção", "Romance"];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[#FFFFFF] p-4 overflow-y-auto transition-all duration-300 ${
        isCollapsed ? "w-50" : "w-64"
      }`}
    >
      <header className="px-4 py-2 border-b border-[#E1E6EE] mt-5.5">
        <h1 className="text-xl font-bold">LitStore</h1>
      </header>

      <div className="grid gap-6 p-4 h-[calc(90vh-60px)]">
        <div className="grid grid-cols-[20%_80%] items-center gap-x-2 p-3 rounded cursor-pointer hover:bg-[#F7F7F7]">
          <Home className="w-6 h-6" />
          <span className="text-[16px] font-bold">Início</span>
        </div>

        <div className="grid grid-cols-[20%_80%] items-center gap-x-2 p-3 rounded cursor-pointer hover:bg-[#F7F7F7]">
          <Bell className="w-6 h-6" />
          <span className="text-[16px] font-bold">Notificações</span>
        </div>

        <div
          className="grid grid-cols-[20%_60%_20%] items-center gap-x-2 p-2 rounded cursor-pointer hover:bg-[#F7F7F7]"
          onClick={() => setIsBooksOpen((prev) => !prev)}
        >
          <Book className="w-6 h-6" />
          <span
            className={`text-[16px] font-bold text-center ${
              isBooksOpen ? "text-[#EA7C2D]" : "text-black"
            }`}
          >
            Todos Livros
          </span>
          <button className="flex items-center justify-center cursor-pointer">
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
                className="group p-2 rounded cursor-pointer hover:bg-[#F7F7F7]"
              >
                <span className="text-[14px] font-bold text-[#0A0A0A] group-hover:text-[#EA7C2D]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-[20%_80%] items-center gap-x-2 p-3 rounded cursor-pointer hover:bg-[#F7F7F7]">
          <Settings className="w-6 h-6" />
          <span className="text-[16px] font-bold">Configurações</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </aside>
  );
};

export default SideNav;