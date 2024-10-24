'use client'

import React, { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ScrollFadeIn } from './ScrollReveal/scrollreveal';

interface Testimonial {
  photo: string;
  name: string;
  city: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    photo: './testimonial/01.png',
    name: 'Marcela Campos',
    city: 'São Paulo',
    testimonial: 'Serviço excelente! O design foi além das minhas expectativas.',
  },
  {
    photo: './testimonial/02.png',
    name: 'Maria Oliveira',
    city: 'São Paulo',
    testimonial: 'Ótimo atendimento e o resultado ficou incrível!',
  },
  {
    photo: './testimonial/03.png',
    name: 'Carlos Pereira',
    city: 'Belo Horizonte',
    testimonial: 'Profissionalismo e dedicação em cada detalhe do projeto.',
  },
  {
    photo: './testimonial/04.png',
    name: 'Célia Alda',
    city: 'Contagem',
    testimonial: 'Serviço entregue com excelencia e agilidade.',
  },
];

export default function TestimonialsSlider() {

  useEffect(() => {
    ScrollFadeIn(false);
  }, []);
  
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    slides: {
      perView: 1,
      spacing: 2,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 2 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 2 },
      },
    },
  });



  return (
    <section id='Testimonial' className="revealfade px-4 sm:px-8 lg:px-16  bg-mediumgray">
      <div className="flex flex-col items-center p-6 mt-9 rounded-[60px] py-16 max-w-[1380px] mx-auto">
        <h2 className="text-4xl font-bold font-poppins text-center mb-8 text-lightgray">
          O que nossos clientes dizem:
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="bg-lightgray p-6 rounded-lg shadow-md w-[350px] h-[200px]">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.photo}
                    alt={`${testimonial.name} photo`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-darkgray font-bold text-lg font-poppins">{testimonial.name}</h3>
                    <p className="text-darkgray font-poppins">{testimonial.city}</p>
                  </div>
                </div>
                <p className="text-darkgray italic font-poppins">&quot;{testimonial.testimonial}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
