const prompt = require("prompt-sync")({ sigint: true });
const { products } = require("./products");
console.log(
  "Welcome to Shop 24/7 \nWe have products ranging from Food, fashion, stationaries and electronics\n\n"
);

console.log(
  "Lets make your shopping experience smooth \n press 1 to view all products\n press 2 to view foodstuffs\n press 3 to view stationaries\n press 4 to view fashion items\n press 5 to view electronics"
);
const value = prompt("\n");
// Object.keys(products).forEach((product) => {
//   console.log(product);
// });

// function to show all products
const showAll = () => {
  products.forEach((product) => {
    Object.keys(product).forEach((val) => {
      console.log(val);
    });
  });
};

// function to show all Foodstuffs
const showFoodStuffs = () => {
  Object.keys(products[0]).forEach((product) => {
    console.log(product);
  });
};

// function to show all Stationaries
const showStationaries = () => {
  Object.keys(products[1]).forEach((product) => {
    console.log(product);
  });
};

// function to show all fashion
const showFashion = () => {
  Object.keys(products[2]).forEach((product) => {
    console.log(product);
  });
};

// function to show all electronics
const showElectronics = () => {
  Object.keys(products[3]).forEach((product) => {
    console.log(product);
  });
};

if (Number(value) === 1) {
  showAll();
} else if (Number(value) === 2) {
  showFoodStuffs();
} else if (Number(value) === 3) {
  showStationaries();
} else if (Number(value) === 4) {
  showFashion();
} else if (Number(value) === 5) {
  showElectronics();
}

// console.log(`Hey there ${value}`);

// products.forEach((product) => {
//   Object.keys(product).forEach((val) => {
//     console.log(val);
//   });
// });

const input = prompt("\ntype the product you want to buy: ");
// console.log(products[0][input]);

// cart
const cart = [];

// function to order
const order = (input) => {
  if (products[0][input]) {
    console.log(products[0][input]);
    let buy = prompt("Add to cart (yes/no)");
    if (buy === "yes") {
      cart.push({ [input]: products[0][input] });
      console.log("\nYour Cart :", cart);
    } else {
      console.log("press ctrl C to terminated and rerun");
    }
  } else if (products[1][input]) {
    console.log(products[1][input]);
    let buy = prompt("Add to cart (yes/no)");
    if (buy === "yes") {
      cart.push({ [input]: products[1][input] });
      console.log("\nYour Cart :", cart);
    } else {
      console.log("press ctrl C to terminated and rerun");
    }
  } else if (products[2][input]) {
    console.log(products[2][input]);
    let buy = prompt("Add to cart (yes/no)");
    if (buy === "yes") {
      cart.push({ [input]: products[2][input] });
      console.log("\nYour Cart :", cart);
    } else {
      console.log("press ctrl C to terminated and rerun");
    }
  } else if (products[3][input]) {
    console.log(products[3][input]);
    let buy = prompt("Add to cart (yes/no)");
    if (buy === "yes") {
      cart.push({ [input]: products[3][input] });
      console.log("\nYour Cart :", cart);
    } else {
      console.log("press ctrl C to terminated and rerun");
    }
  } else console.log("Products not found");
};
order(input);

console.log("Thank your for shopping");

// products.forEach((product) => {
//   if (product[0] === select) {
//     console.log(product.select);
//   }
// });

// function to loop back
