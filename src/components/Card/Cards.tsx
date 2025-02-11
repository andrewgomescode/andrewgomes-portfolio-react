import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Projeto {
  nome: string;
  imagem: string | StaticImageData;
  descricao: string;
  url: string;
  tecnologias: string[];
}

export function Cards({ projeto }: { projeto: Projeto }) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105">
      <Image
        className="h-auto w-full rounded-t-xl"
        alt="Imagem Preview do Projeto"
        src={projeto.imagem}
      />
      <div className="mb-5 mt-5 flex flex-wrap justify-center gap-2 pl-1 pr-1">
        {projeto.tecnologias.map((tecnologia, index) => (
          <button
            key={index}
            className={`rounded-xl p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110 ${
              tecnologia === "Html"
                ? "bg-orange-400"
                : tecnologia === "Css"
                  ? "bg-blue-400"
                  : tecnologia === "Javascript"
                    ? "bg-yellow-400"
                    : tecnologia === "React"
                      ? "bg-blue-800"
                      : tecnologia === "Tailwind"
                        ? "bg-blue-300"
                        : tecnologia === "Typescript"
                          ? "bg-blue-700"
                          : tecnologia === "Next"
                            ? "bg-black"
                            : tecnologia === "Vite"
                              ? "bg-purple-900"
                              : "bg-gray-500" // Padrão para não listado
            }`}
          >
            {tecnologia}
          </button>
        ))}
      </div>

      <div className="mb-3 bg-indigo-100 p-[0.5px]"></div>

      <h3 className="ml-5 mr-5 text-center text-2xl font-semibold text-indigo-950 md:text-lg lg:text-xl">
        {projeto.nome}
      </h3>

      <p className="ml-1 mr-1 mt-2 break-words p-1 text-start indent-4 text-indigo-950">
        {projeto.descricao}
      </p>

      <div className="mt-auto">
        <Link
          href={projeto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex justify-center rounded-b-xl bg-indigo-500 p-2 text-indigo-100 shadow-md hover:bg-indigo-400"
        >
          Visitar Projeto
        </Link>
      </div>
    </div>
  );
}
