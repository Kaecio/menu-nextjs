import { prices } from "../prices/prices";

export const fr = {
  title: "Menu",
  dinner: {
    title: "Dîner",
    entradas: {
      title: "Entrées",
      items: [
        { name: "Couvert Spécial", price: prices.couvertEspecial },
        { name: "Carpaccio", price: prices.carpaccio },
        { name: "Carpaccio de Saumon", price: prices.carpaccioDeSalmao },
      ],
    },
    saladas: {
      title: "Salades",
      items: [
        { name: "Salade César au Poulet", price: prices.cesarSaladComFrango },
        { name: "Salade Caprese", price: prices.capreseSalad },
      ],
    },
    sopas: {
      title: "Soupes",
      items: [
        {
          name: "Minestrone",
          price: prices.minestrone,
          items: ["viande et légumes"],
        },
        { name: "Crème de Palmier", price: prices.cremeDePalmito },
      ],
    },
    pasta: {
      title: "Pâtes",
      items: [
        { name: "Penne", price: prices.penneAlhoEOleo },
        { name: "Penne aux Crevettes", price: prices.penneCamarao },
        { name: "Penne à la Bolognaise", price: prices.penneABolonhesa },
        { name: "Penne au Pomodoro", price: prices.penneAoPomodore },
        { name: "Spaghetti", price: prices.spaguettiAlhoEOleo },
        {
          name: "Spaghetti aux Quatre Fromages",
          price: prices.spaguettiQuatroQueijos,
        },
        { name: "Spaghetti aux Crevettes", price: prices.spaguettiCamarao },
        {
          name: "Spaghetti à la Bolognaise",
          price: prices.spaguettiABolonhesa,
        },
        { name: "Spaghetti au Pomodoro", price: prices.spaguettiAoPomodore },
      ],
    },
    risotto: {
      title: "Risottos",
      items: [
        {
          name: "Risotto aux Champignons",
          price: prices.risotoDeFunghi,
          items: [
            "sauce aux champignons, petits pois, oignon, persil et parmesan",
          ],
        },
        {
          name: "Risotto au Citron Sicilien",
          price: prices.risotoDeLimaoSiciliano,
        },
        { name: "Risotto aux Crevettes", price: prices.risotoDeCamarao },
      ],
    },
    carnesEAves: {
      title: "Viandes et Volailles",
      items: [
        { name: "Filet Mignon Grillé", price: prices.filetMignonGrelhado },
        { name: "Filet Chateaubriand", price: prices.filetChateaubriand },
        { name: "Médaillon de Filet", price: prices.medalhaoDeFilet },
        {
          name: "Strogonoff",
          price: prices.strogonoff,
          items: ["filet mignon, riz blanc et frites"],
        },
        {
          name: "Émincé de Filet",
          price: prices.picadinho,
          items: [
            "filet mignon, sauce madère, riz blanc, banane panée, œuf et maïs",
          ],
        },
        {
          name: "Filet de Poulet Grillé",
          price: prices.filetDeFrangoGrelhado,
        },
      ],
    },
    sanduiches: {
      title: "Sandwichs",
      items: [
        {
          name: "Sandwich au Filet Mignon",
          price: prices.sanduicheFiletMignon,
          items: ["fromage, laitue, tomate et mayonnaise"],
        },
        {
          name: "Bauru",
          price: prices.bauru,
          items: ["jambon, fromage, tomate"],
        },
        { name: "X-Salade", price: prices.xsalada },
      ],
    },
  },
  appetizers: {
    title: "Portions",
    appetizers: {
      title: "Amuse-gueules",
      items: [
        { name: "Filet Mignon Apéritif", price: prices.filetMignonAperitivo },
        {
          name: "Filet Mignon Quatre Fromages",
          price: prices.filetMignonQuatroQueijos,
        },
        { name: "Filet Mignon Catupiry", price: prices.filetMignonCatupiry },
        {
          name: "Filet Mignon à la Moutarde",
          price: prices.filetMignonMostarda,
        },
        { name: "Filet Mignon Sauce Madère", price: prices.filetMignonMadeira },
        {
          name: "Filet Mignon aux Oignons",
          price: prices.filetMignonAcebolado,
        },
        {
          name: "Filet de Poulet Apéritif",
          price: prices.filetFrangoAperitivo,
        },
        {
          name: "Filet de Poulet Quatre Fromages",
          price: prices.filetFrangoQuatroQueijos,
        },
        { name: "Filet de Poulet Catupiry", price: prices.filetFrangoCatupiry },
        {
          name: "Filet de Poulet à la Moutarde",
          price: prices.filetFrangoMostarda,
        },
        {
          name: "Filet de Poulet Sauce Madère",
          price: prices.filetFrangoMadeira,
        },
        {
          name: "Filet de Poulet aux Oignons",
          price: prices.filetFrangoAcebolado,
        },
        { name: "Crevettes Panées", price: prices.camaraoEmpanado },
        { name: "Provolone Pané", price: prices.provoloneEmpanado },
        { name: "Frites", price: prices.batataFrita },
        { name: "Olives", price: prices.azeitonas },
        { name: "Pommes de Terre Rustiques", price: prices.batataRustica },
        { name: "Assiette de Charcuterie", price: prices.tabuaDeFrios },
        { name: "Croquette de Viande", price: prices.croqueteDeCarne },
        { name: "Carré de Tapioca", price: prices.quadradinhoDeTapioca },
        {
          name: "Cacahuètes / Noix / Pistaches",
          price: prices.amendoimCastanhaPistache,
        },
        { name: "Pastels Mixtes", price: prices.pasteisMistos },
        { name: "Pastels à la Viande", price: prices.pasteisCarne },
        { name: "Pastels au Fromage", price: prices.pasteisQueijo },
        { name: "Pastels au Palmier", price: prices.pasteisPalmito },
        { name: "Canapés Mixtes", price: prices.canapesMistos },
        { name: "Canapés au Saumon", price: prices.canapesDeSalmão },
        { name: "Canapés de Carpaccio", price: prices.canapesDeCarpaccio },
      ],
    },
  },
  doMar: {
    title: "Fruits de Mer",
    peixe: {
      title: "Fruits de Mer",
      items: [
        { name: "Crevettes", price: prices.camarao },
        { name: "Crevettes à la Bahianaise", price: prices.camaraoABaiana },
        { name: "Crevettes Catupiry", price: prices.camaraoCatupiry },
        { name: "Crevettes au Champagne", price: prices.camaraoChampagne },
        { name: "Crevettes au Curry", price: prices.camaraoCurry },
        { name: "Saumon Grillé", price: prices.salmaoGrelhado },
      ],
    },
  },

  dessert: {
    title: "Desserts",
    dessert: {
      title: "Desserts",
      items: [
        { name: "Petit Gateau", price: prices.petitGateau },
        { name: "Crème de Papaye", price: prices.cremeDePapaya },
        { name: "Glace au Chocolat", price: prices.sorveteChocolate },
        { name: "Glace à la Crème", price: prices.sorveteCreme },
        { name: "Glace aux Copeaux", price: prices.sorveteFlocos },
        { name: "Banane Flambée", price: prices.bananaFlambada },
      ],
    },
  },

  japonese: {
    title: "Cuisine Japonaise",
    sushis: {
      title: "Sushis et Sashimis",
      items: [
        { name: "Carpaccio de Saumon", price: prices.carpaccioSalmao },
        { name: "Carpaccio de Thon", price: prices.carpaccioAtum },
        {
          name: "Carpaccio de Poisson Blanc",
          price: prices.carpaccioPeixeBranco,
        },
        { name: "Tartare de Saumon", price: prices.tartareSalmao },
        { name: "Tartare de Thon", price: prices.tartareAtum },
        { name: "Tartare du Chef", price: prices.tartareDoChef },
        { name: "Batera Saumon (8 pcs)", price: prices.bateraSalmao },
        { name: "Batera Thon (8 pcs)", price: prices.bateraAtum },
        {
          name: "Sashimi Mixte (12 tranches)",
          price: prices.sashimiMisto12Cortes,
          items: ["thon, saumon et poisson blanc"],
        },
        {
          name: "Sashimi de Thon (4 tranches)",
          price: prices.sashimiAtum4Cortes,
        },
        {
          name: "Sashimi de Saumon (4 tranches)",
          price: prices.sashimiSalmao4Cortes,
        },
        {
          name: "Sashimi de Poisson Blanc (4 tranches)",
          price: prices.sashimiPeixeBranco4Cortes,
        },
        { name: "Temaki Thon", price: prices.temakiAtum },
        { name: "Temaki Saumon", price: prices.temakiSalmao },
        { name: "Temaki du Chef", price: prices.temakiDoChef },
        { name: "Makimono Thon", price: prices.makimonoAtum },
        { name: "Makimono Saumon", price: prices.makimonoSalmao },
        { name: "Makimono Uramaki Thon", price: prices.makimonoUramakiAtum },
        {
          name: "Makimono Uramaki Saumon",
          price: prices.makimonoUramakiSalmao,
        },
        { name: "Hot Roll", price: prices.makimonoHotRoll },
        {
          name: "Combiné",
          price: prices.combinado,
          items: ["8 sashimis, 5 sushis et 3 uramakis"],
        },
        {
          name: "Combiné du Chef",
          price: prices.combinadoDoChef,
          items: ["10 sashimis et 6 sushis"],
        },
        {
          name: "Sushi 1",
          price: prices.sushi1,
          items: ["6 sushis et 3 uramakis"],
        },
        {
          name: "Sushi du Chef",
          price: prices.sushiDoChef,
          items: ["8 sushis"],
        },
      ],
    },
  },
  cigars: {
    title: "Cigares",
    cigars: {
      title: "Cigares",
      items: [
        { name: "Cohiba Robusto", price: prices.cohibaRobusto },
        { name: "Cohiba Siglo I", price: prices.cohibaSigloI },
        { name: "Cohiba Siglo II", price: prices.cohibaSigloII },
        { name: "Montecristo I", price: prices.monteCristoI },
        { name: "Montecristo II", price: prices.monteCristoII },
        { name: "Roméo et Juliette I Wide", price: prices.romeoYJulietaIWide },
        { name: "Roméo et Juliette II ES", price: prices.romeoYJulietaIIEs },
        { name: "Partagas DE", price: prices.partagasDe },
        { name: "Cigare Danilo Gentil", price: prices.charutoDaniloGentil },
        { name: "Cigarettes", price: prices.cigarros },
      ],
    },
  },
  drink: {
    title: "Boissons",
    softDrinks: {
      title: "Boissons Gazeuses",
      items: [
        { name: "Soda", price: 8.0 },
        { name: "Eau", price: 6.0 },
      ],
    },
    juices: {
      title: "Jus Naturels",
      items: [
        { name: "Jus d’Orange", price: 12.0 },
        { name: "Jus d’Ananas", price: 12.0 },
      ],
    },
    alcoholic: {
      title: "Boissons Alcoolisées",
      items: [
        { name: "Bière", price: 15.0 },
        { name: "Caipirinha", price: 22.0 },
        { name: "Vin (verre)", price: 25.0 },
      ],
    },
  },
};
