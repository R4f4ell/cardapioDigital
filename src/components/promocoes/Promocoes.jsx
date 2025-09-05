import CardapioGrid from "../CardapioGrid";

// Imports das imagens
import feijoadaCompletaMobile from "../../assets/images/promocoes/feijoadaCompleta-mobile.webp";
import pudimMobile from "../../assets/images/promocoes/pudim-mobile.webp";
import rodizioPizzaMobile from "../../assets/images/promocoes/rodizioPizza-mobile.webp";

export default function Promocoes() {
  const items = [
    {
      id: 1,
      img: pudimMobile,
      nome: "Sobremesa Grátis",
      desc: "Na compra do Combo Executivo, leve um pudim grátis",
      preco: "Promoção válida no almoço",
    },
    {
      id: 2,
      img: rodizioPizzaMobile,
      nome: "Rodízio de Pizza",
      desc: "À noite, coma pizza à vontade por preço fixo",
      preco: "R$ 49,90 por pessoa",
    },
    {
      id: 3,
      img: feijoadaCompletaMobile,
      nome: "Dia da Feijoada",
      desc: "Todo sábado, feijoada completa com preço especial",
      preco: "R$ 34,90",
    },
  ];

  return <CardapioGrid title="Promoções" items={items} />;
}
