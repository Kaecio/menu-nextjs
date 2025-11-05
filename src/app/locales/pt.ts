import { prices } from "../prices/prices";

export const pt = {
  title: "Cardápio",
  dinner: {
    title: "Jantar",
    entradas: {
      title: "Entradas",
      items: [
        { name: "Couvert Especial", price: prices.couvertEspecial },
        { name: "Carpaccio", price: prices.carpaccio },
        { name: "Carpaccio de Salmão", price: prices.carpaccioDeSalmao },
      ],
    },
    saladas: {
      title: "Saladas",
      items: [
        { name: "Cesar Salad com Frango", price: prices.cesarSaladComFrango },
        { name: "Caprese Salad", price: prices.capreseSalad },
        { name: "Minestrone", price: prices.minestrone },
        { name: "Creme de Palmito", price: prices.cremeDePalmito },
      ],
    },
    pasta: {
      title: "Massas",
      items: [
        { name: "Penne", price: prices.penneAlhoEOleo },
        { name: "Penne Camarão", price: prices.penneCamarao },
        { name: "Penne à Bolonhesa", price: prices.penneABolonhesa },
        { name: "Penne ao Pomodore", price: prices.penneAoPomodore },
        { name: "Spaguetti", price: prices.spaguettiAlhoEOleo },
        { name: "Spaguetti 4 Queijos", price: prices.spaguettiQuatroQueijos },
        { name: "Spaguetti Camarão", price: prices.spaguettiCamarao },
        { name: "Spaguetti à Bolonhesa", price: prices.spaguettiABolonhesa },
        { name: "Spaguetti ao Pomodore", price: prices.spaguettiAoPomodore },
      ],
    },
    risotto: {
      title: "Risotos",
      items: [
        { name: "Risoto de Funghi", price: prices.risotoDeFunghi },
        {
          name: "Risoto de Limão Siciliano",
          price: prices.risotoDeLimaoSiciliano,
        },
        { name: "Risoto de Camarão", price: prices.risotoDeCamarao },
      ],
    },
    carnesEAves: {
      title: "Carnes e Aves",
      items: [
        { name: "Filé Mignon Grelhado", price: prices.filetMignonGrelhado },
        { name: "Filé Chateaubriand", price: prices.filetChateaubriand },
        { name: "Medalhão de Filé", price: prices.medalhaoDeFilet },
        { name: "Strogonoff", price: prices.strogonoff },
        { name: "Picadinho", price: prices.picadinho },
        {
          name: "Filé de Frango Grelhado",
          price: prices.filetDeFrangoGrelhado,
        },
      ],
    },
    sanduiches: {
      title: "Sanduiches",
      items: [
        {
          name: "Sanduiche de Filét Mignon",
          price: prices.sanduicheFiletMignon,
        },
        {
          name: "Bauru",
          price: prices.bauru,
        },
        { name: "X-Salada", price: prices.xsalada },
      ],
    },
  },
  porcoes: {
    title: "Porções",
    aperitivos: {
      title: "Aperitivos",
      items: [
        { name: "Filé Mignon Aperitivo", price: prices.filetMignonAperitivo },
        {
          name: "Filé Mignon 4 Queijos",
          price: prices.filetMignonQuatroQueijos,
        },
        { name: "Filé Mignon Catupiry", price: prices.filetMignonCatupiry },
        { name: "Filé Mignon Mostarda", price: prices.filetMignonMostarda },
        { name: "Filé Mignon Madeira", price: prices.filetMignonMadeira },
        { name: "Filé Mignon Acebolado", price: prices.filetMignonAcebolado },
        {
          name: "Filé de Frango Aperitivo",
          price: prices.filetFrangoAperitivo,
        },
        {
          name: "Filé de Frango 4 Queijos",
          price: prices.filetFrangoQuatroQueijos,
        },
        { name: "Filé de Frango Catupiry", price: prices.filetFrangoCatupiry },
        { name: "Filé de Frango Mostarda", price: prices.filetFrangoMostarda },
        { name: "Filé de Frango Madeira", price: prices.filetFrangoMadeira },
        {
          name: "Filé de Frango Acebolado",
          price: prices.filetFrangoAcebolado,
        },
        { name: "Camarão Empanado", price: prices.camaraoEmpanado },
        { name: "Provolone Empanado", price: prices.provoloneEmpanado },
        { name: "Batata Frita", price: prices.batataFrita },
        { name: "Azeitonas", price: prices.azeitonas },
        { name: "Batata Rústica", price: prices.batataRustica },
        { name: "Tábua de Frios", price: prices.tabuaDeFrios },
        { name: "Croquete de Carne", price: prices.croqueteDeCarne },
        { name: "Quadradinho de Tapioca", price: prices.quadradinhoDeTapioca },
        {
          name: "Amendoim / Castanha / Pistache",
          price: prices.amendoimCastanhaPistache,
        },
        { name: "Pastéis Mistos", price: prices.pasteisMistos },
        { name: "Pastéis de Carne", price: prices.pasteisCarne },
        { name: "Pastéis de Queijo", price: prices.pasteisQueijo },
        { name: "Pastéis de Palmito", price: prices.pasteisPalmito },
        { name: "Canapés Mistos", price: prices.canapesMistos },
        { name: "Canapés de Salmão", price: prices.canapesDeSalmão },
        { name: "Canapés de Carpaccio", price: prices.canapesDeCarpaccio },
      ],
    },
  },
  doMar: {
    title: "Do Mar",
    peixe: {
      title: "Do mar",
      items: [
        { name: "Camarão", price: prices.camarao },
        { name: "Camarão à Baiana", price: prices.camaraoABaiana },
        { name: "Camarão Catupiry", price: prices.camaraoCatupiry },
        { name: "Camarão Champagne", price: prices.camaraoChampagne },
        { name: "Camarão Curry", price: prices.camaraoCurry },
        { name: "Salmão Grelhado", price: prices.salmaoGrelhado },
      ],
    },
  },

  dessert: {
    title: "Sobremesas",
    dessert: {
      title: "Sobremesas",
      items: [
        { name: "Petit Gateau", price: prices.petitGateau },
        { name: "Creme de Papaya", price: prices.cremeDePapaya },
        { name: "Sorvete de Chocolate", price: prices.sorveteChocolate },
        { name: "Sorvete de Creme", price: prices.sorveteCreme },
        { name: "Sorvete de Flocos", price: prices.sorveteFlocos },
        { name: "Banana Flambada", price: prices.bananaFlambada },
      ],
    },
  },

  japonese: {
    title: "Comida Japonesa",
    carpaccios: {
      title: "Carpaccios e Tartares",
      items: [
        { name: "Carpaccio de Salmão", price: prices.carpaccioSalmao },
        { name: "Carpaccio de Atum", price: prices.carpaccioAtum },
        {
          name: "Carpaccio de Peixe Branco",
          price: prices.carpaccioPeixeBranco,
        },
        { name: "Tartare de Salmão", price: prices.tartareSalmao },
        { name: "Tartare de Atum", price: prices.tartareAtum },
        { name: "Tartare do Chef", price: prices.tartareDoChef },
      ],
    },
    sushi: {
      title: "Sushis e Combinados",
      items: [
        { name: "Batera de Salmão (8 unid.)", price: prices.bateraSalmao },
        { name: "Batera de Atum (8 unid.)", price: prices.bateraAtum },
        {
          name: "Sashimi Misto (12 cortes)",
          price: prices.sashimiMisto12Cortes,
        },
        {
          name: "Sashimi de Atum (4 cortes)",
          price: prices.sashimiAtum4Cortes,
        },
        {
          name: "Sashimi de Salmão (4 cortes)",
          price: prices.sashimiSalmao4Cortes,
        },
        {
          name: "Sashimi de Peixe Branco (4 cortes)",
          price: prices.sashimiPeixeBranco4Cortes,
        },
        { name: "Temaki de Atum", price: prices.temakiAtum },
        { name: "Temaki de Salmão", price: prices.temakiSalmao },
        { name: "Temaki do Chef", price: prices.temakiDoChef },
        { name: "Makimono de Atum", price: prices.makimonoAtum },
        { name: "Makimono de Salmão", price: prices.makimonoSalmao },
        { name: "Makimono Uramaki Atum", price: prices.makimonoUramakiAtum },
        {
          name: "Makimono Uramaki Salmão",
          price: prices.makimonoUramakiSalmao,
        },
        { name: "Hot Roll", price: prices.makimonoHotRoll },
        { name: "Combinado", price: prices.combinado },
        { name: "Combinado do Chef", price: prices.combinadoDoChef },
        { name: "Sushi 1", price: prices.sushi1 },
        { name: "Sushi do Chef", price: prices.sushiDoChef },
      ],
    },
  },
  charutaria: {
    title: "Charutaria",
    items: [
      { name: "Cohiba Robusto", price: prices.cohibaRobusto },
      { name: "Cohiba Siglo I", price: prices.cohibaSigloI },
      { name: "Cohiba Siglo II", price: prices.cohibaSigloII },
      { name: "Monte Cristo I", price: prices.monteCristoI },
      { name: "Monte Cristo II", price: prices.monteCristoII },
      { name: "Romeo y Julieta I Wide", price: prices.romeoYJulietaIWide },
      { name: "Romeo y Julieta II ES", price: prices.romeoYJulietaIIEs },
      { name: "Partagas DE", price: prices.partagasDe },
      { name: "Charuto Danilo Gentil", price: prices.charutoDaniloGentil },
      { name: "Cigarros", price: prices.cigarros },
    ],
  },
  drink: {
    title: "Boissons",
    softDrinks: {
      title: "Boissons gazeuses",
      items: [
        { name: "Soda", price: 8.0 },
        { name: "Eau", price: 6.0 },
      ],
    },
    juices: {
      title: "Jus naturels",
      items: [
        { name: "Jus d'orange", price: 12.0 },
        { name: "Jus d'ananas", price: 12.0 },
        { name: "Jus de fraise", price: 14.0 },
      ],
    },
    alcoholic: {
      title: "Boissons alcoolisées",
      items: [
        { name: "Bière", price: 15.0 },
        { name: "Caïpirinha", price: 22.0 },
        { name: "Vin (verre)", price: 25.0 },
      ],
    },
  },
};

// export const t = {
//   title: "Cardápio",
//   dessert: {
//     title: "Sobremesas",
//     iceCreams: {
//       title: "Sorvetes",
//       items: [
//         { name: "Sorvete de Creme", price: 20.0 },
//         { name: "Creme de Papaya", price: 22.0 },
//         { name: "Abacaxi", price: 18.0 },
//       ],
//     },
//     cakes: {
//       title: "Bolos",
//       items: [
//         { name: "Bolo de Chocolate", price: 28.0 },
//         { name: "Cheesecake", price: 30.0 },
//       ],
//     },
//   },
//   dinner: {
//     title: "Jantar",
//     pasta: {
//       title: "Massas",
//       items: [
//         { name: "Penne Quatro Queijos", price: 45.0 },
//         { name: "Penne Pomodoro", price: 40.0 },
//         { name: "Fettuccine Quatro Queijos", price: 48.0 },
//         { name: "Fettuccine Pomodoro", price: 42.0 },
//       ],
//     },
//     soup: {
//       title: "Sopas",
//       items: [{ name: "Minestrone", price: 32.0 }],
//     },
//     risotto: {
//       title: "Risottos",
//       items: [
//         { name: "Funghi", price: 55.0 },
//         { name: "Limão Siciliano", price: 58.0 },
//         { name: "Camarão", price: 65.0 },
//       ],
//     },
//     sandwiches: {
//       title: "Sanduíches",
//       items: [
//         { name: "Filé Mignon", price: 48.0 },
//         { name: "Bauru", price: 38.0 },
//         { name: "X-Salada", price: 35.0 },
//       ],
//     },
//   },
//   drink: {
//     title: "Bebidas",
//     softDrinks: {
//       title: "Refrigerantes",
//       items: [
//         { name: "Refrigerante", price: 8.0 },
//         { name: "Água", price: 6.0 },
//       ],
//     },
//     juices: {
//       title: "Sucos Naturais",
//       items: [
//         { name: "Suco de Laranja", price: 12.0 },
//         { name: "Suco de Abacaxi", price: 12.0 },
//         { name: "Suco de Morango", price: 14.0 },
//       ],
//     },
//     alcoholic: {
//       title: "Bebidas Alcoólicas",
//       items: [
//         { name: "Cerveja", price: 15.0 },
//         { name: "Caipirinha", price: 22.0 },
//         { name: "Vinho (taça)", price: 25.0 },
//       ],
//     },
//   },
//   japonese: {
//     title: "Japonês",
//     sushi: {
//       title: "Sushi",
//       items: [
//         { name: "Sushi de Salmão (2 unid.)", price: 18.0 },
//         { name: "Sushi de Atum (2 unid.)", price: 20.0 },
//       ],
//     },
//     sashimi: {
//       title: "Sashimi",
//       items: [
//         { name: "Sashimi de Salmão (6 unid.)", price: 45.0 },
//         { name: "Sashimi de Atum (6 unid.)", price: 50.0 },
//       ],
//     },
//     hotDishes: {
//       title: "Pratos Quentes",
//       items: [
//         { name: "Tempurá", price: 35.0 },
//         { name: "Yakisoba", price: 42.0 },
//         { name: "Guioza", price: 30.0 },
//       ],
//     },
//   },
// };
