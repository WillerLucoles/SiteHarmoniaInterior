"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";



export default function Hero() {

  
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/hero/pexels_Hero_Background1.jpg",
    "/hero/pexels_Hero_Background2.jpg",
    "/hero/pexels_Hero_Background3.jpg",
    "/hero/pexels_Hero_Background4.jpg",
  ];

  // Função para avançar para a próxima imagem automaticamente a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // Transição automática a cada 4 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);    

  return (
    <section id='Hero' className="max-w-[1980px] m-auto flex flex-col sm:flex-row h-[1000px] xl:rounded-bl-[290px]">
      {/* Texto - 50% */}
      <div className="revealtop w-full sm:w-[50%] h-full flex items-center justify-center">
        <div className="hero__text w-full flex flex-col items-start justify-start text-left px-4 sm:px-8 md:pl-6 lg:pl-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold mb-4">
            Seu espaço,
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold mb-4">
            nossa inspiração
          </h1>
          <h2 className="text-2xl font-poppins font-light mb-8">
            Transformando ambientes com harmonia e design
          </h2>
          <button className="btn btn-primary font-poppins font-medium mb-4 lg:text-sm">
            Solicite um orçamento <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Imagem - 50% com transição suave e sobreposição */}
      <div className="relative w-full sm:w-[50%] h-full xl:rounded-bl-[290px] overflow-hidden -mt-20 sm:mt-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }} // Começa invisível e levemente deslocada
            animate={{
              opacity: currentImage === index ? 1 : 0, // Torna visível apenas a imagem ativa
              x: currentImage === index ? 0 : 20, // Faz um leve deslocamento durante a transição
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // Transição suave de 1.5 segundos
            className="absolute w-full h-full"
          >
            <Image
              src={image}
              alt={`Imagem ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority={true}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
