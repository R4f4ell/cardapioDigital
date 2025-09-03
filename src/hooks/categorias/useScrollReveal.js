// useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

/**
 * Revela apenas os cards de categorias.
 * Respeita prefers-reduced-motion e limpa listeners ao desmontar.
 */
export default function useScrollRevealCategorias(
  selector = '.categoria-card.sr-card'
) {
  useEffect(() => {
    // Acessibilidade: sem animação para quem prefere menos movimento
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sr = ScrollReveal({
      distance: '24px',
      duration: 700,
      easing: 'cubic-bezier(0.2, 0, 0, 1)',
      opacity: 0,
      scale: 0.98,
      reset: false,
      viewFactor: 0.08, // 8% visível já dispara
      mobile: true
    });

    // Escadinha suave entre os cards
    sr.reveal(selector, {
      origin: 'bottom',
      interval: 100
    });

    // Boa prática em SPA: remover estilos/listeners ao desmontar
    return () => {
      try { sr.clean(selector); } catch {}
    };
  }, [selector]);
}