"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { data_certificados } from "../data/data_certificados";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const SectionCertificados = () => {
  // Slick-Carousel settings
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // telas menores que 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // telas menores que 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="certificados" className="bg-sky-200">
      <div className="container relative mx-auto cursor-default overflow-hidden px-4 py-20">
        <h2 className="mb-14 text-center text-4xl font-semibold text-indigo-950 md:text-5xl lg:text-6xl">
          Certificados
        </h2>
        <Slider {...settings}>
          {data_certificados.map((certificado) => (
            <div key={certificado.id} className="px-4">
              <div className="mb-5 mt-5 cursor-grab rounded-xl bg-zinc-50 shadow-md transition-transform duration-300 hover:scale-105">
                <Image
                  src={certificado.imagem}
                  alt={certificado.nome}
                  width={500}
                  height={300}
                  className="rounded-t-xl"
                />
                <div className="mb-3 bg-indigo-100 p-[0.5px]"></div>
                <h3 className="ml-5 mr-5 text-center text-2xl font-semibold text-indigo-950 md:text-lg lg:text-xl">
                  {certificado.nome}
                </h3>
                <Link
                  href={certificado.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex justify-center rounded-b-xl bg-indigo-500 p-2 text-indigo-100 shadow-md hover:bg-indigo-400"
                >
                  Visitar Certificado
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SectionCertificados;
