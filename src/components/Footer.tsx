"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-sky-100 py-4">
      <div className="container mx-auto px-4">
        {/* Layout Mobile (sm) */}
        <div className="md:hidden">
          {/* Grupo centralizado com logo à esquerda e texto centralizado */}
          <div className="flex items-center">
            <Logo />
            <div className="ml-2 text-center">
              <h3 className="text-md font-semibold text-indigo-950 md:text-xl lg:text-xl">
                Desenvolvido por Andrew Gomes
              </h3>
              <p className="text-sm text-indigo-950">Desenvolvedor Front-end</p>
            </div>
          </div>
          {/* Ícones centralizados abaixo */}
          <div className="mx-auto mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/andrewgomescode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-10 w-10 text-indigo-950 hover:text-indigo-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrewgomess/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-10 w-10 text-indigo-950 hover:text-indigo-600" />
            </a>
          </div>
        </div>

        {/* Layout Desktop (md e lg) */}
        <div className="hidden cursor-default items-center justify-between md:flex">
          <div className="w-1/3 text-left">
            <h3 className="text-xl font-semibold text-indigo-950">
              Desenvolvido por Andrew Gomes
            </h3>
            <p className="text-md mt-2 text-indigo-950">
              Desenvolvedor Front-end
            </p>
          </div>
          <div className="flex w-1/3 justify-center">
            <Logo />
          </div>
          <div className="flex w-1/3 justify-end space-x-4">
            <a
              href="https://github.com/andrewgomescode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-10 w-10 text-indigo-950 hover:text-indigo-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrewgomess/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-10 w-10 text-indigo-950 hover:text-indigo-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
