import academia from "/public/academia.jpg";
import agencia from "/public/agencia.jpg";
import forms from "/public/forms.png";
import ignite from "/public/ignite.png";
import parallax from "/public/parallax.jpg";
import portfolio from "/public/portfolio.png";
import restaurante from "/public/restaurante.jpg";
import sorveteria from "/public/sorveteria.jpg";
import listaDeCompras from "/public/listaDeCompras.png";


export const data_projetos = [
  {
    id: 1,
    nome: "App - Lista de Compras",
    imagem: listaDeCompras,
    descricao: "Aplicação web API REST com registro, login e cadastro de itens, para criar e gerenciar listas de compras com recursos de CRUD, utilizando React, NextJS, Prisma e PostgreSQL.",
    url: "https://proj-lista-de-compras.vercel.app/",
    tecnologias: ["Javascript", "Typescript", "Tailwind", "React", "Next", "Prisma", "PostgreSQL", "CRUD"],
  },
  {
    id: 2,
    nome: "(Este Site) - Portfólio",
    imagem: portfolio,
    descricao: "Portfólio feito em React e utilizando NextJS. Estilizado com Tailwind. Feito em 7 dias.",
    url: "https://andrew-gomes.netlify.app/",
    tecnologias: ["Html", "Css", "Tailwind", "Javascript", "Typescript", "React", "Next"],
  },

  {
    id: 3,
    nome: "Website Formulário",
    imagem: forms,
    descricao: "Projeto de uma interface formulário, utilizando algumas bibliotecas para UX/UI. Estilização feita com Tailwind.",
    url: "https://website-forms-tailwind.netlify.app/",
    tecnologias: ["Html", "Css", "Tailwind", "Javascript", "Typescript", "React", "Next"],
  },

  {
    id: 4,
    nome: "Restaurante - Cardápio Digital",
    imagem: restaurante,
    descricao: "Cardápio Digital para um restaurante fictício. Utilizando ferramentas de estado do React.",
    url: "https://website-restaurante-react.netlify.app/",
    tecnologias: ["Html", "Css", "Javascript", "React", "Next"],
  },

  {
    id: 5,
    nome: "Ignite Feed - Rede Social",
    imagem: ignite,
    descricao: "Um aplicativo simulando uma rede social, feito em React e utilizando Vite. Estilização feita via CSS.",
    url: "https://ignite-website.netlify.app/",
    tecnologias: ["Html", "Css", "Javascript", "Typescript", "React", "Vite"],
  },

  {
    id: 6,
    nome: "Academia Evolve",
    imagem: academia,
    descricao: "Projeto Simples feito utilizando estilização base o Bootstrap. O projeto foi um desafio e teve um prazo de algumas horas para ser entregue.",
    url: "https://academiaevolve.netlify.app/",
    tecnologias: ["Html", "Css", "Bootstrap", "Javascript"],
  },
  {
    id: 7,
    nome: "Manhattan - Coffee House",
    imagem: parallax,
    descricao: "Um website feito para praticar a técnica 'Parallax' utilizando CSS puro.",
    url: "https://website-cafeteria.netlify.app/",
    tecnologias: ["Html", "Css"],
  },

  {
    id: 8,
    nome: "Agência Digital",
    imagem: agencia,
    descricao: "Website landing page feito com React, utilizando useState para troca de temas. Primeiro projeto dentro do curso da DevMedia utilizando useState.",
    url: "https://agencia-design-digital.netlify.app/",
    tecnologias: ["Html", "Css", "Javascript", "React", "Next"],
  },

  {
    id: 9,
    nome: "Sorveteria",
    imagem: sorveteria,
    descricao: "Site de uma sorveteria, feito em React. Um dos primeiros projetos feito em React dentro do curso da DevMedia.",
    url: "https://projeto-sorv-laura.netlify.app/",
    tecnologias: ["Html", "Css", "Javascript", "React"],
  },
];
