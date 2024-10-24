import Image from "next/image";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id='AboutUS' className="max-w-[1980px] mx-auto flex flex-col-reverse sm:flex-row px-4 sm:px-8 md:px-6 lg:px-20 items-center mb-12">
      {/* Texto */}
      <div className="w-full sm:w-[50%] h-full flex items-center justify-center p-4">
        <div className="hero__text w-full flex flex-col items-start justify-center text-left lg:-mt-10">
          <h1 className="text-4xl md:text-6xl font-poppins font-semibold mb-2">
            Criamos Ambientes
          </h1>
          <h1 className="text-4xl md:text-6xl font-poppins font-semibold mb-2 md:mb-10">
            Estilosos e Funcionais
          </h1>
          <h2 className="text-xl md:text-2xl font-poppins font-light mb-4 md:mb-20 max-w-[700px]">
            A Harmonia Interior se dedica a transformar espaços, oferecendo soluções que unem conforto, estilo e funcionalidade para a sua casa.
          </h2>
          <div className="flex items-center mb-4 md:mb-10 pr-11">
            <div className="p-6 rounded-full bg-darkgray">
              <FaPhoneAlt className="text-lightgray text-2xl" />
            </div>
            <div className="ml-8">
              <p className="text-darkgray font-bold text-2xl">
                (31) 3445-7979
              </p>
              <p className="text-darkgray text-xl">
                Seu conforto é nossa prioridade,
              </p>
              <p className="text-darkgray text-xl">
                24 horas por dia.
              </p>
            </div>
          </div>
          <button className="btn btn-primary font-poppins font-medium mb-4 lg:text-lg lg:px-6 lg:py-3">
            Fale conosco <FaArrowRight />
          </button>
        </div>
      </div>
      {/* Imagem */}
      <div className="relative w-full sm:w-[50%] rounded-bl-[180px] rounded-tr-[180px] overflow-hidden flex items-center justify-center drop-shadow-xl">
        <div className="w-full h-full p-2 sm:pl-8 md:pl-6 lg:pl-20">
          <Image
            src="/about/About_Background.jpg"
            alt="Kitchen"
            layout="responsive"
            width={600}
            height={375}
            objectFit="cover"
            className="rounded-bl-[180px] rounded-tr-[180px]"
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
