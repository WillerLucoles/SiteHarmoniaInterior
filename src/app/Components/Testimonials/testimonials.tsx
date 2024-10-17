'use client'
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  photo: string;
  name: string;
  city: string;
  testimonial: string;
}
// Array cards
const testimonials: Testimonial[] = [
  {
    photo: "/path/to/photo1.jpg",
    name: "João Silva",
    city: "São Paulo",
    testimonial: "Serviço excelente! O design foi além das minhas expectativas."
  },
  {
    photo: "/path/to/photo2.jpg",
    name: "Maria Oliveira",
    city: "Rio de Janeiro",
    testimonial: "Ótimo atendimento e o resultado ficou incrível!"
  },
  {
    photo: "/path/to/photo3.jpg",
    name: "Carlos Pereira",
    city: "Belo Horizonte",
    testimonial: "Profissionalismo e dedicação em cada detalhe do projeto."
  },
  
];

//Cards
const TestimonialCard: React.FC<Testimonial> = ({ photo, name, city, testimonial }) => (
  <div className="min-w-[300px] max-w-[300px] bg-lightgray p-6 rounded-lg shadow-md flex-shrink-0">
    {/* Avatar */}
    <div className="flex items-center mb-4">
      <img
        src={photo}
        alt={`${name} photo`}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500">{city}</p>
      </div>
    </div>
    {/* Testemunho */}
    <p className="text-gray-700 italic">"{testimonial}"</p>
  </div>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Configurações para arrastar os cards
  useEffect(() => {
    const carousel = carouselRef.current;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - carousel!.offsetLeft;
      scrollLeft = carousel!.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel!.offsetLeft;
      const walk = (x - startX) * 3;
      carousel!.scrollLeft = scrollLeft - walk;
    };

    carousel!.addEventListener("mousedown", handleMouseDown);
    carousel!.addEventListener("mouseleave", handleMouseLeave);
    carousel!.addEventListener("mouseup", handleMouseUp);
    carousel!.addEventListener("mousemove", handleMouseMove);

    return () => {
      carousel!.removeEventListener("mousedown", handleMouseDown);
      carousel!.removeEventListener("mouseleave", handleMouseLeave);
      carousel!.removeEventListener("mouseup", handleMouseUp);
      carousel!.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const totalSlides = testimonials.length;

  // Atualiza o índice atual com base no scroll
  const handleScroll = () => {
    const carousel = carouselRef.current;
    const scrollPosition = carousel!.scrollLeft;
    const cardWidth = carousel!.clientWidth / 3; // Ajuste conforme o tamanho do card e o espaço
    const newIndex = Math.round(scrollPosition / cardWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="max-w-[1350px] mx-auto bg-mediumgray py-16 rounded-3xl">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center mb-8 text-lightgray">
          O que nossos clientes dizem
        </h2>
        
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="overflow-x-auto flex justify-center gap-6 snap-x snap-mandatory scroll-smooth"
        >
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              photo={item.photo}
              name={item.name}
              city={item.city}
              testimonial={item.testimonial}
            />
          ))}
        </div>

        {/* Paginadores (Pontinhos) */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentIndex === index ? "bg-darkgray" : "bg-lightgray"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
