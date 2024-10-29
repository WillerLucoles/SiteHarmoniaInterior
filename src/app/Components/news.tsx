'use client'

import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import { ScrollFadeIn, ScrollFromBottom } from "./FramerMotion/animedScroll";


export default function News() {
  const projects = [
    {
      title: "Sala ambiente",
      subtitle: "Arte Moderna",
      imageSrc: "/news/01.png",
      date:"Junho, 2024",
    },
    {
      title: "Cozinha Gourmet",
      subtitle: "Design Funcional",
      imageSrc: "/news/02.png",
      date:"Junho, 2024",
    },
    {
      title: "Quarto Minimalista",
      subtitle: "Estilo Contemporâneo",
      imageSrc: "/news/03.png",
      date:"Junho, 2024",
    },
  ];



  return (
    <section id='News' className="max-w-[1580px] mx-auto flex flex-col px-4 sm:px-8 md:px-6 lg:px-20 mb-8 mt-10 sm:mt-[100px] sm:mb-[100px]">
      <ScrollFadeIn className="revealleft text-titulo mb-10 text-center mx-auto itens items-center ">
        <div className="w-full flex flex-col items-center justify-center text-left lg:-mt-10">
          <h1 className="text-4xl sm:text-5xl font-poppins font-semibold mb-2">
            Artigos & Notícias
          </h1>
          <h2 className="text-xl font-poppins font-light mb-4 max-w-[700px]">
            Fique por dentro das últimas tendências e novidades em design de
            interiores.
          </h2>
        </div>
      </ScrollFadeIn>

      <ScrollFromBottom className="reveal w-full flex flex-wrap justify-center gap-16 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[380px] h-[480px] border-2 border-darkgray hover:bg-lightgray overflow-hidden drop-shadow-xl p-5 rounded-[60px]"
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={380}
              height={350}
              objectFit="cover"
              className="rounded-t-[40px]"
              quality={100}
              priority={true}
            />

            <div className="flex justify-between items-center w-full mt-4 mb-3">
              <div>
              <h3 className="text-xl text-darkgray font-bold font-poppins">
                  {project.title}
                </h3>
                <p className="text-sm text-darkgray font-poppins font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center w-full mt-4 mb-3">
              <div>
                <p className="text-lg text-darkgray font-bold font-poppins">
                  {project.date}
                </p>
              </div>
              <button
                aria-label={`Ver mais sobre ${project.title}`}
                className="p-3 bg-mediumgray rounded-full hover:border hover:border-darkgray font-poppins font-medium text-lightgray"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </ScrollFromBottom>
    </section>
  );
}
