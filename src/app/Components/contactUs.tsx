'use client'
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ScrollFadeIn } from "./ScrollReveal/scrollreveal";


export default function ContactUS(){
  useEffect(() => {
    ScrollFadeIn(false);
  }, []);

  return (
    <section id='ContactUS' className="revealfade px-4 sm:px-8 lg:px-16  bg-mediumgray">
      <div className="flex flex-col items-center p-6 mt-9 rounded-[60px] py-16 max-w-[1380px] mx-auto">
        <h2 className="text-3xl font-bold font-poppins text-center mb-2 text-lightgray">
        Quer transformar seu espaço com a Harmonia Interior?
        </h2>
        <p className="text-md font-medium font-poppins text-center mb-8 text-lightgray">
        Entre em contato conosco e descubra como podemos trazer estilo e funcionalidade ao seu lar.
        </p>
        <button className="btn btn-primary font-poppins font-medium mb-4 lg:text-sm">
            Solicite um orçamento <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
