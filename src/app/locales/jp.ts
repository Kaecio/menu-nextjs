import { prices } from "../prices/prices";

export const jp = {
  title: "カフェメニュー (Cardápio)",
  dinner: {
    title: "ディナー (Jantar)",
    entradas: {
      title: "前菜 (Entradas)",
      items: [
        {
          name: "特製クーヴェルト (Couvert Especial)",
          price: prices.couvertEspecial,
        },
        { name: "カルパッチョ (Carpaccio)", price: prices.carpaccio },
        {
          name: "サーモンカルパッチョ (Carpaccio de Salmão)",
          price: prices.carpaccioDeSalmao,
        },
      ],
    },
    saladas: {
      title: "サラダ (Saladas)",
      items: [
        {
          name: "チキンシーザーサラダ (Cesar Salad com Frango)",
          price: prices.cesarSaladComFrango,
        },
        {
          name: "カプレーゼサラダ (Caprese Salad)",
          price: prices.capreseSalad,
        },
      ],
    },
    sopas: {
      title: "スープ (Sopas)",
      items: [
        { name: "ミネストローネ (Minestrone)", price: prices.minestrone },
        {
          name: "パルミットクリーム (Creme de Palmito)",
          price: prices.cremeDePalmito,
        },
      ],
    },
    pasta: {
      title: "パスタ (Massas)",
      items: [
        {
          name: "ペンネ アーリオ・オーリオ (Penne Alho e Óleo)",
          price: prices.penneAlhoEOleo,
        },
        { name: "エビペンネ (Penne Camarão)", price: prices.penneCamarao },
        {
          name: "ボロネーゼペンネ (Penne à Bolonhesa)",
          price: prices.penneABolonhesa,
        },
        {
          name: "ポモドーロペンネ (Penne ao Pomodore)",
          price: prices.penneAoPomodore,
        },
        {
          name: "スパゲッティ アーリオ・オーリオ (Spaguetti Alho e Óleo)",
          price: prices.spaguettiAlhoEOleo,
        },
        {
          name: "スパゲッティ 4 チーズ (Spaguetti 4 Queijos)",
          price: prices.spaguettiQuatroQueijos,
        },
        {
          name: "エビスパゲッティ (Spaguetti Camarão)",
          price: prices.spaguettiCamarao,
        },
        {
          name: "ボロネーゼスパゲッティ (Spaguetti à Bolonhesa)",
          price: prices.spaguettiABolonhesa,
        },
        {
          name: "ポモドーロスパゲッティ (Spaguetti ao Pomodore)",
          price: prices.spaguettiAoPomodore,
        },
      ],
    },
    risotto: {
      title: "リゾット (Risotos)",
      items: [
        {
          name: "フンギリゾット (Risoto de Funghi)",
          price: prices.risotoDeFunghi,
        },
        {
          name: "レモンリゾット (Risoto de Limão Siciliano)",
          price: prices.risotoDeLimaoSiciliano,
        },
        {
          name: "エビリゾット (Risoto de Camarão)",
          price: prices.risotoDeCamarao,
        },
      ],
    },
    carnesEAves: {
      title: "肉料理と鶏肉 (Carnes e Aves)",
      items: [
        {
          name: "フィレミニョンのグリル (Filé Mignon Grelhado)",
          price: prices.filetMignonGrelhado,
        },
        {
          name: "シャトーブリアン (Filé Chateaubriand)",
          price: prices.filetChateaubriand,
        },
        {
          name: "フィレメダリオン (Medalhão de Filé)",
          price: prices.medalhaoDeFilet,
        },
        { name: "ビーフストロガノフ (Strogonoff)", price: prices.strogonoff },
        { name: "ピカジーニョ (Picadinho)", price: prices.picadinho },
        {
          name: "チキンフィレのグリル (Filé de Frango Grelhado)",
          price: prices.filetDeFrangoGrelhado,
        },
      ],
    },
    sanduiches: {
      title: "サンドイッチ (Sanduíches)",
      items: [
        {
          name: "フィレミニョンサンド (Sanduíche de Filé Mignon)",
          price: prices.sanduicheFiletMignon,
        },
        { name: "バウルー (Bauru)", price: prices.bauru },
        { name: "チーズサラダバーガー (X-Salada)", price: prices.xsalada },
      ],
    },
  },
  appetizers: {
    title: "おつまみ (Porções)",
    appetizers: {
      title: "前菜 (Aperitivos)",
      items: [
        {
          name: "フィレミニョン アペリティーボ (Filé Mignon Aperitivo)",
          price: prices.filetMignonAperitivo,
        },
        {
          name: "フィレミニョン 4 チーズ (Filé Mignon 4 Queijos)",
          price: prices.filetMignonQuatroQueijos,
        },
        {
          name: "フィレミニョン カトゥピリ (Filé Mignon Catupiry)",
          price: prices.filetMignonCatupiry,
        },
        {
          name: "フィレミニョン マスタード (Filé Mignon Mostarda)",
          price: prices.filetMignonMostarda,
        },
        {
          name: "フィレミニョン マデイラ (Filé Mignon Madeira)",
          price: prices.filetMignonMadeira,
        },
        {
          name: "チキンフィレ アペリティーボ (Filé de Frango Aperitivo)",
          price: prices.filetFrangoAperitivo,
        },
        {
          name: "チキンフィレ 4 チーズ (Filé de Frango 4 Queijos)",
          price: prices.filetFrangoQuatroQueijos,
        },
        {
          name: "チキンフィレ カトゥピリ (Filé de Frango Catupiry)",
          price: prices.filetFrangoCatupiry,
        },
        {
          name: "チキンフィレ マスタード (Filé de Frango Mostarda)",
          price: prices.filetFrangoMostarda,
        },
        {
          name: "チキンフィレ マデイラ (Filé de Frango Madeira)",
          price: prices.filetFrangoMadeira,
        },
        {
          name: "エビフライ (Camarão Empanado)",
          price: prices.camaraoEmpanado,
        },
        {
          name: "プロヴォローネフライ (Provolone Empanado)",
          price: prices.provoloneEmpanado,
        },
        { name: "フライドポテト (Batata Frita)", price: prices.batataFrita },
        { name: "オリーブ (Azeitonas)", price: prices.azeitonas },
        {
          name: "ローストポテト (Batata Rústica)",
          price: prices.batataRustica,
        },
        {
          name: "チーズ＆ミートプレート (Tábua de Frios)",
          price: prices.tabuaDeFrios,
        },
        {
          name: "ビーフコロッケ (Croquete de Carne)",
          price: prices.croqueteDeCarne,
        },
        {
          name: "タピオカキューブ (Quadradinho de Tapioca)",
          price: prices.quadradinhoDeTapioca,
        },
        {
          name: "ナッツミックス (Amendoim / Castanha / Pistache)",
          price: prices.amendoimCastanhaPistache,
        },
        {
          name: "ミックスパステル (Pastéis Mistos)",
          price: prices.pasteisMistos,
        },
        {
          name: "ビーフパステル (Pastéis de Carne)",
          price: prices.pasteisCarne,
        },
        {
          name: "チーズパステル (Pastéis de Queijo)",
          price: prices.pasteisQueijo,
        },
        {
          name: "パルミットパステル (Pastéis de Palmito)",
          price: prices.pasteisPalmito,
        },
        {
          name: "ミックスカナッペ (Canapés Mistos)",
          price: prices.canapesMistos,
        },
        {
          name: "サーモンカナッペ (Canapés de Salmão)",
          price: prices.canapesDeSalmão,
        },
        {
          name: "カルパッチョカナッペ (Canapés de Carpaccio)",
          price: prices.canapesDeCarpaccio,
        },
      ],
    },
  },
  doMar: {
    title: "シーフード (Do Mar)",
    peixe: {
      title: "魚料理 (Do Mar)",
      items: [
        { name: "エビ (Camarão)", price: prices.camarao },
        {
          name: "バイア風エビ (Camarão à Baiana)",
          price: prices.camaraoABaiana,
        },
        {
          name: "カトゥピリエビ (Camarão Catupiry)",
          price: prices.camaraoCatupiry,
        },
        {
          name: "シャンパンエビ (Camarão Champagne)",
          price: prices.camaraoChampagne,
        },
        { name: "カレーエビ (Camarão Curry)", price: prices.camaraoCurry },
        {
          name: "サーモングリル (Salmão Grelhado)",
          price: prices.salmaoGrelhado,
        },
      ],
    },
  },
  dessert: {
    title: "デザート (Sobremesas)",
    dessert: {
      title: "デザート (Sobremesas)",
      items: [
        { name: "プチガトー (Petit Gateau)", price: prices.petitGateau },
        {
          name: "パパイヤクリーム (Creme de Papaya)",
          price: prices.cremeDePapaya,
        },
        {
          name: "チョコレートアイス (Sorvete de Chocolate)",
          price: prices.sorveteChocolate,
        },
        { name: "バニラアイス (Sorvete de Creme)", price: prices.sorveteCreme },
        {
          name: "フロークスアイス (Sorvete de Flocos)",
          price: prices.sorveteFlocos,
        },
        {
          name: "バナナフランベ (Banana Flambada)",
          price: prices.bananaFlambada,
        },
      ],
    },
  },
  japonese: {
    title: "和食 (Comida Japonesa)",
    sushis: {
      title: "寿司と刺身 (Sushis e Sashimis)",
      items: [
        {
          name: "サーモンカルパッチョ (Carpaccio de Salmão)",
          price: prices.carpaccioSalmao,
        },
        {
          name: "マグロカルパッチョ (Carpaccio de Atum)",
          price: prices.carpaccioAtum,
        },
        {
          name: "白身魚カルパッチョ (Carpaccio de Peixe Branco)",
          price: prices.carpaccioPeixeBranco,
        },
        {
          name: "サーモンタルタル (Tartare de Salmão)",
          price: prices.tartareSalmao,
        },
        { name: "マグロタルタル (Tartare de Atum)", price: prices.tartareAtum },
        {
          name: "シェフのタルタル (Tartare do Chef)",
          price: prices.tartareDoChef,
        },
        {
          name: "サーモンバテラ (Batera de Salmão)",
          price: prices.bateraSalmao,
        },
        { name: "マグロバテラ (Batera de Atum)", price: prices.bateraAtum },
        {
          name: "刺身ミックス (Sashimi Misto 12 Cortes)",
          price: prices.sashimiMisto12Cortes,
        },
        {
          name: "マグロ刺身 (Sashimi de Atum)",
          price: prices.sashimiAtum4Cortes,
        },
        {
          name: "サーモン刺身 (Sashimi de Salmão)",
          price: prices.sashimiSalmao4Cortes,
        },
        {
          name: "白身魚刺身 (Sashimi de Peixe Branco)",
          price: prices.sashimiPeixeBranco4Cortes,
        },
        { name: "マグロ手巻き (Temaki de Atum)", price: prices.temakiAtum },
        {
          name: "サーモン手巻き (Temaki de Salmão)",
          price: prices.temakiSalmao,
        },
        { name: "シェフ手巻き (Temaki do Chef)", price: prices.temakiDoChef },
        { name: "マグロ巻き (Makimono de Atum)", price: prices.makimonoAtum },
        {
          name: "サーモン巻き (Makimono de Salmão)",
          price: prices.makimonoSalmao,
        },
        {
          name: "マグロ裏巻き (Makimono Uramaki Atum)",
          price: prices.makimonoUramakiAtum,
        },
        {
          name: "サーモン裏巻き (Makimono Uramaki Salmão)",
          price: prices.makimonoUramakiSalmao,
        },
        { name: "ホットロール (Hot Roll)", price: prices.makimonoHotRoll },
        { name: "コンビネーション (Combinado)", price: prices.combinado },
        {
          name: "シェフコンビネーション (Combinado do Chef)",
          price: prices.combinadoDoChef,
        },
        { name: "寿司1 (Sushi 1)", price: prices.sushi1 },
        { name: "シェフ寿司 (Sushi do Chef)", price: prices.sushiDoChef },
      ],
    },
  },
  cigars: {
    title: "葉巻 (Charutos)",
    cigars: {
      title: "葉巻 (Charutos)",
      items: [
        {
          name: "コイーバ ロブスト (Cohiba Robusto)",
          price: prices.cohibaRobusto,
        },
        {
          name: "コイーバ シグロ I (Cohiba Siglo I)",
          price: prices.cohibaSigloI,
        },
        {
          name: "コイーバ シグロ II (Cohiba Siglo II)",
          price: prices.cohibaSigloII,
        },
        {
          name: "モンテクリスト I (Monte Cristo I)",
          price: prices.monteCristoI,
        },
        {
          name: "モンテクリスト II (Monte Cristo II)",
          price: prices.monteCristoII,
        },
        {
          name: "ロメオとジュリエット I ワイド (Romeo y Julieta I Wide)",
          price: prices.romeoYJulietaIWide,
        },
        {
          name: "ロメオとジュリエット II ES (Romeo y Julieta II ES)",
          price: prices.romeoYJulietaIIEs,
        },
        { name: "パルタガス DE (Partagas DE)", price: prices.partagasDe },
        {
          name: "ダニロ・ジェンティリ葉巻 (Charuto Danilo Gentil)",
          price: prices.charutoDaniloGentil,
        },
        { name: "シガレット (Cigarros)", price: prices.cigarros },
      ],
    },
  },
  drink: {
    title: "ドリンク (Drinks)",
    softDrinks: {
      title: "ソフトドリンク (Soft Drinks)",
      items: [
        { name: "ソーダ (Soda)", price: 8.0 },
        { name: "ウォーター (Água)", price: 6.0 },
      ],
    },
    juices: {
      title: "ジュース (Sucos Naturais)",
      items: [
        { name: "オレンジジュース (Suco de Laranja)", price: 12.0 },
        { name: "パイナップルジュース (Suco de Abacaxi)", price: 12.0 },
      ],
    },
    alcoholic: {
      title: "アルコール飲料 (Bebidas Alcoólicas)",
      items: [
        { name: "ビール (Cerveja)", price: 15.0 },
        { name: "カイピリーニャ (Caipirinha)", price: 22.0 },
        { name: "ワイングラス (Vinho (taça))", price: 25.0 },
      ],
    },
  },
};
