import CardapioGrid from "../CardapioGrid";

// Imagens dos cards
import feijoadaCompletaMobile from "../../assets/images/promocoes/cards/feijoadaCompleta-mobile.webp";
import pudimMobile from "../../assets/images/promocoes/cards/pudim-mobile.webp";
import rodizioPizzaMobile from "../../assets/images/promocoes/cards/rodizioPizza-mobile.webp";

// Imagens dos modais
import feijoadaCompletaModalMobile from "../../assets/images/promocoes/modal/feijoadaCompletaModal-mobile.webp"
import pudimModalMobile from "../../assets/images/promocoes/modal/pudimModal-mobile.webp"
import rodizioPizzaModalMobile from "../../assets/images/promocoes/modal/rodizioPizzaModal-mobile.webp"

export default function Promocoes() {
  const items = [
    {
      id: 1,
      img: pudimMobile,
      modalImg: pudimModalMobile,
      nome: "Sobremesa Grátis",
      desc: "Na compra do Combo Executivo, leve um pudim grátis",
      preco: "Promoção válida no almoço",
    },
    {
      id: 2,
      img: rodizioPizzaMobile,
      modalImg: rodizioPizzaModalMobile,
      nome: "Rodízio de Pizza",
      desc: "À noite, coma pizza à vontade por preço fixo",
      preco: "R$ 49,90 por pessoa",
    },
    {
      id: 3,
      img: feijoadaCompletaMobile,
      modalImg: feijoadaCompletaModalMobile,
      nome: "Dia da Feijoada",
      desc: "Todo sábado, feijoada completa com preço especial",
      preco: "R$ 34,90",
    },
  ];

  return <CardapioGrid title="Promoções" items={items} />;
}
