import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [

{
    "name": "Nas – Illmatic",
    "description": "El debut legendario de Nas, con rimas afiladas y beats crudos que definieron el rap de los 90. Un clásico absoluto.",
    "price": 35,
    "stock": 15,
    "image": "https://ik.imagekit.io/oqtavryhy/NAS.webp?updatedAt=1751737392152",
    "categoryId": 1
  },
  {
    "name": "Kendrick Lamar – To Pimp a Butterfly",
    "description": "Un viaje musical revolucionario que fusiona jazz, funk y rap, con letras profundas y políticas.",
    "price": 40,
    "stock": 10,
    "image": "https://ik.imagekit.io/oqtavryhy/kendrick.webp?updatedAt=1751737324917",
    "categoryId": 1
  },
  {
    "name": "Bob Marley – Legend",
    "description": "La antología definitiva del ícono del reggae. Paz, amor y resistencia en cada surco.",
    "price": 45,
    "stock": 12,
    "image": "https://ik.imagekit.io/oqtavryhy/leyend.webp?updatedAt=1751737169068",
    "categoryId": 3
  },
  {
    "name": "The Notorious B.I.G. – Ready to Die",
    "description": "Un retrato crudo y honesto de la vida en Brooklyn, con beats icónicos y flow legendario.",
    "price": 38,
    "stock": 8,
    "image": "https://ik.imagekit.io/oqtavryhy/biggie.webp?updatedAt=1751737131881",
    "categoryId": 1
  },
  {
    "name": "Pink Floyd – The Dark Side of the Moon",
    "description": "Un viaje psicodélico e introspectivo por los rincones de la mente. Rock progresivo en su máxima expresión.",
    "price": 50,
    "stock": 6,
    "image": "https://ik.imagekit.io/oqtavryhy/pinkfloid.jpg?updatedAt=1751737863906",
    "categoryId": 2
  },
  {
    "name": "Tupac – All Eyez On Me",
    "description": "Un álbum doble cargado de energía, mensajes sociales y estilo inconfundible. 2Pac en su mejor momento.",
    "price": 42,
    "stock": 9,
    "image": "https://ik.imagekit.io/oqtavryhy/pac.webp?updatedAt=1751737099973",
    "categoryId": 1
  },
  {
    "name": "The Wailers – Catch a Fire",
    "description": "El álbum que llevó el reggae al mundo. Bob Marley y su banda rompen fronteras.",
    "price": 36,
    "stock": 7,
    "image": "https://ik.imagekit.io/oqtavryhy/Catchafire.webp?updatedAt=1751737206804",
    "categoryId": 3
  },
  {
    "name": "Led Zeppelin IV",
    "description": "Rock puro y místico. Desde “Black Dog” hasta “Stairway to Heaven”, una obra inmortal.",
    "price": 48,
    "stock": 11,
    "image": "https://ik.imagekit.io/oqtavryhy/zappelin.webp?updatedAt=1751737362689",
    "categoryId": 2
  },
  {
    "name": "Damian Marley – Welcome to Jamrock",
    "description": "Un reggae moderno con letras punzantes y producción impecable. Hijo de leyenda, voz propia.",
    "price": 39,
    "stock": 13,
    "image": "https://ik.imagekit.io/oqtavryhy/juniorgong.jpg?updatedAt=1751737292119",
    "categoryId": 3
  },
  {
    "name": "Outkast – Stankonia",
    "description": "Creatividad desbordante y estilo único. Outkast redefiniendo el sonido del sur.",
    "price": 37,
    "stock": 10,
    "image": "https://ik.imagekit.io/oqtavryhy/outkast.webp?updatedAt=1751737506938",
    "categoryId": 1
  },
  {
    "name": "The Rolling Stones – Let It Bleed",
    "description": "Un clásico del rock con actitud cruda, blues, y energía rebelde.",
    "price": 44,
    "stock": 5,
    "image": "https://ik.imagekit.io/oqtavryhy/stones.jpg?updatedAt=1751737897149",
    "categoryId": 2
  },
  {
    "name": "Peter Tosh – Legalize It",
    "description": "Reggae combativo, lírica poderosa y sonido inmortal. Peter Tosh en estado puro.",
    "price": 41,
    "stock": 6,
    "image": "https://ik.imagekit.io/oqtavryhy/petertosh.webp?updatedAt=1751737833002",
    "categoryId": 3
  },
  {
    "name": "Eminem – The Marshall Mathers LP",
    "description": "Una descarga lírica brutal, emocional y polémica. Eminem en su máximo pico creativo.",
    "price": 43,
    "stock": 8,
    "image": "https://ik.imagekit.io/oqtavryhy/eminem.jpg?updatedAt=1751737240164",
    "categoryId": 1
  },
  {
    "name": "Nirvana – Nevermind",
    "description": "Rock sucio, emocional y revolucionario. Un símbolo de los 90 que rompió esquemas.",
    "price": 47,
    "stock": 14,
    "image": "https://ik.imagekit.io/oqtavryhy/nirvana.webp?updatedAt=1751737456207",
    "categoryId": 2
  },
  {
    "name": "Steel Pulse – Handsworth Revolution",
    "description": "Reggae consciente, rítmico y comprometido. Himnos que resisten al tiempo.",
    "price": 40,
    "stock": 10,
    "image": "https://ik.imagekit.io/oqtavryhy/steel.jpg?updatedAt=1751737920512",
    "categoryId": 3
  },

];

const productsToPreLoad1: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
