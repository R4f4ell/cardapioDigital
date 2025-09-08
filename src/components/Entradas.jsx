import CardapioGrid from "./CardapioGrid";

// Imagens para os cards
import bolinhoBacalhauMobile from "../assets/images/entradas/cards/bolinhoBacalhau-mobile.webp";
import calabresaAceboladaMobile from "../assets/images/entradas/cards/calabresaAcebolada-mobile.webp";
import coxinhaFrangoCatupiryMobile from "../assets/images/entradas/cards/coxinhaFrangoComCatupiry-mobile.webp";
import paoDeAlhoMobile from "../assets/images/entradas/cards/paoDeAlho-mobile.webp";

// Imagens para os modais 
import bolinhoBacalhauModalMobile from "../assets/images/entradas/modal/bolinhoBacalhauModal-mobile.webp";
import calabresaAceboladaModalMobile from "../assets/images/entradas/modal/calabresaAceboladaModal-mobile.webp";
import coxinhaFrangoComCatupiryModalMobile from "../assets/images/entradas/modal/coxinhaFrangoComCatupiryModal-mobile.webp";
import paoDeAlhoModalMobile from "../assets/images/entradas/modal/paoDeAlhoModal-mobile.webp";

export default function Entradas() {
  // Lista de itens que vai para o grid
  const items = [
    {
      id: 1,
      img: paoDeAlhoMobile,
      modalImg: paoDeAlhoModalMobile,
      nome: "Pão de Alho",
      desc: "Clássico do churrasco, crocante e saboroso",
      preco: "R$ 12,90",
    },
    {
      id: 2,
      img: bolinhoBacalhauMobile,
      modalImg: bolinhoBacalhauModalMobile,
      nome: "Bolinho de Bacalhau",
      desc: "Crocante por fora e macio por dentro",
      preco: "R$ 27,90",
    },
    {
      id: 3,
      img: calabresaAceboladaMobile,
      modalImg: calabresaAceboladaModalMobile,
      nome: "Calabresa acebolada na chapa",
      desc: "Linguiça calabresa fatiada com cebola dourada",
      preco: "R$ 24,90",
    },
    {
      id: 4,
      img: coxinhaFrangoCatupiryMobile,
      modalImg: coxinhaFrangoComCatupiryModalMobile,
      nome: "Coxinha de frango com catupiry",
      desc: "Tradicional, recheada com frango e catupiry cremoso",
      preco: "R$ 8,90",
    },
  ];

  return <CardapioGrid title="Entradas" items={items} />;
}