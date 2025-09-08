import { useState, useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/images/inicio/logoFavicon.png";

// Imports das categorias
import Entradas from "../../components/Entradas";
import Pratos from "../../components/Pratos";
import Sobremesas from "../../components/Sobremesas";
import Bebidas from "../../components/Bebidas";
import Combos from "../../components/Combos";
import Promocoes from "../../components/Promocoes";

import "./categorias.scss";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { key: "entradas", label: "Entradas" },
  { key: "pratos", label: "Pratos" },
  { key: "sobremesas", label: "Sobremesas" },
  { key: "bebidas", label: "Bebidas" },
  { key: "combos", label: "Combos" },
  { key: "promocoes", label: "Promoções" },
];

export default function Categorias() {
  const [active, setActive] = useState("entradas");
  const [menuOpen, setMenuOpen] = useState(false);

  const overlayRef = useRef(null);
  const burgerLabelRef = useRef(null);
  const wasOpenRef = useRef(false);
  const scrollYRef = useRef(0);
  const headerRef = useRef(null);

  // flag para NÃO restaurar o scroll antigo ao fechar o menu quando trocamos de categoria
  const skipScrollRestoreRef = useRef(false);

  const selectCategory = useCallback((key) => {
    setActive(key);
    skipScrollRestoreRef.current = true;
    setMenuOpen(false);
    // força subir pro topo SEMPRE ao trocar de categoria
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* ==== Animações GSAP no header ==== */
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".categorias__content",
            start: "top top+=50",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(headerRef.current, {
        backdropFilter: "blur(10px)",
        "-webkit-backdrop-filter": "blur(10px)", // suporte iOS/Safari
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".categorias__content",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      // ===== Bloqueio de scroll robusto (inclusive iOS Safari) =====
      const html = document.documentElement;
      const body = document.body;

      const prev = {
        htmlOverflow: html.style.overflow,
        bodyOverflow: body.style.overflow,
        bodyPosition: body.style.position,
        bodyTop: body.style.top,
        bodyWidth: body.style.width,
        bodyTouchAction: body.style.touchAction,
        htmlBg: html.style.backgroundColor,
        bodyBg: body.style.backgroundColor,
      };

      html.style.backgroundColor = "#0f1117";
      body.style.backgroundColor = "#0f1117";

      scrollYRef.current = window.scrollY;
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.width = "100%";
      body.style.touchAction = "none";

      const firstBtn =
        overlayRef.current &&
        overlayRef.current.querySelector("button.categorias__link");
      if (firstBtn) firstBtn.focus();

      const onKeyDown = (e) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.removeEventListener("keydown", onKeyDown);

        html.style.overflow = prev.htmlOverflow;
        body.style.overflow = prev.bodyOverflow;
        body.style.position = prev.bodyPosition;
        body.style.top = prev.bodyTop;
        body.style.width = prev.bodyWidth;
        body.style.touchAction = prev.bodyTouchAction;

        html.style.backgroundColor = prev.htmlBg;
        body.style.backgroundColor = prev.bodyBg;

        if (!skipScrollRestoreRef.current) {
          window.scrollTo(0, scrollYRef.current);
        } else {
          skipScrollRestoreRef.current = false;
        }
      };
    } else {
      // devolve o foco ao botão hamburger sem causar scroll
      if (wasOpenRef.current && burgerLabelRef.current) {
        burgerLabelRef.current.focus({ preventScroll: true });
      }
    }
    wasOpenRef.current = menuOpen;
  }, [menuOpen]);

  return (
    <main className="categorias">
      <header ref={headerRef} className="categorias__header">
        <img src={logo} alt="Logo do sistema" className="logo categorias__logo" />

        <label
          ref={burgerLabelRef}
          className="hamburger"
          htmlFor="burger"
          tabIndex={0}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="categorias-navigation"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <input
            type="checkbox"
            id="burger"
            checked={menuOpen}
            onChange={() => setMenuOpen((v) => !v)}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
      </header>

      <section className="categorias__content">
        {active === "entradas" && <Entradas />}
        {active === "pratos" && <Pratos />}
        {active === "sobremesas" && <Sobremesas />}
        {active === "bebidas" && <Bebidas />}
        {active === "combos" && <Combos />}
        {active === "promocoes" && <Promocoes />}
      </section>

      <div
        ref={overlayRef}
        id="categorias-navigation"
        className={`categorias__overlay ${menuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={menuOpen ? "false" : "true"}
      >
        <nav className="categorias__nav" aria-label="Categorias do cardápio">
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.key}>
                <button
                  type="button"
                  className={`categorias__link ${active === c.key ? "is-active" : ""}`}
                  aria-current={active === c.key ? "true" : undefined}
                  onClick={() => selectCategory(c.key)}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}