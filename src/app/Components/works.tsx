import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Works() {
  const projects = [
    {
      title: "Sala ambiente",
      subtitle: "Arte Moderna",
      imageSrc: "/work/01.png",
    },
    {
      title: "Cozinha Gourmet",
      subtitle: "Design Funcional",
      imageSrc: "/work/02.png",
    },
    {
      title: "Quarto Minimalista",
      subtitle: "Estilo Contemporâneo",
      imageSrc: "/work/03.png",
    },
    {
      title: "Área Externa",
      subtitle: "Paisagismo Natural",
      imageSrc: "/work/04.png",
    },
  ];

  return (
    <section id='Works' className="max-w-[1580px] mx-auto flex flex-col px-4 sm:px-8 md:px-6 lg:px-20 mb-8 mt-10 sm:mt-[100px] sm:mb-[100px]">
      <div className="text-titulo mb-10 text-center mx-auto itens items-center">
        <div className="w-full flex flex-col items-center justify-center text-left lg:-mt-10">
          <h1 className="text-4xl sm:text-5xl font-poppins font-semibold mb-2">
            Acompanhe Nossos Projetos
          </h1>
          <h2 className="text-xl font-poppins font-light mb-4 max-w-[700px]">
            Cada projeto é uma oportunidade de criar algo único e especial,
            sempre priorizando a satisfação do cliente.
          </h2>
        </div>
      </div>

      {/* Flex layout para os projetos */}
      <div className="w-full flex flex-wrap justify-center gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-[500px] overflow-hidden drop-shadow-xl"
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={500}
              height={350}
              objectFit="cover"
              className="rounded-tl-[80px]"
              quality={100}
              priority={true}
            />
            <div className="flex justify-between items-center w-full mt-4">
              <div>
                <h3 className="text-xl text-darkgray font-bold font-poppins">
                  {project.title}
                </h3>
                <p className="text-sm text-darkgray font-poppins font-medium">
                  {project.subtitle}
                </p>
              </div>
              <button aria-label={`Ver mais sobre ${project.title}`} className="p-3 bg-mediumgray rounded-full hover:bg-lightgray hover:text-darkgray font-poppins font-medium text-lightgray">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
