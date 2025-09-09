import { useState, useCallback, useEffect, useRef, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/images/inicio/logo/logoFavicon.png";
import "./categorias.scss";

// Hooks
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useIdlePrefetch from "../../hooks/useIdlePrefetch";

gsap.registerPlugin(ScrollTrigger);

const Entradas   = lazy(() => import("../../components/Entradas"));
const Pratos     = lazy(() => import("../../components/Pratos"));
const Sobremesas = lazy(() => import("../../components/Sobremesas"));
const Bebidas    = lazy(() => import("../../components/Bebidas"));
const Combos     = lazy(() => import("../../components/Combos"));
const Promocoes  = lazy(() => import("../../components/Promocoes"));

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
  const headerRef = useRef(null);

  // política de restauração ao destravar scroll: 'keep' por padrão
  const [restoreStrategy, setRestoreStrategy] = useState("keep");

  // trava scroll quando menu abre; destrava quando fecha
  useLockBodyScroll(menuOpen, restoreStrategy);

  const selectCategory = useCallback((key) => {
    setActive(key);
    // ao clicar num link: não restaura posição anterior; rolaremos ao topo
    setRestoreStrategy("none");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // volta a estratégia padrão após o menu fechar
  useEffect(() => {
    if (!menuOpen) {
      // pequena defasagem pra garantir que o unlock já ocorreu
      const t = setTimeout(() => setRestoreStrategy("keep"), 0);
      return () => clearTimeout(t);
    }
  }, [menuOpen]);

  // Prefetch em idle dos módulos (antes estava inline)
  useIdlePrefetch([
    () => import("../../components/Entradas"),
    () => import("../../components/Pratos"),
    () => import("../../components/Sobremesas"),
    () => import("../../components/Bebidas"),
    () => import("../../components/Combos"),
    () => import("../../components/Promocoes"),
  ]);

  /* ==== Animações GSAP no header (inalterado) ==== */
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
        "-webkit-backdrop-filter": "blur(10px)",
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
        <Suspense fallback={null}>
          {active === "entradas"   && <Entradas />}
          {active === "pratos"     && <Pratos />}
          {active === "sobremesas" && <Sobremesas />}
          {active === "bebidas"    && <Bebidas />}
          {active === "combos"     && <Combos />}
          {active === "promocoes"  && <Promocoes />}
        </Suspense>
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