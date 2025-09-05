import CardapioGrid from "../CardapioGrid";

// Imports das imagens
import hamburguerBatataRefriMobile from "../../assets/images/combos/hamburguerBatataRefri-mobile.webp";
import pizzaSucoMobile from "../../assets/images/combos/pizzaSuco-mobile.webp";
import pratoFeitoSucoMobile from "../../assets/images/combos/pratoFeito-e-suco-mobile.webp";

export default function Combos() {
  const items = [
    {
      id: 1,
      img: hamburguerBatataRefriMobile,
      nome: "Combo Sanduíche",
      desc: "Hambúrguer artesanal + batata frita + refrigerante 350ml",
      preco: "R$ 27,90",
    },
    {
      id: 2,
      img: pizzaSucoMobile,
      nome: "Combo Pizza Individual",
      desc: "Pizza brotinho (sabor à escolha) + suco natural",
      preco: "R$ 32,90",
    },
    {
      id: 3,
      img: pratoFeitoSucoMobile,
      nome: "Combo Executivo",
      desc: "Prato feito clássico (arroz, feijão, carne, fritas e salada) + suco",
      preco: "R$ 29,90",
    },
  ];

  return <CardapioGrid title="Combos" items={items} />;
}