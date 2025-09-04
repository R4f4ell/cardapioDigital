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

  const openModal = (item) => setSelected(item);
  const closeModal = () => setSelected(null);

  return { selected, openModal, closeModal };
}