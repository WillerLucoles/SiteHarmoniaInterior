'use client'
import ScrollReveal from 'scrollreveal';

// Configuração global de ScrollReveal
export const ScrollFromTop = (reset: boolean = false) => {
  ScrollReveal().reveal('.reveal', {
    origin: 'top',    // Animação vem de baixo
    distance: '50px',    // Distância do movimento
    duration: 800,       // Duração da animação em milissegundos
    reset: reset,        // Se true, animação ocorre novamente ao reentrar no viewport
    delay: 200,          // Atraso para iniciar a animação
    easing: 'ease-in-out', // Tipo de transição
  });
};

// Função 2: Animação de baixo para cima
export const ScrollFromBottom = (reset: boolean = false) => { 
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',    
      distance: '50px',    
      duration: 800,       
      reset: reset,        
      delay: 200,          
      easing: 'ease-in-out',
    });
  };

  // Função 3: Animação da esquerda para a direita
export const ScrollFromLeft = (reset: boolean = false) => { 
    ScrollReveal().reveal('.revealleft', {
      origin: 'left',    
      distance: '50px',    
      duration: 800,       
      reset: reset,        
      delay: 200,          
      easing: 'ease-in-out',
    });
  };

  // Função 4: Animação da direita para a esquerda
export const ScrollFromRight = (reset: boolean = false) => { 
    ScrollReveal().reveal('.revealright', {
      origin: 'right',    
      distance: '50px',    
      duration: 800,       
      reset: reset,        
      delay: 200,          
      easing: 'ease-in-out',
    });
  };

  // Função 5: Aparecer gradativamente (fade in)
export const ScrollFadeIn = (reset: boolean = false) => { 
    ScrollReveal().reveal('.reveal', {
      opacity: 0,
      duration: 1000,
      reset: reset,
      delay: 200,
      easing: 'ease-in-out',
    });
  };