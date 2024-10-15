'use client'
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-30 bg-lightgray shadow-xl">
      <div className="max-w-[1980px] m-auto mx-auto flex justify-between items-center h-[90px] px-5 lg:px-14 ">
        {/* Logo à esquerda */}
        <div className="relative w-[200px] h-[70px]">
          <Image
            src="/Logo_HarmoniaInterior.png"
            alt="Logo Harmonia Interior"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>

        {/* Trigger do Menu (aparece em telas pequenas) */}
        <button
          className="text-3xl lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegação */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:block lg:relative lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 text-center lg:text-right bg-lightgray lg:bg-transparent absolute lg:static top-[90px] left-0 w-full lg:w-auto">
            <li>
              <a
                href="#"
                className="font-inter block py-2 lg:py-0 lg:text-lg text-lg font-semibold text-darkgray hover:text-mediumgray transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter block py-2 lg:py-0 lg:text-lg text-lg font-semibold text-darkgray hover:text-mediumgray transition-colors"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter block py-2 lg:py-0 lg:text-lg text-lg font-semibold text-darkgray hover:text-mediumgray transition-colors"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter block py-2 lg:py-0 lg:text-lg text-lg font-semibold text-darkgray hover:text-mediumgray transition-colors"
              >
                Nossos Projetos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter block py-2 lg:py-0 lg:text-lg text-lg font-semibold  text-darkgray hover:text-mediumgray transition-colors"
              >
                Notícias
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter block py-2 lg:py-0 lg:text-lg text-lg font-semibold  text-darkgray hover:text-mediumgray transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
