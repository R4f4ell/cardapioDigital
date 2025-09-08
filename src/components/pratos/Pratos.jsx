import CardapioGrid from "../CardapioGrid";

// Imagens dos cards
import churrascoMistoMobile from "../../assets/images/pratos/cards/churrascoMisto-mobile.webp";
import feijoadaCompletaMobile from "../../assets/images/pratos/cards/feijoadaCompleta-mobile.webp";
import moquecaPeixeMobile from "../../assets/images/pratos/cards/moquecaPeixe-mobile.webp";
import peixeFritoPiraoMobile from "../../assets/images/pratos/cards/peixeFritoPirao-mobile.webp";
import pratoFeitoMobile from "../../assets/images/pratos/cards/pratoFeito-mobile.webp";

// Imagens dos modais

import churrascoMistoModalMobile from "../../assets/images/pratos/modal/churrascoMistoModal-mobile.webp"
import feijoadaCompletaModalMobile from "../../assets/images/pratos/modal/feijoadaCompletaModal-mobile.webp"
import moquecaPeixeModalMobile from "../../assets/images/pratos/modal/moquecaPeixeModal-mobile.webp"
import peixeFritoPiraoModalMobile from "../../assets/images/pratos/modal/peixeFritoPiraoModal-mobile.webp"
import pratoFeitoModalMobile from "../../assets/images/pratos/modal/pratoFeitoModal-mobile.webp"
// Do modal: 1080 X 1920
// Do card 900 X 675

export default function Pratos() {
  const items = [
    {
      id: 1,
      img: feijoadaCompletaMobile,
      modalImg: feijoadaCompletaModalMobile,
      nome: "Feijoada Completa",
      desc: "Com arroz, couve e carnes selecionadas",
      preco: "R$ 39,90",
    },
    {
      id: 2,
      img: moquecaPeixeMobile,
      modalImg: moquecaPeixeModalMobile,
      nome: "Moqueca de Peixe (baiana)",
      desc: "Peixe fresco com leite de coco e dendê",
      preco: "R$ 44,90",
    },
    {
      id: 3,
      img: churrascoMistoMobile,
      modalImg: churrascoMistoModalMobile,
      nome: "Churrasco Misto",
      desc: "Picanha, linguiça, frango e acompanhamentos",
      preco: "R$ 49,90",
    },
    {
      id: 4,
      img: pratoFeitoMobile,
      modalImg: pratoFeitoModalMobile,
      nome: "Prato Feito Clássico",
      desc: "Arroz, feijão, bife, batata frita e salada",
      preco: "R$ 22,90",
    },
    {
      id: 5,
      img: peixeFritoPiraoMobile,
      modalImg: peixeFritoPiraoModalMobile,
      nome: "Peixe Frito com Pirão",
      desc: "Acompanha arroz branco e pirão de peixe",
      preco: "R$ 34,90",
    },
  ];

  return <CardapioGrid title="Pratos Principais" items={items} />;
}