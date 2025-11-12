import { prices } from "../prices/prices";

export const ch = {
  title: "菜单 (Cardápio)",
  dinner: {
    title: "晚餐 (Jantar)",
    entradas: {
      title: "前菜 (Entradas)",
      items: [
        {
          name: "特制餐前小吃 (Couvert Especial)",
          price: prices.couvertEspecial,
        },
        { name: "牛肉薄片 (Carpaccio)", price: prices.carpaccio },
        {
          name: "三文鱼薄片 (Carpaccio de Salmão)",
          price: prices.carpaccioDeSalmao,
        },
      ],
    },
    saladas: {
      title: "沙拉 (Saladas)",
      items: [
        {
          name: "凯撒鸡肉沙拉 (Cesar Salad com Frango)",
          price: prices.cesarSaladComFrango,
        },
        { name: "卡普雷塞沙拉 (Caprese Salad)", price: prices.capreseSalad },
      ],
    },
    sopas: {
      title: "汤类 (Sopas)",
      items: [
        { name: "蔬菜牛肉汤 (Minestrone)", price: prices.minestrone },
        { name: "棕榈奶油汤 (Creme de Palmito)", price: prices.cremeDePalmito },
      ],
    },
    pasta: {
      title: "意大利面 (Massas)",
      items: [
        {
          name: "蒜香通心粉 (Penne Alho e Óleo)",
          price: prices.penneAlhoEOleo,
        },
        { name: "虾仁通心粉 (Penne Camarão)", price: prices.penneCamarao },
        {
          name: "博洛尼亚通心粉 (Penne à Bolonhesa)",
          price: prices.penneABolonhesa,
        },
        {
          name: "番茄通心粉 (Penne ao Pomodoro)",
          price: prices.penneAoPomodore,
        },
        {
          name: "蒜香意大利面 (Spaguetti Alho e Óleo)",
          price: prices.spaguettiAlhoEOleo,
        },
        {
          name: "四种奶酪意面 (Spaguetti 4 Queijos)",
          price: prices.spaguettiQuatroQueijos,
        },
        {
          name: "虾仁意大利面 (Spaguetti Camarão)",
          price: prices.spaguettiCamarao,
        },
        {
          name: "博洛尼亚意面 (Spaguetti à Bolonhesa)",
          price: prices.spaguettiABolonhesa,
        },
        {
          name: "番茄意大利面 (Spaguetti ao Pomodoro)",
          price: prices.spaguettiAoPomodore,
        },
      ],
    },
    risotto: {
      title: "烩饭 (Risotos)",
      items: [
        { name: "蘑菇烩饭 (Risoto de Funghi)", price: prices.risotoDeFunghi },
        {
          name: "西西里柠檬烩饭 (Risoto de Limão Siciliano)",
          price: prices.risotoDeLimaoSiciliano,
        },
        { name: "虾仁烩饭 (Risoto de Camarão)", price: prices.risotoDeCamarao },
      ],
    },
    carnesEAves: {
      title: "肉类与家禽 (Carnes e Aves)",
      items: [
        {
          name: "烤牛菲力 (Filé Mignon Grelhado)",
          price: prices.filetMignonGrelhado,
        },
        {
          name: "夏多布里昂牛排 (Filé Chateaubriand)",
          price: prices.filetChateaubriand,
        },
        { name: "牛排圆片 (Medalhão de Filé)", price: prices.medalhaoDeFilet },
        { name: "斯特罗加诺夫 (Strogonoff)", price: prices.strogonoff },
        { name: "炖牛肉饭 (Picadinho)", price: prices.picadinho },
        {
          name: "烤鸡胸肉 (Filé de Frango Grelhado)",
          price: prices.filetDeFrangoGrelhado,
        },
      ],
    },
  },
  hamburgers: {
    title: "三明治 / 汉堡包 (Sanduíches / Burgers)",
    hamburgers: {
      title: "汉堡包 (Burgers)",
      items: [
        {
          name: "菲力牛排三明治 (Sanduíche de Filé Mignon)",
          price: prices.sanduicheFiletMignon,
          items: [
            "奶酪、生菜、西红柿和蛋黄酱 (queijo, alface, tomate e maionese)",
          ],
        },
        {
          name: "巴乌鲁三明治 (Bauru)",
          price: prices.bauru,
          items: ["火腿、奶酪、西红柿 (presunto, queijo, tomate)"],
        },
      ],
    },
    sandwiches: {
      title: "三明治 (Sanduíches)",
      items: [{ name: "X-沙拉 (X-Salada)", price: prices.xsalada }],
    },
  },

  appetizers: {
    title: "小吃 (Porções)",
    appetizers: {
      title: "开胃菜 (Aperitivos)",
      items: [
        {
          name: "牛肉小吃 (Filé Mignon Aperitivo)",
          price: prices.filetMignonAperitivo,
        },
        {
          name: "四种奶酪牛肉 (Filé Mignon 4 Queijos)",
          price: prices.filetMignonQuatroQueijos,
        },
        {
          name: "卡图皮里牛肉 (Filé Mignon Catupiry)",
          price: prices.filetMignonCatupiry,
        },
        {
          name: "芥末牛肉 (Filé Mignon Mostarda)",
          price: prices.filetMignonMostarda,
        },
        {
          name: "马德拉牛肉 (Filé Mignon Madeira)",
          price: prices.filetMignonMadeira,
        },
        {
          name: "洋葱牛肉 (Filé Mignon Acebolado)",
          price: prices.filetMignonAcebolado,
        },
        {
          name: "鸡肉小吃 (Filé de Frango Aperitivo)",
          price: prices.filetFrangoAperitivo,
        },
        {
          name: "四种奶酪鸡肉 (Filé de Frango 4 Queijos)",
          price: prices.filetFrangoQuatroQueijos,
        },
        {
          name: "卡图皮里鸡肉 (Filé de Frango Catupiry)",
          price: prices.filetFrangoCatupiry,
        },
        {
          name: "芥末鸡肉 (Filé de Frango Mostarda)",
          price: prices.filetFrangoMostarda,
        },
        {
          name: "马德拉鸡肉 (Filé de Frango Madeira)",
          price: prices.filetFrangoMadeira,
        },
        {
          name: "洋葱鸡肉 (Filé de Frango Acebolado)",
          price: prices.filetFrangoAcebolado,
        },
        { name: "炸虾 (Camarão Empanado)", price: prices.camaraoEmpanado },
        {
          name: "炸普罗卧龙奶酪 (Provolone Empanado)",
          price: prices.provoloneEmpanado,
        },
        { name: "炸薯条 (Batata Frita)", price: prices.batataFrita },
        { name: "橄榄 (Azeitonas)", price: prices.azeitonas },
        { name: "乡村薯块 (Batata Rústica)", price: prices.batataRustica },
        { name: "冷盘拼盘 (Tábua de Frios)", price: prices.tabuaDeFrios },
        {
          name: "牛肉可乐饼 (Croquete de Carne)",
          price: prices.croqueteDeCarne,
        },
        {
          name: "木薯方块 (Quadradinho de Tapioca)",
          price: prices.quadradinhoDeTapioca,
        },
        {
          name: "花生/坚果/开心果 (Amendoim / Castanha / Pistache)",
          price: prices.amendoimCastanhaPistache,
        },
        { name: "混合馅饼 (Pastéis Mistos)", price: prices.pasteisMistos },
        { name: "牛肉馅饼 (Pastéis de Carne)", price: prices.pasteisCarne },
        { name: "奶酪馅饼 (Pastéis de Queijo)", price: prices.pasteisQueijo },
        { name: "棕榈馅饼 (Pastéis de Palmito)", price: prices.pasteisPalmito },
        { name: "混合小点 (Canapés Mistos)", price: prices.canapesMistos },
        {
          name: "三文鱼小点 (Canapés de Salmão)",
          price: prices.canapesDeSalmão,
        },
        {
          name: "生牛肉薄片小点 (Canapés de Carpaccio)",
          price: prices.canapesDeCarpaccio,
        },
      ],
    },
  },

  doMar: {
    title: "海鲜 (Do Mar)",
    peixe: {
      title: "海鲜菜肴 (Do Mar)",
      items: [
        { name: "虾 (Camarão)", price: prices.camarao },
        { name: "巴伊亚虾 (Camarão à Baiana)", price: prices.camaraoABaiana },
        {
          name: "卡图皮里虾 (Camarão Catupiry)",
          price: prices.camaraoCatupiry,
        },
        { name: "香槟虾 (Camarão Champagne)", price: prices.camaraoChampagne },
        { name: "咖喱虾 (Camarão Curry)", price: prices.camaraoCurry },
        { name: "烤三文鱼 (Salmão Grelhado)", price: prices.salmaoGrelhado },
      ],
    },
  },

  dessert: {
    title: "甜点 (Sobremesas)",
    dessert: {
      title: "甜点 (Sobremesas)",
      items: [
        { name: "巧克力熔岩蛋糕 (Petit Gateau)", price: prices.petitGateau },
        { name: "木瓜奶油 (Creme de Papaya)", price: prices.cremeDePapaya },
        {
          name: "巧克力冰淇淋 (Sorvete de Chocolate)",
          price: prices.sorveteChocolate,
        },
        { name: "香草冰淇淋 (Sorvete de Creme)", price: prices.sorveteCreme },
        {
          name: "巧克力碎冰淇淋 (Sorvete de Flocos)",
          price: prices.sorveteFlocos,
        },
        { name: "火焰香蕉 (Banana Flambada)", price: prices.bananaFlambada },
      ],
    },
  },

  japonese: {
    title: "日本料理 (Comida Japonesa)",
    sushis: {
      title: "寿司和刺身 (Sushis e Sashimis)",
      items: [
        {
          name: "三文鱼薄片 (Carpaccio de Salmão)",
          price: prices.carpaccioSalmao,
        },
        { name: "金枪鱼薄片 (Carpaccio de Atum)", price: prices.carpaccioAtum },
        {
          name: "白鱼薄片 (Carpaccio de Peixe Branco)",
          price: prices.carpaccioPeixeBranco,
        },
        { name: "三文鱼鞑靼 (Tartare de Salmão)", price: prices.tartareSalmao },
        { name: "金枪鱼鞑靼 (Tartare de Atum)", price: prices.tartareAtum },
        { name: "主厨鞑靼 (Tartare do Chef)", price: prices.tartareDoChef },
        { name: "三文鱼巴特拉 (Batera de Salmão)", price: prices.bateraSalmao },
        { name: "金枪鱼巴特拉 (Batera de Atum)", price: prices.bateraAtum },
        {
          name: "混合刺身 (Sashimi Misto)",
          price: prices.sashimiMisto12Cortes,
        },
        {
          name: "金枪鱼刺身 (Sashimi de Atum)",
          price: prices.sashimiAtum4Cortes,
        },
        {
          name: "三文鱼刺身 (Sashimi de Salmão)",
          price: prices.sashimiSalmao4Cortes,
        },
        {
          name: "白鱼刺身 (Sashimi de Peixe Branco)",
          price: prices.sashimiPeixeBranco4Cortes,
        },
        { name: "金枪鱼手卷 (Temaki de Atum)", price: prices.temakiAtum },
        { name: "三文鱼手卷 (Temaki de Salmão)", price: prices.temakiSalmao },
        { name: "主厨手卷 (Temaki do Chef)", price: prices.temakiDoChef },
        { name: "金枪鱼卷 (Makimono de Atum)", price: prices.makimonoAtum },
        { name: "三文鱼卷 (Makimono de Salmão)", price: prices.makimonoSalmao },
        {
          name: "反卷金枪鱼 (Makimono Uramaki Atum)",
          price: prices.makimonoUramakiAtum,
        },
        {
          name: "反卷三文鱼 (Makimono Uramaki Salmão)",
          price: prices.makimonoUramakiSalmao,
        },
        { name: "炸卷 (Hot Roll)", price: prices.makimonoHotRoll },
        { name: "寿司套餐 (Combinado)", price: prices.combinado },
        {
          name: "主厨寿司套餐 (Combinado do Chef)",
          price: prices.combinadoDoChef,
        },
        { name: "寿司 1 (Sushi 1)", price: prices.sushi1 },
        { name: "主厨寿司 (Sushi do Chef)", price: prices.sushiDoChef },
      ],
    },
  },
  cigars: {
    title: "雪茄 (Charutos)",
    cigars: {
      title: "雪茄 (Charutos)",
      items: [
        { name: "高希霸 罗布图 (Cohiba Robusto)", price: prices.cohibaRobusto },
        { name: "高希霸 世纪 I (Cohiba Siglo I)", price: prices.cohibaSigloI },
        {
          name: "高希霸 世纪 II (Cohiba Siglo II)",
          price: prices.cohibaSigloII,
        },
        { name: "蒙特克里斯托 I (Monte Cristo I)", price: prices.monteCristoI },
        {
          name: "蒙特克里斯托 II (Monte Cristo II)",
          price: prices.monteCristoII,
        },
        {
          name: "罗密欧与朱丽叶 I 宽版 (Romeo y Julieta I Wide)",
          price: prices.romeoYJulietaIWide,
        },
        {
          name: "罗密欧与朱丽叶 II ES (Romeo y Julieta II ES)",
          price: prices.romeoYJulietaIIEs,
        },
        { name: "帕塔加斯 DE (Partagas DE)", price: prices.partagasDe },
        {
          name: "丹尼洛·金提尔雪茄 (Charuto Danilo Gentil)",
          price: prices.charutoDaniloGentil,
        },
        { name: "香烟 (Cigarros)", price: prices.cigarros },
      ],
    },
  },

  drink: {
    title: "饮品 (Drinks)",
    softDrinks: {
      title: "软饮料 (Soft Drinks)",
      items: [
        { name: "苏打水 (Soda)", price: 8.0 },
        { name: "矿泉水 (Água)", price: 6.0 },
      ],
    },
    juices: {
      title: "天然果汁 (Sucos Naturais)",
      items: [
        { name: "橙汁 (Suco de Laranja)", price: 12.0 },
        { name: "菠萝汁 (Suco de Abacaxi)", price: 12.0 },
      ],
    },
    alcoholic: {
      title: "含酒精饮品 (Bebidas Alcoólicas)",
      items: [
        { name: "啤酒 (Cerveja)", price: 15.0 },
        { name: "卡皮林纳 (Caipirinha)", price: 22.0 },
        { name: "红酒（杯）(Vinho (taça))", price: 25.0 },
      ],
    },
  },
};
