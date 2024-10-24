'use client'

import Image from 'next/image';
import { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ScrollFadeIn } from './ScrollReveal/scrollreveal';

export default function Footer() {
  useEffect(() => {
    ScrollFadeIn(false);
  }, []);

  return (
    <footer className="reveal max-w-[1900px] mx-auto py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-4">
        
        {/* Primeira Coluna */}
        <div className="lg:w-1/4 flex flex-col items-start mb-10">
          <Image
            src="/Logo_HarmoniaInterior.png"
            alt="Logo Harmonia Interior"
            width={200}
            height={100}
            objectFit="contain"
          />
          <p className="my-1 text-darkgray font-medium max-w-[300px]">
            Transformamos espaços em lares harmoniosos e acolhedores.
          </p>
          <div className="flex mt-4 gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Segunda Coluna */}
        <div className="lg:w-1/4 flex flex-col">
          <h4 className="text-2xl font-semibold text-darkgray mb-4 font-poppins">Páginas</h4>
          <ul className="space-y-2">
            <li><a href="#AboutUS" className="hover:text-mediumgray font-medium font-poppins text-xl">Sobre Nós</a></li>
            <li><a href="#Testimonial" className="hover:text-mediumgray font-medium font-poppins text-xl">Depoimentos</a></li>
            <li><a href="#Works" className="hover:text-mediumgray font-medium font-poppins text-xl">Nossos Projetos</a></li>
            <li><a href="#News" className="hover:text-mediumgray font-medium font-poppins text-xl">Notícias</a></li>
            <li><a href="#ContactUS" className="hover:text-mediumgray font-medium font-poppins text-xl">Contato</a></li>
          </ul>
        </div>

        {/* Terceira Coluna */}
        <div className="lg:w-1/4 flex flex-col">
          <h4 className="text-2xl font-semibold text-darkgray mb-4 font-poppins">Serviços</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-mediumgray font-medium font-poppins text-xl">Cozinha</a></li>
            <li><a href="#" className="hover:text-mediumgray font-medium font-poppins text-xl">Área de Estar</a></li>
            <li><a href="#" className="hover:text-mediumgray font-medium font-poppins text-xl">Banheiro</a></li>
            <li><a href="#" className="hover:text-mediumgray font-medium font-poppins text-xl">Quarto</a></li>
            <li><a href="#" className="hover:text-mediumgray font-medium font-poppins text-xl">Contato</a></li>
          </ul>
        </div>

        {/* Quarta Coluna */}
        <div className="lg:w-1/4 flex flex-col">
          <h4 className="text-2xl font-semibold text-darkgray mb-4 font-poppins">Contato</h4>
          <p className="text-darkgray font-medium font-poppins text-xl">Rua Exemplo, 123, Belo Horizonte, MG.</p>
          <p className="text-darkgray mt-2 font-medium font-poppins text-xl"><a href="mailto:contato@harmoniainterior.com.br" className="hover:text-mediumgray">contato@harmoniainterior.com.br</a></p>
          <p className="text-darkgray mt-2 font-medium font-poppins text-xl"><a href="tel:+5531987654321" className="hover:text-mediumgray">(31) 98765-4321</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t-2 border-darkgray">
        <p className="text-darkgray text-sm mb-2 mt-4 font-poppins">
          Copyright © Harmonia Interior 2024. Todos os direitos reservados.
        </p>
        <p className="text-darkgray text-sm font-poppins">
          Created with love by Willer Lucoles©
        </p>
      </div>
    </footer>
  );
}
