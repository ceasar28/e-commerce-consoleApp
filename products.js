// const foodStuffs = [
//   { name: "rice", price: "300", desc: "white rice" },
//   { name: "beans", price: "200", desc: "Brown beans" },
//   { name: "egg", price: "30", desc: "crate of egg" },
//   { name: "yam", price: "1000", desc: "A tuber of yam" },
// ];

const foodStuffs = {
  rice: { price: "300", desc: "white rice" },
  beans: { price: "200", desc: "Brown beans" },
  egg: { price: "30", desc: "crate of egg" },
  yam: { price: "1000", desc: "A tuber of yam" },
};

const stationaries = {
  pen: { price: "50", desc: "BIC pen" },
  calculator: { price: "2000", desc: "Casio calculator" },
  eraser: { price: "30", desc: "rotrin erasar" },
  pencil: { price: "20", desc: "HB pencil" },
};

const fashion = {
  shirt: { price: "3000", desc: "Gucci shirt" },
  polo: { price: "20000", desc: "nike black polo" },
  jean: { price: "30000", desc: "Tommy Heifilger blue denim" },
  Bikini: { price: "10000", desc: "Victoria secret Bikini" },
};

const electronics = {
  tv: { price: "300000", desc: "wSamsung Oled tv" },
  laptop: { price: "2000000", desc: "HP probook" },
  powerbank: { price: "3000", desc: "Oraimo powerbank" },
  smartwatch: { price: "10000", desc: "Apple smart watch" },
};

exports.products = [foodStuffs, stationaries, fashion, electronics];
// const products = [foodStuffs, stationaries, fashion, electronics];
// products.forEach((product) => {
//   console.log(Object.keys(product));
// }
