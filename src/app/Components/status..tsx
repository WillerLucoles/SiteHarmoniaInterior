'use client'

import { ScrollFadeIn } from "./FramerMotion/animedScroll";




export default function Status() {



    return (
      <ScrollFadeIn>
      <section className=" revealfade Status bg-[#b8b8b8] mt-[80px] md:my-[100px] py-[80px] md:px-[100px]">
        <div className="mx-auto grid grid-cols-1 xl:grid-cols-4 gap-12">
          <div className="stats__item text-center xl:border-r xl:border-mediumgray">
            <h3 className="h1 font-poppins font-bold text-darkgray text-5xl">10</h3>
            <p className="font-poppins font-medium text-xl">Anos de Experiência</p>
          </div>
          <div className="stats__item text-center xl:border-r xl:border-mediumgray">
            <h3 className="h1 font-poppins font-bold text-darkgray text-5xl">1k</h3>
            <p className="font-poppins font-medium text-xl">Projetos Ativos</p>
          </div>
          <div className="stats__item text-center xl:border-r xl:border-mediumgray">
            <h3 className="h1 font-poppins font-bold text-darkgray text-5xl">10k</h3>
            <p className="font-poppins font-medium text-xl">Projetos com Sucesso</p>
          </div>
          <div className="stats__item text-center">
            <h3 className="h1 font-poppins font-bold text-darkgray text-5xl">4k</h3>
            <p className="font-poppins font-medium text-xl">Clientes Satisfeitos</p>
          </div>
        </div>
      </section>        
      </ScrollFadeIn>
    );
  }
  