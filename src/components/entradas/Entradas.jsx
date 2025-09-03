import { useState } from "react";
import "./entradas.scss";
import { Search, X } from "lucide-react";

import entrada1 from "../../assets/images/entradas/teste1.png";
import entrada2 from "../../assets/images/entradas/teste2.png";
import entrada3 from "../../assets/images/entradas/teste3.png";

const Entradas = () => {
  const [selected, setSelected] = useState(null);

  const entradas = [
    { id: 1, img: entrada1, nome: "Bruschetta", desc: "Pão italiano, tomate, azeite e manjericão", preco: "R$ 18,90" },
    { id: 2, img: entrada2, nome: "Tábua de frios", desc: "Queijos selecionados, salames e azeitonas", preco: "R$ 34,90" },
    { id: 3, img: entrada3, nome: "Bolinho de bacalhau", desc: "Crocante por fora e macio por dentro", preco: "R$ 27,90" },
  ];

  return (
    <section className="entradas">
      <h2 className="section-title">Entradas</h2>

      <div className="entradas-grid">
        {entradas.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-info">
              <img src={item.img} alt={item.nome} className="card-img" />
              <h3 className="card-title">{item.nome}</h3>
              <p className="card-desc">{item.desc}</p>
              <div className="card-footer">
                <span className="card-price">{item.preco}</span>
                <button className="card-preview" aria-label={`Ver imagem ampliada de ${item.nome}`} onClick={() => setSelected(item)}>
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Fechar" onClick={() => setSelected(null)}>
              <X size={22} />
            </button>
            <img src={selected.img} alt={selected.nome} className="modal-img" />
            <h3 className="modal-title">{selected.nome}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Entradas;