"use client"; // Adicione isso se estiver usando recursos do React como useState ou useEffect

import { ArrowDown } from "lucide-react"; // Importando um ícone de seta para baixo
import { useEffect, useState } from "react";

export default function MainSection() {
  const [isVisible, setIsVisible] = useState(true);

  // Função para animar a seta
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev); // Alterna a visibilidade da seta
    }, 1000); // Altera a cada 1 segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-sky-700">
      {/* Título principal */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-100 md:text-8xl">
          Andrew Gomes
        </h1>

        {/* Subtítulo (opcional) */}
        <p className="mt-4 text-center text-xl text-indigo-100 md:text-end md:text-3xl lg:text-end lg:text-4xl">
          Desenvolvedor Front-end
        </p>
      </div>
      {/* Seta animada */}
      <div className="absolute bottom-12 flex animate-bounce flex-col items-center">
        <ArrowDown
          className={`h-10 w-10 text-indigo-50 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="mt-2 text-sm text-white md:text-base lg:text-base">
          Role para baixo
        </span>
      </div>
    </section>
  );
}
