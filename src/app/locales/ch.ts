import { image } from "../imgRouter/images";
import { prices } from "../prices/prices";

export const ch = {
  title: "咖啡馆菜单",
  dessert: {
    title: "甜点",
    iceCreams: {
      title: "冰淇淋",
      items: [
        { name: "香草冰淇淋", price: prices.sorveteCreme, image: "" }, // Sorvete de Creme
        { name: "木瓜奶油", price: prices.sorveteCreme, image: "" }, // Creme de Mamão
        { name: "菠萝", price: prices.sorveteCreme, image: "" }, // Abacaxi
      ],
    },
    cakes: {
      title: "蛋糕",
      items: [
        { name: "巧克力蛋糕", price: prices.sorveteCreme, image: "" }, // Bolo de Chocolate
        { name: "芝士蛋糕", price: prices.sorveteCreme, image: "" }, // Cheesecake
      ],
    },
  },
  dinner: {
    title: "晚餐",
    pasta: {
      title: "意大利面",
      items: [
        {
          name: "四种奶酪通心粉",
          price: prices.sorveteCreme,
          image: image.penneQuatroQueijos,
        }, // Penne Quatro Queijos
        {
          name: "番茄通心粉",
          price: prices.sorveteCreme,
          image: image.pennePomodoro,
        }, // Penne Pomodoro
        {
          name: "四种奶酪宽面",
          price: prices.sorveteCreme,
          image: image.fettuccineQuatroQueijos,
        }, // Fettuccine Quatro Queijos
        {
          name: "番茄宽面",
          price: prices.sorveteCreme,
          image: image.fettuccinePomodoro,
        }, // Fettuccine Pomodoro
      ],
    },
    soup: {
      title: "汤",
      items: [
        {
          name: "意大利蔬菜汤",
          price: prices.sorveteCreme,
          image: image.minestrone,
        },
      ], // Minestrone
    },
    risotto: {
      title: "烩饭",
      items: [
        { name: "蘑菇烩饭", price: prices.sorveteCreme, image: image.funghi }, // Funghi
        {
          name: "柠檬烩饭",
          price: prices.sorveteCreme,
          image: image.limaoSiciliano,
        }, // Limão Siciliano
        { name: "虾烩饭", price: prices.sorveteCreme, image: image.camarao }, // Camarão
      ],
    },
    sandwiches: {
      title: "三明治",
      items: [
        { name: "菲力牛排三明治", price: prices.sorveteCreme, image: "" }, // Filé Mignon
        { name: "包鲁三明治", price: prices.sorveteCreme, image: "" }, // Bauru
        { name: "芝士汉堡", price: prices.sorveteCreme, image: "" }, // Cheeseburger
      ],
    },
  },
  drink: {
    title: "饮料",
    softDrinks: {
      title: "汽水",
      items: [
        { name: "汽水", price: prices.sorveteCreme, image: "" }, // Refrigerante
        { name: "矿泉水", price: prices.sorveteCreme, image: "" }, // Água
      ],
    },
    juices: {
      title: "鲜榨果汁",
      items: [
        { name: "橙汁", price: prices.sorveteCreme, image: "" }, // Suco de Laranja
        { name: "菠萝汁", price: prices.sorveteCreme, image: "" }, // Suco de Abacaxi
        { name: "草莓汁", price: prices.sorveteCreme, image: "" }, // Suco de Morango
      ],
    },
    alcoholic: {
      title: "含酒精饮料",
      items: [
        { name: "啤酒", price: prices.sorveteCreme, image: "" }, // Cerveja
        { name: "卡皮林纳", price: prices.sorveteCreme, image: "" }, // Caipirinha
        { name: "葡萄酒（杯）", price: prices.sorveteCreme, image: "" }, // Taça de Vinho
      ],
    },
  },
  japonese: {
    title: "日本菜",
    sushi: {
      title: "寿司",
      items: [
        { name: "三文鱼寿司（2个）", price: prices.sorveteCreme, image: "" }, // Sushi de Salmão
        { name: "金枪鱼寿司（2个）", price: prices.sorveteCreme, image: "" }, // Sushi de Atum
      ],
    },
    sashimi: {
      title: "刺身",
      items: [
        { name: "三文鱼刺身（6片）", price: prices.sorveteCreme, image: "" }, // Sashimi de Salmão
        { name: "金枪鱼刺身（6片）", price: prices.sorveteCreme, image: "" }, // Sashimi de Atum
      ],
    },
    hotDishes: {
      title: "热菜",
      items: [
        { name: "天妇罗", price: prices.sorveteCreme, image: "" }, // Tempurá
        { name: "炒面（焼きそば）", price: prices.sorveteCreme, image: "" }, // Yakisoba
        { name: "饺子（煎饺）", price: prices.sorveteCreme, image: "" }, // Gyoza
      ],
    },
  },
};
