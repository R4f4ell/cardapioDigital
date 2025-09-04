import CardapioGrid from "../CardapioGrid";

// Imports das imagens
import feijoadaCompletaMobile from "../../assets/images/pratos/feijoadaCompleta-mobile.webp";
import moquecaPeixeMobile from "../../assets/images/pratos/moquecaPeixe-mobile.webp";
import churrascoMistoMobile from "../../assets/images/pratos/churrascoMisto-mobile.webp";
import pratoFeitoMobile from "../../assets/images/pratos/pratoFeito-mobile.webp";
import peixeFritoPiraoMobile from "../../assets/images/pratos/peixeFritoPirao-mobile.webp";

export default function Pratos() {
  const items = [
    {
      id: 1,
      img: feijoadaCompletaMobile,
      nome: "Feijoada Completa",
      desc: "Com arroz, couve e carnes selecionadas",
      preco: "R$ 39,90",
    },
    {
      id: 2,
      img: moquecaPeixeMobile,
      nome: "Moqueca de Peixe (baiana)",
      desc: "Peixe fresco com leite de coco e dendê",
      preco: "R$ 44,90",
    },
    {
      id: 3,
      img: churrascoMistoMobile,
      nome: "Churrasco Misto",
      desc: "Picanha, linguiça, frango e acompanhamentos",
      preco: "R$ 49,90",
    },
    {
      id: 4,
      img: pratoFeitoMobile,
      nome: "Prato Feito Clássico",
      desc: "Arroz, feijão, bife, batata frita e salada",
      preco: "R$ 22,90",
    },
    {
      id: 5,
      img: peixeFritoPiraoMobile,
      nome: "Peixe Frito com Pirão",
      desc: "Acompanha arroz branco e pirão de peixe",
      preco: "R$ 34,90",
    },
  ];

  return <CardapioGrid title="Pratos Principais" items={items} />;
}