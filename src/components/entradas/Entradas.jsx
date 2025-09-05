import CardapioGrid from "../CardapioGrid";

import paoDeAlhoMobile from "../../assets/images/entradas/cards/paoDeAlho-mobile.webp";
import bolinhoBacalhauMobile from "../../assets/images/entradas/cards/bolinhoBacalhau-mobile.webp";
import calabresaAceboladaMobile from "../../assets/images/entradas/cards/calabresaAceboladaNaChapa-mobile.webp";
import coxinhaFrangoCatupiryMobile from "../../assets/images/entradas/cards/coxinhaFrangoComCatupiry-mobile.webp";

export default function Entradas() {
  const items = [
    {
      id: 1,
      img: paoDeAlhoMobile,
      nome: "Pão de Alho",
      desc: "Clássico do churrasco, crocante e saboroso",
      preco: "R$ 12,90",
    },
    {
      id: 2,
      img: bolinhoBacalhauMobile,
      nome: "Bolinho de Bacalhau",
      desc: "Crocante por fora e macio por dentro",
      preco: "R$ 27,90",
    },
    {
      id: 3,
      img: calabresaAceboladaMobile,
      nome: "Calabresa acebolada na chapa",
      desc: "Linguiça calabresa fatiada com cebola dourada",
      preco: "R$ 24,90",
    },
    {
      id: 4,
      img: coxinhaFrangoCatupiryMobile,
      nome: "Coxinha de frango com catupiry",
      desc: "Tradicional, recheada com frango e catupiry cremoso",
      preco: "R$ 8,90",
    },
  ];

  return <CardapioGrid title="Entradas" items={items} />;
}