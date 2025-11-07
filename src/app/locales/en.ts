import { prices } from "../prices/prices";

export const en = {
  title: "Menu",
  dinner: {
    title: "Dinner",
    entradas: {
      title: "Starters",
      items: [
        { name: "Special Couvert", price: prices.couvertEspecial },
        { name: "Carpaccio", price: prices.carpaccio },
        { name: "Salmon Carpaccio", price: prices.carpaccioDeSalmao },
      ],
    },
    saladas: {
      title: "Salads",
      items: [
        {
          name: "Caesar Salad with Chicken",
          price: prices.cesarSaladComFrango,
        },
        { name: "Caprese Salad", price: prices.capreseSalad },
      ],
    },
    sopas: {
      title: "Soups",
      items: [
        {
          name: "Minestrone",
          price: prices.minestrone,
          items: ["meat and vegetables"],
        },
        { name: "Palm Heart Cream Soup", price: prices.cremeDePalmito },
      ],
    },
    pasta: {
      title: "Pasta",
      items: [
        { name: "Penne Garlic and Oil", price: prices.penneAlhoEOleo },
        { name: "Penne Shrimp", price: prices.penneCamarao },
        { name: "Penne Bolognese", price: prices.penneABolonhesa },
        { name: "Penne Pomodoro", price: prices.penneAoPomodore },
        { name: "Spaghetti Garlic and Oil", price: prices.spaguettiAlhoEOleo },
        {
          name: "Spaghetti Four Cheeses",
          price: prices.spaguettiQuatroQueijos,
        },
        { name: "Spaghetti Shrimp", price: prices.spaguettiCamarao },
        { name: "Spaghetti Bolognese", price: prices.spaguettiABolonhesa },
        { name: "Spaghetti Pomodoro", price: prices.spaguettiAoPomodore },
      ],
    },
    risotto: {
      title: "Risottos",
      items: [
        {
          name: "Funghi Risotto",
          price: prices.risotoDeFunghi,
          items: ["funghi sauce, peas, onion, parsley and parmesan"],
        },
        {
          name: "Sicilian Lemon Risotto",
          price: prices.risotoDeLimaoSiciliano,
        },
        { name: "Shrimp Risotto", price: prices.risotoDeCamarao },
      ],
    },
    carnesEAves: {
      title: "Meat and Poultry",
      items: [
        { name: "Grilled Filet Mignon", price: prices.filetMignonGrelhado },
        { name: "Chateaubriand Steak", price: prices.filetChateaubriand },
        { name: "Filet Medallion", price: prices.medalhaoDeFilet },
        {
          name: "Beef Stroganoff",
          price: prices.strogonoff,
          items: ["filet mignon, white rice and french fries"],
        },
        {
          name: "Brazilian Picadinho",
          price: prices.picadinho,
          items: [
            "filet mignon, madeira sauce, white rice, breaded banana, egg and corn",
          ],
        },
        {
          name: "Grilled Chicken Breast",
          price: prices.filetDeFrangoGrelhado,
        },
      ],
    },
    sanduiches: {
      title: "Sandwiches",
      items: [
        {
          name: "Filet Mignon Sandwich",
          price: prices.sanduicheFiletMignon,
          items: ["cheese, lettuce, tomato and mayonnaise"],
        },
        {
          name: "Bauru",
          price: prices.bauru,
          items: ["ham, cheese, tomato"],
        },
        { name: "X-Salad", price: prices.xsalada },
      ],
    },
  },
  appetizers: {
    title: "Appetizers",
    appetizers: {
      title: "Appetizers",
      items: [
        { name: "Filet Mignon Appetizer", price: prices.filetMignonAperitivo },
        {
          name: "Filet Mignon Four Cheeses",
          price: prices.filetMignonQuatroQueijos,
        },
        { name: "Filet Mignon Catupiry", price: prices.filetMignonCatupiry },
        { name: "Filet Mignon Mustard", price: prices.filetMignonMostarda },
        { name: "Filet Mignon Madeira", price: prices.filetMignonMadeira },
        {
          name: "Filet Mignon with Onions",
          price: prices.filetMignonAcebolado,
        },
        { name: "Chicken Appetizer", price: prices.filetFrangoAperitivo },
        {
          name: "Chicken Four Cheeses",
          price: prices.filetFrangoQuatroQueijos,
        },
        { name: "Chicken Catupiry", price: prices.filetFrangoCatupiry },
        { name: "Chicken Mustard", price: prices.filetFrangoMostarda },
        { name: "Chicken Madeira", price: prices.filetFrangoMadeira },
        { name: "Chicken with Onions", price: prices.filetFrangoAcebolado },
        { name: "Breaded Shrimp", price: prices.camaraoEmpanado },
        { name: "Breaded Provolone", price: prices.provoloneEmpanado },
        { name: "French Fries", price: prices.batataFrita },
        { name: "Olives", price: prices.azeitonas },
        { name: "Rustic Potatoes", price: prices.batataRustica },
        { name: "Cold Cuts Platter", price: prices.tabuaDeFrios },
        { name: "Beef Croquette", price: prices.croqueteDeCarne },
        { name: "Tapioca Cubes", price: prices.quadradinhoDeTapioca },
        {
          name: "Peanuts / Cashews / Pistachios",
          price: prices.amendoimCastanhaPistache,
        },
        { name: "Mixed Pastries", price: prices.pasteisMistos },
        { name: "Meat Pastries", price: prices.pasteisCarne },
        { name: "Cheese Pastries", price: prices.pasteisQueijo },
        { name: "Palm Heart Pastries", price: prices.pasteisPalmito },
        { name: "Mixed Canapés", price: prices.canapesMistos },
        { name: "Salmon Canapés", price: prices.canapesDeSalmão },
        { name: "Carpaccio Canapés", price: prices.canapesDeCarpaccio },
      ],
    },
  },
  doMar: {
    title: "From the Sea",
    peixe: {
      title: "From the Sea",
      items: [
        { name: "Shrimp", price: prices.camarao },
        { name: "Bahian Shrimp", price: prices.camaraoABaiana },
        { name: "Catupiry Shrimp", price: prices.camaraoCatupiry },
        { name: "Champagne Shrimp", price: prices.camaraoChampagne },
        { name: "Curry Shrimp", price: prices.camaraoCurry },
        { name: "Grilled Salmon", price: prices.salmaoGrelhado },
      ],
    },
  },
  dessert: {
    title: "Desserts",
    dessert: {
      title: "Desserts",
      items: [
        { name: "Petit Gateau", price: prices.petitGateau },
        { name: "Papaya Cream", price: prices.cremeDePapaya },
        { name: "Chocolate Ice Cream", price: prices.sorveteChocolate },
        { name: "Vanilla Ice Cream", price: prices.sorveteCreme },
        { name: "Flake Ice Cream", price: prices.sorveteFlocos },
        { name: "Flambéed Banana", price: prices.bananaFlambada },
      ],
    },
  },
  japonese: {
    title: "Japanese Food",
    sushis: {
      title: "Sushi and Sashimi",
      items: [
        { name: "Salmon Carpaccio", price: prices.carpaccioSalmao },
        { name: "Tuna Carpaccio", price: prices.carpaccioAtum },
        { name: "White Fish Carpaccio", price: prices.carpaccioPeixeBranco },
        { name: "Salmon Tartare", price: prices.tartareSalmao },
        { name: "Tuna Tartare", price: prices.tartareAtum },
        { name: "Chef's Tartare", price: prices.tartareDoChef },
        { name: "Salmon Batera (8 pcs)", price: prices.bateraSalmao },
        { name: "Tuna Batera (8 pcs)", price: prices.bateraAtum },
        {
          name: "Mixed Sashimi (12 cuts)",
          price: prices.sashimiMisto12Cortes,
          items: ["tuna, salmon and white fish"],
        },
        { name: "Tuna Sashimi (4 cuts)", price: prices.sashimiAtum4Cortes },
        { name: "Salmon Sashimi (4 cuts)", price: prices.sashimiSalmao4Cortes },
        {
          name: "White Fish Sashimi (4 cuts)",
          price: prices.sashimiPeixeBranco4Cortes,
        },
        { name: "Tuna Temaki", price: prices.temakiAtum },
        { name: "Salmon Temaki", price: prices.temakiSalmao },
        { name: "Chef's Temaki", price: prices.temakiDoChef },
        { name: "Tuna Makimono", price: prices.makimonoAtum },
        { name: "Salmon Makimono", price: prices.makimonoSalmao },
        { name: "Tuna Uramaki", price: prices.makimonoUramakiAtum },
        { name: "Salmon Uramaki", price: prices.makimonoUramakiSalmao },
        { name: "Hot Roll", price: prices.makimonoHotRoll },
        {
          name: "Combination",
          price: prices.combinado,
          items: ["8 sashimis, 5 sushis and 3 uramakis"],
        },
        {
          name: "Chef's Combination",
          price: prices.combinadoDoChef,
          items: ["10 sashimis and 6 sushis"],
        },
        {
          name: "Sushi 1",
          price: prices.sushi1,
          items: ["6 sushis and 3 uramakis"],
        },
        {
          name: "Chef's Sushi",
          price: prices.sushiDoChef,
          items: ["8 sushis"],
        },
      ],
    },
  },
  cigars: {
    title: "Cigars",
    cigars: {
      title: "Cigars",
      items: [
        { name: "Cohiba Robusto", price: prices.cohibaRobusto },
        { name: "Cohiba Siglo I", price: prices.cohibaSigloI },
        { name: "Cohiba Siglo II", price: prices.cohibaSigloII },
        { name: "Monte Cristo I", price: prices.monteCristoI },
        { name: "Monte Cristo II", price: prices.monteCristoII },
        { name: "Romeo y Julieta I Wide", price: prices.romeoYJulietaIWide },
        { name: "Romeo y Julieta II ES", price: prices.romeoYJulietaIIEs },
        { name: "Partagas DE", price: prices.partagasDe },
        { name: "Danilo Gentil Cigar", price: prices.charutoDaniloGentil },
        { name: "Cigarettes", price: prices.cigarros },
      ],
    },
  },
  drink: {
    title: "Drinks",
    softDrinks: {
      title: "Soft Drinks",
      items: [
        { name: "Soda", price: 8.0 },
        { name: "Water", price: 6.0 },
      ],
    },
    juices: {
      title: "Natural Juices",
      items: [
        { name: "Orange Juice", price: 12.0 },
        { name: "Pineapple Juice", price: 12.0 },
      ],
    },
    alcoholic: {
      title: "Alcoholic Beverages",
      items: [
        { name: "Beer", price: 15.0 },
        { name: "Caipirinha", price: 22.0 },
        { name: "Wine (glass)", price: 25.0 },
      ],
    },
  },
};
