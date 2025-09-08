import CardapioGrid from "./CardapioGrid";

// Imagens para os cards
import hamburguerBatataRefriMobile from "../assets/images/combos/cards/hamburguerBatataRefri-mobile.webp";
import pizzaSucoMobile from "../assets/images/combos/cards/pizzaSuco-mobile.webp";
import pratoFeitoSucoMobile from "../assets/images/combos/cards/pratoFeito-e-suco-mobile.webp";

// Imagens para os modais 
import hamburguerBatataRefriModalMobile from "../assets/images/combos/modal/hamburguerBatataRefriModal-mobile.webp";
import pizzaSucoModalMobile from "../assets/images/combos/modal/pizzaSucoModal-mobile.webp";
import pratoFeitoSucoModalMobile from "../assets/images/combos/modal/pratoFeito-e-sucoModal-mobile.webp";

export default function Combos() {
  // Lista de itens que vai para o grid
  const items = [
    {
      id: 1,
      img: hamburguerBatataRefriMobile,
      modalImg: hamburguerBatataRefriModalMobile,
      nome: "Combo Sanduíche",
      desc: "Hambúrguer artesanal + batata frita + refrigerante 350ml",
      preco: "R$ 27,90",
    },
    {
      id: 2,
      img: pizzaSucoMobile,
      modalImg: pizzaSucoModalMobile,
      nome: "Combo Pizza Individual",
      desc: "Pizza brotinho (sabor à escolha) + suco natural",
      preco: "R$ 32,90",
    },
    {
      id: 3,
      img: pratoFeitoSucoMobile,
      modalImg: pratoFeitoSucoModalMobile,
      nome: "Combo Executivo",
      desc: "Prato feito clássico (arroz, feijão, carne, fritas e salada) + suco",
      preco: "R$ 29,90",
    },
  ];

  return <CardapioGrid title="Combos" items={items} />;
}