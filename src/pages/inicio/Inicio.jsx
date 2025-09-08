import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/inicio/logoFavicon.png";
import imgFundo from "../../assets/images/inicio/imgInicial-mobile.webp";
import anime from "animejs/lib/anime.es.js";
import "./inicio.scss";

const Inicio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Detecta se o usuário prefere menos animações
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Elementos que terão animação
    const selectors = [
      ".inicio__bg-img",
      ".inicio__background svg",
      ".logo",
      ".inicio__title",
      ".inicio__button",
    ];

    if (prefersReduced) {
      selectors.forEach((sel) =>
        document.querySelectorAll(sel).forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        })
      );
      return;
    }

    // Deixa os elementos invisíveis antes de animar
    selectors.forEach((sel) =>
      document.querySelectorAll(sel).forEach((el) => {
        el.style.opacity = "0";
        el.style.willChange = "transform, opacity";
      })
    );

    // Função que dispara a timeline de animações
    const startAnimation = () => {
      const tl = anime.timeline({ autoplay: true });

      // Primeiro: fundo (imagem + onda) e logo
      tl.add({
        targets: [".inicio__bg-img", ".inicio__background svg", ".logo"],
        opacity: [0, 1],
        translateY: [-20, 0],
        scale: [1.06, 1],
        duration: 1000,
        easing: "easeOutQuad",
        complete: (anim) => {
          anim.animatables.forEach((a) => (a.target.style.willChange = "auto"));
        },
      });

      // Depois: título e botão (entra com leve escala)
      tl.add({
        targets: [".inicio__title", ".inicio__button"],
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.94, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: "easeOutBack",
        complete: (anim) => {
          anim.animatables.forEach((a) => (a.target.style.willChange = "auto"));
        },
      });
    };

    // Dispara animação assim que o navegador estiver pronto para pintar
    const rafId = requestAnimationFrame(startAnimation);

    // Limpeza se desmontar
    return () => {
      cancelAnimationFrame(rafId);
      anime.remove(selectors);
    };
  }, []);

  return (
    <main className="inicio">
      {/* Fundo com imagem + onda SVG */}
      <div className="inicio__background">
        <img
          src={imgFundo}
          alt=""
          className="inicio__bg-img"
          loading="eager"        // carrega logo no início
          decoding="async"       // decodifica de forma assíncrona (mais rápido)
          fetchpriority="high"   // dá prioridade máxima para o navegador baixar
        />

        {/* Onda SVG que fica sobre o fundo */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#9DB610" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGrad)"
            d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,197.3C560,192,640,160,720,154.7C800,149,880,171,960,181.3C1040,192,1120,192,1200,176C1280,160,1360,128,1400,112L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Header com logo */}
      <header className="inicio__header">
        <img
          src={logo}
          alt="Logo do sistema"
          className="logo"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </header>

      {/* Conteúdo central (título + botão entrar) */}
      <section className="inicio__content">
        <h1 className="inicio__title">Santana</h1>

        <button
          type="button"
          className="inicio__button"
          aria-label="Entrar no sistema"
          onClick={() => {
            // Salva flag na sessão para liberar acesso à página de categorias
            sessionStorage.setItem("allowCategorias", "1");
            navigate("/categorias", { state: { viaButton: true } });
          }}
        >
          <strong>ENTRAR</strong>

          {/* Efeitos visuais do botão */}
          <div className="inicio__container-stars">
            <div className="inicio__stars"></div>
          </div>
          <div className="inicio__glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </section>
    </main>
  );
};

export default Inicio;