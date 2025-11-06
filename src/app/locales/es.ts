import { prices } from "../prices/prices";

export const es = {
  title: "Menú",
  dinner: {
    title: "Cena",
    entradas: {
      title: "Entradas",
      items: [
        { name: "Couvert Especial", price: prices.couvertEspecial },
        { name: "Carpaccio", price: prices.carpaccio },
        { name: "Carpaccio de Salmón", price: prices.carpaccioDeSalmao },
      ],
    },
    saladas: {
      title: "Ensaladas",
      items: [
        { name: "Ensalada César con Pollo", price: prices.cesarSaladComFrango },
        { name: "Ensalada Caprese", price: prices.capreseSalad },
      ],
    },
    sopas: {
      title: "Sopas",
      items: [
        {
          name: "Minestrone",
          price: prices.minestrone,
          items: ["carne y verduras"],
        },
        { name: "Crema de Palmito", price: prices.cremeDePalmito },
      ],
    },
    pasta: {
      title: "Pastas",
      items: [
        { name: "Penne", price: prices.penneAlhoEOleo },
        { name: "Penne con Camarones", price: prices.penneCamarao },
        { name: "Penne a la Boloñesa", price: prices.penneABolonhesa },
        { name: "Penne al Pomodoro", price: prices.penneAoPomodore },
        { name: "Espagueti", price: prices.spaguettiAlhoEOleo },
        {
          name: "Espagueti Cuatro Quesos",
          price: prices.spaguettiQuatroQueijos,
        },
        { name: "Espagueti con Camarones", price: prices.spaguettiCamarao },
        { name: "Espagueti a la Boloñesa", price: prices.spaguettiABolonhesa },
        { name: "Espagueti al Pomodoro", price: prices.spaguettiAoPomodore },
      ],
    },
    risotto: {
      title: "Risottos",
      items: [
        {
          name: "Risotto de Funghi",
          price: prices.risotoDeFunghi,
          items: ["salsa de funghi, guisantes, cebolla, perejil y parmesano"],
        },
        {
          name: "Risotto de Limón Siciliano",
          price: prices.risotoDeLimaoSiciliano,
        },
        { name: "Risotto de Camarones", price: prices.risotoDeCamarao },
      ],
    },
    carnesEAves: {
      title: "Carnes y Aves",
      items: [
        {
          name: "Filete Mignon a la Parrilla",
          price: prices.filetMignonGrelhado,
        },
        { name: "Filete Chateaubriand", price: prices.filetChateaubriand },
        { name: "Medallón de Filete", price: prices.medalhaoDeFilet },
        {
          name: "Strogonoff",
          price: prices.strogonoff,
          items: ["filete mignon, arroz blanco y papas fritas"],
        },
        {
          name: "Picadillo",
          price: prices.picadinho,
          items: [
            "filete mignon, salsa madeira, arroz blanco, plátano empanizado, huevo y maíz",
          ],
        },
        {
          name: "Filete de Pollo a la Parrilla",
          price: prices.filetDeFrangoGrelhado,
        },
      ],
    },
    sanduiches: {
      title: "Sándwiches",
      items: [
        {
          name: "Sándwich de Filete Mignon",
          price: prices.sanduicheFiletMignon,
          items: ["queso, lechuga, tomate y mayonesa"],
        },
        {
          name: "Bauru",
          price: prices.bauru,
          items: ["jamón, queso, tomate"],
        },
        { name: "X-Ensalada", price: prices.xsalada },
      ],
    },
  },
  appetizers: {
    title: "Porciones",
    appetizers: {
      title: "Aperitivos",
      items: [
        { name: "Filete Mignon Aperitivo", price: prices.filetMignonAperitivo },
        {
          name: "Filete Mignon Cuatro Quesos",
          price: prices.filetMignonQuatroQueijos,
        },
        { name: "Filete Mignon Catupiry", price: prices.filetMignonCatupiry },
        { name: "Filete Mignon Mostaza", price: prices.filetMignonMostarda },
        { name: "Filete Mignon Madeira", price: prices.filetMignonMadeira },
        {
          name: "Filete Mignon con Cebolla",
          price: prices.filetMignonAcebolado,
        },
        {
          name: "Filete de Pollo Aperitivo",
          price: prices.filetFrangoAperitivo,
        },
        {
          name: "Filete de Pollo Cuatro Quesos",
          price: prices.filetFrangoQuatroQueijos,
        },
        { name: "Filete de Pollo Catupiry", price: prices.filetFrangoCatupiry },
        { name: "Filete de Pollo Mostaza", price: prices.filetFrangoMostarda },
        { name: "Filete de Pollo Madeira", price: prices.filetFrangoMadeira },
        {
          name: "Filete de Pollo con Cebolla",
          price: prices.filetFrangoAcebolado,
        },
        { name: "Camarones Empanizados", price: prices.camaraoEmpanado },
        { name: "Provolone Empanizado", price: prices.provoloneEmpanado },
        { name: "Papas Fritas", price: prices.batataFrita },
        { name: "Aceitunas", price: prices.azeitonas },
        { name: "Papas Rústicas", price: prices.batataRustica },
        { name: "Tabla de Fiambres", price: prices.tabuaDeFrios },
        { name: "Croqueta de Carne", price: prices.croqueteDeCarne },
        { name: "Cuadradito de Tapioca", price: prices.quadradinhoDeTapioca },
        {
          name: "Maní / Nuez / Pistacho",
          price: prices.amendoimCastanhaPistache,
        },
        { name: "Pasteles Mixtos", price: prices.pasteisMistos },
        { name: "Pasteles de Carne", price: prices.pasteisCarne },
        { name: "Pasteles de Queso", price: prices.pasteisQueijo },
        { name: "Pasteles de Palmito", price: prices.pasteisPalmito },
        { name: "Canapés Mixtos", price: prices.canapesMistos },
        { name: "Canapés de Salmón", price: prices.canapesDeSalmão },
        { name: "Canapés de Carpaccio", price: prices.canapesDeCarpaccio },
      ],
    },
  },
  doMar: {
    title: "Del Mar",
    peixe: {
      title: "Del Mar",
      items: [
        { name: "Camarones", price: prices.camarao },
        { name: "Camarones a la Bahiana", price: prices.camaraoABaiana },
        { name: "Camarones Catupiry", price: prices.camaraoCatupiry },
        { name: "Camarones al Champagne", price: prices.camaraoChampagne },
        { name: "Camarones al Curry", price: prices.camaraoCurry },
        { name: "Salmón a la Parrilla", price: prices.salmaoGrelhado },
      ],
    },
  },

  dessert: {
    title: "Postres",
    dessert: {
      title: "Postres",
      items: [
        { name: "Petit Gateau", price: prices.petitGateau },
        { name: "Crema de Papaya", price: prices.cremeDePapaya },
        { name: "Helado de Chocolate", price: prices.sorveteChocolate },
        { name: "Helado de Crema", price: prices.sorveteCreme },
        { name: "Helado de Copos", price: prices.sorveteFlocos },
        { name: "Banana Flambeada", price: prices.bananaFlambada },
      ],
    },
  },

  japonese: {
    title: "Comida Japonesa",
    sushis: {
      title: "Sushis y Sashimis",
      items: [
        { name: "Carpaccio de Salmón", price: prices.carpaccioSalmao },
        { name: "Carpaccio de Atún", price: prices.carpaccioAtum },
        {
          name: "Carpaccio de Pescado Blanco",
          price: prices.carpaccioPeixeBranco,
        },
        { name: "Tartar de Salmón", price: prices.tartareSalmao },
        { name: "Tartar de Atún", price: prices.tartareAtum },
        { name: "Tartar del Chef", price: prices.tartareDoChef },
        { name: "Batera de Salmón (8 unid.)", price: prices.bateraSalmao },
        { name: "Batera de Atún (8 unid.)", price: prices.bateraAtum },
        {
          name: "Sashimi Mixto (12 cortes)",
          price: prices.sashimiMisto12Cortes,
          items: ["atún, salmón y pescado blanco"],
        },
        {
          name: "Sashimi de Atún (4 cortes)",
          price: prices.sashimiAtum4Cortes,
        },
        {
          name: "Sashimi de Salmón (4 cortes)",
          price: prices.sashimiSalmao4Cortes,
        },
        {
          name: "Sashimi de Pescado Blanco (4 cortes)",
          price: prices.sashimiPeixeBranco4Cortes,
        },
        { name: "Temaki de Atún", price: prices.temakiAtum },
        { name: "Temaki de Salmón", price: prices.temakiSalmao },
        { name: "Temaki del Chef", price: prices.temakiDoChef },
        { name: "Makimono de Atún", price: prices.makimonoAtum },
        { name: "Makimono de Salmón", price: prices.makimonoSalmao },
        { name: "Makimono Uramaki Atún", price: prices.makimonoUramakiAtum },
        {
          name: "Makimono Uramaki Salmón",
          price: prices.makimonoUramakiSalmao,
        },
        { name: "Hot Roll", price: prices.makimonoHotRoll },
        {
          name: "Combinado",
          price: prices.combinado,
          items: ["8 sashimis, 5 sushis y 3 uramakis"],
        },
        {
          name: "Combinado del Chef",
          price: prices.combinadoDoChef,
          items: ["10 sashimis y 6 sushis"],
        },
        {
          name: "Sushi 1",
          price: prices.sushi1,
          items: ["6 sushis y 3 uramakis"],
        },
        {
          name: "Sushi del Chef",
          price: prices.sushiDoChef,
          items: ["8 sushis"],
        },
      ],
    },
    cigars: {
      title: "Puros",
      items: [
        { name: "Cohiba Robusto", price: prices.cohibaRobusto },
        { name: "Cohiba Siglo I", price: prices.cohibaSigloI },
        { name: "Cohiba Siglo II", price: prices.cohibaSigloII },
        { name: "Montecristo I", price: prices.monteCristoI },
        { name: "Montecristo II", price: prices.monteCristoII },
        { name: "Romeo y Julieta I Wide", price: prices.romeoYJulietaIWide },
        { name: "Romeo y Julieta II ES", price: prices.romeoYJulietaIIEs },
        { name: "Partagas DE", price: prices.partagasDe },
        { name: "Puro Danilo Gentil", price: prices.charutoDaniloGentil },
        { name: "Cigarrillos", price: prices.cigarros },
      ],
    },
    drink: {
      title: "Bebidas",
      softDrinks: {
        title: "Refrescos",
        items: [
          { name: "Refresco", price: 8.0 },
          { name: "Agua", price: 6.0 },
        ],
      },
      juices: {
        title: "Jugos Naturales",
        items: [
          { name: "Jugo de Naranja", price: 12.0 },
          { name: "Jugo de Piña", price: 12.0 },
        ],
      },
      alcoholic: {
        title: "Bebidas Alcohólicas",
        items: [
          { name: "Cerveza", price: 15.0 },
          { name: "Caipiriña", price: 22.0 },
          { name: "Vino (copa)", price: 25.0 },
        ],
      },
    },
  },
};
