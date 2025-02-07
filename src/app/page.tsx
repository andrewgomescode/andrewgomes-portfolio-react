import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import { Bio } from "@/components/Bio";
import { Cards } from "@/components/Cards";
import { data_projetos } from "@/data/data_projetos";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <InfiniteSlider />
      <Bio />
      <div className="bg-sky-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-3xl font-bold">Meus Projetos</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data_projetos.map((projeto) => (
              <Cards key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
