import CardapioGrid from "../CardapioGrid";

// Imports das imagens
import pudimMobile from "../../assets/images/sobremesas/pudim-mobile.webp";
import brigadeiroGourmetMobile from "../../assets/images/sobremesas/brigadeiroGourmet-mobile.webp";
import acaiTigelaMobile from "../../assets/images/sobremesas/acaiTigela-mobile.webp";
import cocadaMobile from "../../assets/images/sobremesas/cocada-mobile.webp";
import mousseMaracujaMobile from "../../assets/images/sobremesas/mousseMaracuja-mobile.webp";

export default function Sobremesas() {
  const items = [
    {
      id: 1,
      img: pudimMobile,
      nome: "Pudim",
      desc: "Tradicional pudim de leite condensado",
      preco: "R$ 9,90",
    },
    {
      id: 2,
      img: brigadeiroGourmetMobile,
      nome: "Brigadeiro Gourmet",
      desc: "Brigadeiro feito com chocolate belga",
      preco: "R$ 4,50 (unidade)",
    },
    {
      id: 3,
      img: acaiTigelaMobile,
      nome: "Açaí na Tigela",
      desc: "Com granola crocante e frutas frescas",
      preco: "R$ 15,90",
    },
    {
      id: 4,
      img: cocadaMobile,
      nome: "Cocada",
      desc: "Cocada caseira, doce e macia",
      preco: "R$ 6,90",
    },
    {
      id: 5,
      img: mousseMaracujaMobile,
      nome: "Mousse de Maracujá",
      desc: "Leve e cremosa, sabor tropical",
      preco: "R$ 8,90",
    },
  ];

  return <CardapioGrid title="Sobremesas" items={items} />;
}
