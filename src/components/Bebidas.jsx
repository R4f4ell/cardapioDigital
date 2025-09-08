import CardapioGrid from "../CardapioGrid";

// Imagens dos cards
import aguaDeCocoMobile from "../../assets/images/bebidas/cards/aguaDeCoco-mobile.webp";
import cervejasMobile from "../../assets/images/bebidas/cards/cervejas-mobile.webp";
import refrigerantesMobile from "../../assets/images/bebidas/cards/refrigerantes-mobile.webp";
import sucosMobile from "../../assets/images/bebidas/cards/sucos-mobile.webp";

// Imagens dos cards
import aguaDeCocoModalMobile from "../../assets/images/bebidas/modal/aguaDeCocoModal-mobile.webp"
import cervejasModalMobile from "../../assets/images/bebidas/modal/cervejasModal-mobile.webp"
import refrigerantesModalMobile from "../../assets/images/bebidas/modal/refrigerantesModal-mobile.webp"
import sucosModalMobile from "../../assets/images/bebidas/modal/sucosModal-mobile.webp"

export default function Bebidas() {
  const items = [
    {
      id: 1,
      img: sucosMobile,
      modalImg: sucosModalMobile,
      nome: "Sucos Naturais",
      desc: "Sabores variados: laranja, limão, maracujá, acerola...",
      preco: "R$ 7,90 (300ml)",
    },
    {
      id: 2,
      img: refrigerantesMobile,
      modalImg: refrigerantesModalMobile,
      nome: "Refrigerantes",
      desc: "Coca-Cola, Guaraná, Sprite e outros",
      preco: "R$ 6,50 (350ml)",
    },
    {
      id: 3,
      img: cervejasMobile,
      modalImg: cervejasModalMobile,
      nome: "Cervejas",
      desc: "Long necks e garrafas 600ml",
      preco: "a partir de R$ 8,90",
    },
    {
      id: 4,
      img: aguaDeCocoMobile,
      modalImg: aguaDeCocoModalMobile,
      nome: "Água de Coco",
      desc: "Natural, servida gelada",
      preco: "R$ 5,90 (300ml)",
    },
  ];

  return <CardapioGrid title="Bebidas" items={items} />;
}
