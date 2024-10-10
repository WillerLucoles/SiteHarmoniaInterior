
import { FaArrowRight } from "react-icons/fa";


export default function Hero() {
    return (
      <section className="hero h-[460px] xl:h-[840px] bg-hero bg-center bg-cover 
      bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20 bg-[length:600px]">
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
            <div className="hero__text w-[700px] flex flex-col items-center text-center 
            xl:text-left lg:items-start">
                <h1 className="h1 mb-8 font-poppins font-medium">Seu espaço, nossa inspiração</h1>
                <p className="mb-8 font-poppins text-xl font-medium">Projetos personalizados que refletem sua personalidade.</p>
                <button className="btn btn-primary mx-auto xl:mx-0 font-poppins font-medium">Solicite um orçamento <FaArrowRight /></button>
            </div>
        </div>
  
        
      </section>
    );
  }