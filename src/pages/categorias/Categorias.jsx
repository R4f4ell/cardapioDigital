import { useState, useCallback, useEffect, useRef } from "react";
import logo from "../../assets/images/inicio/logoCardapio-mobile.png";
import Entradas from "../../components/entradas/Entradas";
import "./categorias.scss";

const CATEGORIES = [
  { key: "entradas", label: "Entradas" },
  { key: "pratos", label: "Pratos" },
  { key: "sobremesas", label: "Sobremesas" },
  { key: "bebidas", label: "Bebidas" },
  { key: "combos", label: "Combos" },
  { key: "promocoes", label: "Promoções" },
];

function TitleOnly({ title }) {
  return (
    <section className="categoria-vazia">
      <h2 className="section-title">{title}</h2>
    </section>
  );
}

export default function Categorias() {
  const [active, setActive] = useState("entradas");
  const [menuOpen, setMenuOpen] = useState(false);

  const overlayRef = useRef(null);
  const burgerLabelRef = useRef(null);
  const wasOpenRef = useRef(false);

  const selectCategory = useCallback((key) => {
    setActive(key);
    setMenuOpen(false);
  }, []);

  // Bloqueio de scroll + foco + ESC
  useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const firstBtn =
        overlayRef.current &&
        overlayRef.current.querySelector("button.categorias__link");
      if (firstBtn) firstBtn.focus();

      const onKeyDown = (e) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.body.style.overflow = prevOverflow;
        document.removeEventListener("keydown", onKeyDown);
      };
    } else {
      if (wasOpenRef.current && burgerLabelRef.current) {
        burgerLabelRef.current.focus();
      }
    }
    wasOpenRef.current = menuOpen;
  }, [menuOpen]);

  return (
    <main className="categorias">
      <header className="categorias__header">
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
        {active === "pratos" && <TitleOnly title="Pratos" />}
        {active === "sobremesas" && <TitleOnly title="Sobremesas" />}
        {active === "bebidas" && <TitleOnly title="Bebidas" />}
        {active === "combos" && <TitleOnly title="Combos" />}
        {active === "promocoes" && <TitleOnly title="Promoções" />}
      </section>

      <div
        ref={overlayRef}
        id="categorias-navigation"
        className={`categorias__overlay ${menuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
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
