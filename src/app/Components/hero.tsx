import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    return (
      <section className="relative h-[460px] xl:h-[840px] xl:rounded-bl-[290px] z-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] xl:rounded-bl-[290px] overflow-hidden">
          <Image 
            src="/hero/Hero_Background.jpg" 
            alt="Background Image" 
            layout="fill" 
            objectFit="cover" 
            objectPosition="center" 
            quality={100}
            priority={true} 
          />
        </div>

        {/* Text and Button */}
        <div className="container mx-auto h-full flex items-center justify-start">
            <div className="hero__text w-[750px] flex flex-col items-start justify-start text-left pl-4 sm:pl-0">
                <h1 className="h1 mb-8 font-poppins font-semibold">Seu espaço, nossa inspiração</h1>                
                <button className="btn btn-primary xl:mx-0 font-poppins font-medium">Solicite um orçamento <FaArrowRight /></button>
            </div>
        </div>
      </section>
    );
}
