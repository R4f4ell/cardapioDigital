import CardapioGrid from "../CardapioGrid";

// Imports das imagens
import aguaDeCocoMobile from "../../assets/images/bebidas/cards/aguaDeCoco-mobile.webp";
import cervejasMobile from "../../assets/images/bebidas/cards/cervejas-mobile.webp";
import refrigerantesMobile from "../../assets/images/bebidas/cards/refrigerantes-mobile.webp";
import sucosMobile from "../../assets/images/bebidas/cards/sucos-mobile.webp";

export default function Bebidas() {
  const items = [
    {
      id: 1,
      img: sucosMobile,
      nome: "Sucos Naturais",
      desc: "Sabores variados: laranja, limão, maracujá, acerola...",
      preco: "R$ 7,90 (300ml)",
    },
    {
      id: 2,
      img: refrigerantesMobile,
      nome: "Refrigerantes",
      desc: "Coca-Cola, Guaraná, Sprite e outros",
      preco: "R$ 6,50 (350ml)",
    },
    {
      id: 3,
      img: cervejasMobile,
      nome: "Cervejas",
      desc: "Long necks e garrafas 600ml",
      preco: "a partir de R$ 8,90",
    },
    {
      id: 4,
      img: aguaDeCocoMobile,
      nome: "Água de Coco",
      desc: "Natural, servida gelada",
      preco: "R$ 5,90 (300ml)",
    },
  ];

  return <CardapioGrid title="Bebidas" items={items} />;
}
