"use client";
import { Logo } from "@/components/Logo";
import { Menu, MoonIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 z-50 flex min-h-[70px] w-full bg-sky-200">
        <div className="container m-auto flex w-full items-center justify-between">
          {/* Menu para dispositivos maiores */}
          <ul className="hidden gap-4 md:flex">
            <li>
              <Link href="#bio">Bio</Link>
            </li>
            <li>
              <Link href="#projetos">Projetos</Link>
            </li>
            <li>
              <Link href="#certificados">Certificados</Link>
            </li>
            <li>
              <Link href="#artigos">Artigos</Link>
            </li>
          </ul>

          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Logo />
          </div>

          {/* Link para baixar o CV */}
          <div className="ml-auto hidden justify-center md:block">
            <Link href="/andrewgomesCV.pdf">Baixar CV</Link>
          </div>
          <div className="ml-6 rounded-full border border-sky-950 p-1">
            <MoonIcon />
          </div>

          {/* dropdown para dispositivos móveis */}
          <div className="ml-auto flex items-center md:hidden">
            <button onClick={toggleMenu} className="p-2 text-xl">
              <Menu />
            </button>

            {isOpen && (
              <ul className="absolute right-0 top-[70px] flex w-full flex-col items-center gap-4 bg-sky-200 py-4">
                <li>
                  <Link href="#bio" onClick={toggleMenu}>
                    Bio
                  </Link>
                </li>
                <li>
                  <Link href="#projetos" onClick={toggleMenu}>
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="#certificados" onClick={toggleMenu}>
                    Certificados
                  </Link>
                </li>
                <li>
                  <Link href="#artigos" onClick={toggleMenu}>
                    Artigos
                  </Link>
                </li>
                <li>
                  <Link href="/andrewgomesCV.pdf" onClick={toggleMenu}>
                    Baixar CV
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
