import { data_projetos } from "@/data/data_projetos";
import { Cards } from "./Card/Cards";

export function SectionCards() {
  return (
    <div className="bg-sky-100">
      <div className="container mx-auto px-4 py-20">
        <h2 className="mb-14 text-center text-4xl font-semibold text-indigo-950 md:text-5xl lg:text-6xl">
          Projetos
        </h2>
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data_projetos.map((projeto) => (
            <Cards key={projeto.id} projeto={projeto} />
          ))}
        </div>
      </div>
    </div>
  );
}
