import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollRevealCategorias = () => {
  useEffect(() => {
    // Configura a animação de revelação para os cards de categoria
    ScrollReveal().reveal('.categoria-card.sr-card', {
      distance: '20px',
      origin: 'bottom',
      duration: 600,
      easing: 'ease-in-out',
      interval: 100,
      opacity: 0,
      // Remove a classe 'sr-only' após a conclusão da animação, tornando o card visível
      afterReveal: (el) => {
        el.classList.remove('sr-only');
      }
    });
  }, []);
};

export default useScrollRevealCategorias;