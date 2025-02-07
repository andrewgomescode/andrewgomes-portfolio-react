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
    <div className="max-w-fit rounded-xl border border-indigo-100 bg-white shadow-md transition-transform duration-300 hover:scale-105">
      <Image
        className="rounded-t-xl"
        alt="Imagem Preview do Projeto "
        src={projeto.imagem}
      />
      <div className="mb-5 mt-5 flex flex-wrap justify-center gap-2">
        {projeto.tecnologias.map((tech, index) => (
          <button
            key={index}
            className={`rounded-xl p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110 ${
              tech === "Html"
                ? "bg-orange-400"
                : tech === "Css"
                  ? "bg-blue-400"
                  : tech === "Javascript"
                    ? "bg-yellow-400"
                    : tech === "React"
                      ? "bg-blue-800"
                      : tech === "Tailwind"
                        ? "bg-blue-300"
                        : tech === "Typescript"
                          ? "bg-blue-700"
                          : tech === "Next"
                            ? "bg-black"
                            : "bg-gray-500" // Fallback para tecnologias não especificadas
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="">
        <h2 className="text-center text-xl font-bold">{projeto.nome}</h2>
        <p className="text-gray-700">{projeto.descricao}</p>
        <Link
          href={projeto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Visitar Projeto
        </Link>
      </div>
    </div>
  );
}
