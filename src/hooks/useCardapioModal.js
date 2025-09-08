import { useState, useEffect } from "react";
import useLockBodyScroll from "./useLockBodyScroll"; // usa o lock centralizado (sem "pulo")

export default function useCardapioModal() {
  const [selected, setSelected] = useState(null);

  // Travar o scroll quando o modal está aberto; ao fechar, restaurar sem animação
  useLockBodyScroll(!!selected, "keep");

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