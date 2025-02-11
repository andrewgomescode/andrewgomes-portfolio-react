import Image from "next/image";
import BioImage from "@/../public/bioimage.png";
import Link from "next/link";

export function Bio() {
  return (
    <section
      id="bio"
      className="flex cursor-default items-center justify-center bg-sky-200"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 py-20">
        <div className="max-w-md">
          <Image src={BioImage} alt="Andrew Gomes" />
        </div>
        <div className="flex max-w-lg flex-col gap-8 p-2 md:p-0 lg:p-0">
          <h2 className="text-center text-4xl font-semibold text-indigo-950 md:text-5xl lg:text-6xl">
            Sobre
          </h2>
          <div className="">
            <p className="mt-5 text-start indent-4 text-indigo-950">
              Olá! Meu nome é Andrew Gomes e sou Desenvolvedor Front-End com 1
              ano e meio de experiência. Estou me especializando em criar
              interfaces visuais rápidas e fluidas. Atualmente tenho me
              concentrado em soluções utilizando:
            </p>
            <div className="mt-5 flex cursor-pointer flex-wrap justify-center gap-4">
              <h3 className="rounded-xl bg-orange-400 p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                Html
              </h3>
              <h3 className="rounded-xl bg-blue-400 p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                Css
              </h3>
              <h3 className="rounded-xl bg-blue-300 p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                Tailwind
              </h3>
              <h3 className="rounded-xl bg-yellow-400 p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                Javascript
              </h3>
              <h3 className="rounded-xl bg-blue-800 p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                Typescript
              </h3>
              <h3 className="rounded-xl bg-blue-500 p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                React
              </h3>
              <h3 className="rounded-xl bg-black p-1 text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                Next
              </h3>
            </div>
            <p className="mt-4 text-center indent-4 text-indigo-950">
              Aplicação de Clean Code, manutenção e mais.
            </p>
          </div>
          <Link
            className="rounded-lg bg-indigo-500 p-2 text-center text-indigo-100 transition-transform duration-300 md:hover:scale-110 lg:hover:scale-110"
            href="/CV_Andrew_Gomes.pdf"
            target="_blank"
          >
            Baixar CV
          </Link>
        </div>
      </div>
    </section>
  );
}
