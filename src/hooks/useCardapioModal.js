import { useState, useEffect } from "react";

export default function useCardapioModal() {
  const [selected, setSelected] = useState(null);

  // Fecha com ESC
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  // Bloqueia o scroll da página quando o modal está aberto
  useEffect(() => {
    const body = document.body;
    if (selected) {
      // salva posição atual
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.overflow = "hidden";
    } else {
      // restaura o scroll
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [selected]);

  const openModal = (item) => setSelected(item);
  const closeModal = () => setSelected(null);

  return { selected, openModal, closeModal };
}