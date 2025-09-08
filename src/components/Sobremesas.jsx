import CardapioGrid from "./CardapioGrid";

// Imagens dos cards
import acaiTigelaMobile from "../assets/images/sobremesas/cards/acaiTigela-mobile.webp";
import brigadeiroGourmetMobile from "../assets/images/sobremesas/cards/brigadeiroGourmet-mobile.webp";
import cocadaMobile from "../assets/images/sobremesas/cards/cocada-mobile.webp";
import mousseMaracujaMobile from "../assets/images/sobremesas/cards/mousseMaracuja-mobile.webp";
import pudimMobile from "../assets/images/sobremesas/cards/pudim-mobile.webp";

// Imagens dos modais
import acaiTigelaModalMobile from "../assets/images/sobremesas/modal/acaiTigelaModal-mobile.webp";
import brigadeiroGourmetModalMobile from "../assets/images/sobremesas/modal/brigadeiroGourmetModal-mobile.webp";
import cocadaModalMobile from "../assets/images/sobremesas/modal/cocadaModal-mobile.webp";
import mousseMaracujaModalMobile from "../assets/images/sobremesas/modal/mousseMaracujaModal-mobile.webp";
import pudimModalMobile from "../assets/images/sobremesas/modal/pudimModal-mobile.webp";

export default function Sobremesas() {
  // Lista de itens que vai para o grid
  const items = [
    {
      id: 1,
      img: pudimMobile,
      modalImg: pudimModalMobile,
      nome: "Pudim",
      desc: "Tradicional pudim de leite condensado",
      preco: "R$ 9,90",
    },
    {
      id: 2,
      img: brigadeiroGourmetMobile,
      modalImg: brigadeiroGourmetModalMobile,
      nome: "Brigadeiro Gourmet",
      desc: "Brigadeiro feito com chocolate belga",
      preco: "R$ 4,50 (unidade)",
    },
    {
      id: 3,
      img: acaiTigelaMobile,
      modalImg: acaiTigelaModalMobile,
      nome: "Açaí na Tigela",
      desc: "Com granola crocante e frutas frescas",
      preco: "R$ 15,90",
    },
    {
      id: 4,
      img: cocadaMobile,
      modalImg: cocadaModalMobile,
      nome: "Cocada",
      desc: "Cocada caseira, doce e macia",
      preco: "R$ 6,90",
    },
    {
      id: 5,
      img: mousseMaracujaMobile,
      modalImg: mousseMaracujaModalMobile,
      nome: "Mousse de Maracujá",
      desc: "Leve e cremosa, sabor tropical",
      preco: "R$ 8,90",
    },
  ];

  return <CardapioGrid title="Sobremesas" items={items} />;
}