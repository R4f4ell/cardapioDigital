import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { Eye, X } from "lucide-react";
import useCardapioModal from "../hooks/useCardapioModal";

export default function CardapioGrid({ title, items }) {
  const { selected, openModal, closeModal } = useCardapioModal();
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cards = root.querySelectorAll(".categoria-card.sr-card");
    const sectionTitle = root.querySelector(".section-title");

    // estado inicial
    if (sectionTitle) {
      sectionTitle.style.opacity = "0";
      sectionTitle.style.transform = "scale(0.97)";
      sectionTitle.style.willChange = "transform, opacity";
    }
    cards.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "scale(0.97)";
      el.style.willChange = "transform, opacity";
    });

    if (reduce) {
      if (sectionTitle) {
        sectionTitle.style.opacity = "1";
        sectionTitle.style.transform = "none";
      }
      cards.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const grid = root.querySelector(".cards-grid");
    if (!grid) return;

    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        requestAnimationFrame(() => {
          // Animação do título
          if (sectionTitle) {
            anime({
              targets: sectionTitle,
              opacity: [0, 1],
              scale: [0.97, 1],
              duration: 500,
              easing: "easeOutCubic",
              complete: () => (sectionTitle.style.willChange = "auto"),
            });
          }

          // Animação dos cards
          anime({
            targets: cards,
            opacity: [0, 1],
            scale: [0.97, 1],
            delay: anime.stagger(
              window.innerWidth < 768 ? 120 : 80 // mobile = mais espaçado
            ),
            duration: 500,
            easing: "easeOutCubic",
            complete: () => {
              cards.forEach((el) => (el.style.willChange = "auto"));
            },
          });
        });

        io.unobserve(grid);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(grid);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cardapio-section">
      <h2 className="section-title">{title}</h2>

      <div className="cards-grid">
        {items.map((item) => (
          <div key={item.id} className="card categoria-card sr-card">
            <div className="card-info">
              <div className="card-media">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="card-img"
                  width="900"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  onLoad={(e) => e.currentTarget.classList.add("is-loaded")}
                />
              </div>

              <h3 className="card-title u-clamp-1">{item.nome}</h3>
              <p className="card-desc u-clamp-2">{item.desc}</p>

              <div className="card-footer">
                <span className="card-price">{item.preco}</span>
                <button
                  className="card-preview card-preview--fluid"
                  aria-label={`Ver imagem ampliada de ${item.nome}`}
                  onClick={() => openModal(item)}
                >
                  <Eye size={18} className="btn-icon" />
                  <span className="btn-text">Ver maior</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              aria-label="Fechar"
              onClick={closeModal}
            >
              <X size={32} />
            </button>

            {/* PRIORIDADE: usa imagem exclusiva do modal, senão cai na do card */}
            <img
              src={selected.modalImg || selected.img}
              alt={selected.nome}
              className="modal-img"
              width="900"
              height="675"
            />

            <div className="modal-overlay">
              <h3 className="modal-title">{selected.nome}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}