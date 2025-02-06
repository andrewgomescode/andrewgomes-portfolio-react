import Image from "next/image";
import BioImage from "@/../public/bioimage.png";
import Link from "next/link";

export function Bio() {
  return (
    <section id="bio" className="flex items-center justify-center bg-sky-200">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 py-20">
        <div className="max-w-md">
          <Image src={BioImage} alt="Andrew Gomes" />
        </div>
        <div className="flex max-w-lg flex-col gap-8">
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl">
            Sobre
          </h2>
          <div className="">
            <p className="mt-4 text-start text-indigo-950">
              Olá! Meu nome é Andrew Gomes e sou Desenvolvedor Front-End com 1
              ano e meio de experiência. Estou me especializando em criar
              interfaces visuais rápidas e fluidas. Atualmente tenho me
              concentrado em soluções utilizando:
            </p>
            <div className="mt-4 flex cursor-default justify-center gap-4">
              <h3 className="rounded-xl bg-orange-400 p-1 text-sm font-semibold text-white">
                Html
              </h3>
              <h3 className="rounded-xl bg-blue-400 p-1 text-sm font-semibold text-white">
                Css
              </h3>
              <h3 className="rounded-xl bg-blue-300 p-1 text-sm font-semibold text-white">
                Tailwind
              </h3>
              <h3 className="rounded-xl bg-yellow-400 p-1 text-sm font-semibold text-white">
                Javascript
              </h3>
              <h3 className="rounded-xl bg-blue-800 p-1 text-sm font-semibold text-white">
                React
              </h3>
              <h3 className="rounded-xl bg-black p-1 text-sm font-semibold text-white">
                Next
              </h3>
            </div>
            <p className="mt-4 text-start">Aplicação de Clean Code</p>
          </div>
          <Link href="/">Baixar CV</Link>
        </div>
      </div>
    </section>
  );
}
