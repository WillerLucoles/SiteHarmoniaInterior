'use client'

import { MdArchitecture } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";



export default function Steps() {


  return (
    <section className="revealfade flex justify-center items-center px-[20px] py-12">
      <div className="m-auto max-w-[1200px] w-full">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 scale-90">
          <div className="steps__step text-center bg-lightgray border border-darkgray rounded-3xl p-6 flex flex-col justify-center items-center max-w-[300px] mx-auto hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <MdArchitecture className="text-6xl" />
            </div>
            <h3 className="h3 mb-2 text-darkgray font-bold font-poppins">Planejamento do Projeto</h3>
            <p className="mb-4 max-w-md mx-auto text-darkgray font-poppins font-medium">
              Cada etapa é planejada com atenção aos detalhes para garantir o
              melhor resultado.
            </p>
            <button className="h-[50px] px-[25px] transition-all duration-300 hover:scale-105 flex items-center gap-2 font-poppins font-medium mb-4 text-lg text-darkgray">
              Veja Mais <FaArrowRight />
            </button>
          </div>
          <div className="steps__step text-center bg-lightgray border border-darkgray rounded-3xl p-6 flex flex-col justify-center items-center max-w-[300px] mx-auto hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <FaRegLightbulb className="text-6xl" />
            </div>
            <h3 className="h3 mb-2 text-darkgray font-bold font-poppins">Desenvolvimento Criativo</h3>
            <p className="mb-4 max-w-md mx-auto text-darkgray font-poppins font-medium">
              Inovamos em cada passo, garantindo soluções criativas e eficazes.
            </p>
            <button className="h-[50px] px-[25px] transition-all duration-300 hover:scale-105 flex items-center gap-2 font-poppins font-medium mb-4 text-lg text-darkgray">
              Veja Mais <FaArrowRight />
            </button>
          </div>
          <div className="steps__step text-center bg-lightgray border border-darkgray rounded-3xl p-6 flex flex-col justify-center items-center max-w-[300px] mx-auto hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <FaRegChartBar className="text-6xl" />
            </div>
            <h3 className="h3 mb-2 text-darkgray font-bold font-poppins">Análise de Resultados</h3>
            <p className="mb-4 max-w-md mx-auto text-darkgray font-poppins font-medium">
              Avaliamos os resultados com precisão para garantir a excelência.
            </p>
            <button className="h-[50px] px-[25px] transition-all duration-300 hover:scale-105 flex items-center gap-2 font-poppins font-medium mb-4 text-lg text-darkgray">
              Veja Mais <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
