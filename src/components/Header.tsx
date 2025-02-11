"use client";
import { Logo } from "@/components/Logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 flex min-h-[70px] w-full bg-sky-200 shadow-md">
      <div className="container m-auto flex w-full items-center justify-between">
        {/* Menu para dispositivos maiores */}
        <ul className="hidden gap-4 md:flex">
          <li className="transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900 hover:drop-shadow-sm">
            <Link href="#bio">Bio</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900 hover:drop-shadow-sm">
            <Link href="#projetos">Projetos</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900 hover:drop-shadow-sm">
            <Link href="#certificados">Certificados</Link>
          </li>
        </ul>

        <div className="absolute left-1/2 -translate-x-1/2 transform transition-transform duration-300 hover:scale-110">
          <Link href="#home">
            <Logo />
          </Link>
        </div>

        {/* Link para baixar o CV */}
        <div className="ml-auto hidden justify-center rounded-lg border-indigo-600 bg-indigo-500 p-1 text-indigo-100 transition-transform duration-300 hover:scale-110 hover:bg-indigo-400 md:block">
          <Link href="/CV_Andrew_Gomes.pdf" target="_blank">
            Baixar CV
          </Link>
        </div>

        {/* Botão de toggle do Dark Mode - Implementar depois */}
        {/* <ModeToggle /> */}

        {/* Dropdown para dispositivos móveis */}
        <div className="ml-auto flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-xl hover:text-indigo-500"
          >
            <Menu />
          </button>

          {isOpen && (
            <ul className="absolute right-0 top-[70px] flex w-full flex-col items-center gap-4 bg-sky-200 py-4 font-normal text-indigo-950 shadow-md">
              <li className="transition-transform duration-300 hover:scale-105 hover:font-semibold hover:text-indigo-900">
                <Link href="#bio" onClick={toggleMenu}>
                  Bio
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-105 hover:font-semibold hover:text-indigo-900">
                <Link href="#projetos" onClick={toggleMenu}>
                  Projetos
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-105 hover:font-semibold hover:text-indigo-900">
                <Link href="#certificados" onClick={toggleMenu}>
                  Certificados
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-105 hover:font-semibold hover:text-indigo-900">
                <Link
                  className="rounded-lg border-indigo-600 bg-indigo-500 p-2 text-indigo-100 transition-transform duration-300 hover:scale-110 hover:bg-indigo-400"
                  href="/CV_Andrew_Gomes.pdf"
                  onClick={toggleMenu}
                >
                  Baixar CV
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
