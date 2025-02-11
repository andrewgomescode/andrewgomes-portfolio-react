"use client";
import { Logo } from "@/components/Logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 w-full bg-sky-200 shadow-md">
      <div className="mx-auto max-w-screen-2xl px-4 py-1 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Menu desktop (esquerda) */}
          <div className="hidden flex-1 items-center md:flex">
            <ul className="flex gap-6">
              <li className="transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900">
                <Link href="#bio">Bio</Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900">
                <Link href="#projetos">Projetos</Link>
              </li>
              <li className="transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900">
                <Link href="#certificados">Certificados</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 hover:scale-110">
            <Link href="#home">
              <Logo />
            </Link>
          </div>

          {/* Botão CV e menu mobile (direita) */}
          <div className="flex flex-1 items-center justify-end gap-4">
            {/* Botão CV desktop */}
            <div className="hidden rounded-lg bg-indigo-500 px-4 py-2 text-indigo-100 transition-transform duration-300 hover:scale-110 hover:bg-indigo-400 md:block">
              <Link href="/CV_Andrew_Gomes.pdf" target="_blank">
                Baixar CV
              </Link>
            </div>

            {/* Botão menu mobile */}
            <button
              onClick={toggleMenu}
              className="p-2 text-xl transition-transform duration-300 hover:scale-110 hover:text-indigo-500 md:hidden"
            >
              <Menu />
            </button>
          </div>

          {/* Dropdown mobile */}
          {isOpen && (
            <div className="fixed left-0 right-0 top-16 z-50 md:hidden">
              <div className="bg-sky-200 px-4 pb-4 pt-2 shadow-md">
                <ul className="flex flex-col items-center gap-4">
                  <li>
                    <Link
                      href="#bio"
                      onClick={toggleMenu}
                      className="block transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900"
                    >
                      Bio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#projetos"
                      onClick={toggleMenu}
                      className="block transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900"
                    >
                      Projetos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#certificados"
                      onClick={toggleMenu}
                      className="block transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-indigo-900"
                    >
                      Certificados
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/CV_Andrew_Gomes.pdf"
                      onClick={toggleMenu}
                      target="_blank"
                      className="mt-2 block rounded-lg bg-indigo-500 px-4 py-2 text-center text-indigo-100 hover:bg-indigo-400"
                    >
                      Baixar CV
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
