import { Eye, X } from "lucide-react";
import useScrollRevealCategorias from "../hooks/useScrollRevealCategorias";
import useCardapioModal from "../hooks/useCardapioModal";
import "./cardapioGrid.scss";

export default function CardapioGrid({ title, items }) {
  const { selected, openModal, closeModal } = useCardapioModal();

  // ScrollReveal nos cards
  useScrollRevealCategorias(".categoria-card.sr-card");

  return (
    <section className="cardapio-section">
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
        <div className="modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Fechar" onClick={closeModal}>
              <X size={32} />
            </button>
            <img
              src={selected.img}
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