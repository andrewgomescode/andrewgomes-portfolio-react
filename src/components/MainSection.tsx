"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function MainSection() {
  const [isVisible, setIsVisible] = useState(true);

  // Função Seta animada
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-screen w-full cursor-default flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-sky-700">
      {/* Título principal */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-100 drop-shadow-md md:text-7xl lg:text-8xl">
          Andrew Gomes
        </h1>

        {/* Subtítulo */}
        <p className="text-l mt-4 text-center text-indigo-100 drop-shadow-md md:text-end md:text-3xl lg:text-end lg:text-4xl">
          Desenvolvedor Front-end
        </p>
      </div>
      {/* Seta animada */}
      <div className="absolute bottom-16 flex animate-bounce flex-col items-center">
        <ArrowDown
          className={`h-10 w-10 text-indigo-50 drop-shadow-sm transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="mt-2 text-sm text-white drop-shadow-sm md:text-base lg:text-base">
          Role para baixo
        </span>
      </div>
    </section>
  );
}
