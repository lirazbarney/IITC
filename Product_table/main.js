//variables definition start here⬇️
//this array have dummy data set up on him
let availableProducts = [
  {
    prodID: makeID(),
    prodName: "milk",
    prodPrice: 2,
  },
  {
    prodID: makeID(),
    prodName: "white bread",
    prodPrice: 5,
  },
  {
    prodID: makeID(),
    prodName: "almond milk",
    prodPrice: 10,
  },
  {
    prodID: makeID(),
    prodName: "full wheat bread",
    prodPrice: 3,
  },
  {
    prodID: makeID(),
    prodName: "soy milk",
    prodPrice: 12,
  },
  {
    prodID: makeID(),
    prodName: "pita bread",
    prodPrice: 19,
  },
  {
    prodID: makeID(),
    prodName: "chicken breast",
    prodPrice: 4,
  },
  {
    prodID: makeID(),
    prodName: "pork chops",
    prodPrice: 7,
  },
  {
    prodID: makeID(),
    prodName: "strawberry flavored soda",
    prodPrice: 100,
  },
  {
    prodID: makeID(),
    prodName: "melon flavored soda",
    prodPrice: 101,
  },
  {
    prodID: makeID(),
    prodName: "apple flavored soda",
    prodPrice: 50,
  },
  {
    prodID: makeID(),
    prodName: "beans",
    prodPrice: 6,
  },
];

let myProducts = [];

//functions start here ⬇️
function makeID() {
  let id = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 5; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return id;
}

function renderAvailableProducts() {
  localStorage.setItem("availableProducts", JSON.stringify(availableProducts));
  const prodList = document.querySelector(`.products-wrapper`);
  prodList.innerHTML = "";
  availableProducts.forEach((product) => {
    const singleProd = document.createElement(`div`);
    singleProd.setAttribute("class", "single-product");
    singleProd.setAttribute("id", `divAVB-${product.prodID}`);
    const prodName = document.createElement("h5");
    prodName.textContent = product.prodName;
    prodName.setAttribute("class", "product-name");
    prodName.setAttribute("id", `hAVB-${product.prodID}`);
    const prodPrice = document.createElement("span");
    prodPrice.textContent = product.prodPrice;
    prodPrice.setAttribute("class", "product-price");
    prodPrice.setAttribute("id", `spnAVB-${product.prodID}`);
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Product";
    addBtn.setAttribute("class", "add-product");
    addBtn.setAttribute("id", `addAVB-${product.prodID}`);
    addBtn.addEventListener("click", function () {
      addProductToMyList(product.prodID);
    });
    singleProd.appendChild(prodName);
    singleProd.appendChild(prodPrice);
    singleProd.appendChild(addBtn);
    prodList.appendChild(singleProd);
  });
}

function renderMyProducts() {
  const myList = document.querySelector(".my-products tbody");
  myList.innerHTML = "";
  //   const myRows = myList.querySelectorAll("tr");
  //   for (let i = myRows.length - 1; i >= 0; i--) {
  //     myList.removeChild(myRows[i]);
  //   }
  myProducts.forEach((product) => {
    const newProduct = document.createElement("tr");
    newProduct.setAttribute("id", `myProdID-${product.prodID}`);
    const prodName = document.createElement("td");
    prodName.textContent = product.prodName;
    const unitPrice = document.createElement("td");
    unitPrice.textContent = product.unitPrice;
    const amount = document.createElement("td");
    amount.textContent = product.amount;
    amount.setAttribute("class", `amntMyProd-${product.prodID}`);
    const totalPrice = document.createElement("td");
    totalPrice.textContent = product.amount * product.unitPrice;
    totalPrice.setAttribute("class", `ttlPMyProd-${product.prodID}`);
    const rmvBtn = document.createElement("td");
    const btn = document.createElement("button");
    btn.textContent = "remove";
    btn.addEventListener("click", function () {
      removeFromMyList(product.prodID);
    });
    rmvBtn.appendChild(btn);
    prodName.textContent = product.prodName;
    newProduct.appendChild(prodName);
    newProduct.appendChild(unitPrice);
    newProduct.appendChild(amount);
    newProduct.appendChild(totalPrice);
    newProduct.appendChild(rmvBtn);
    myList.appendChild(newProduct);
  });
}

function addProductToMyList(prodID) {
  //   console.log("an adding product to my list function will be added later");
  //   const myList = document.querySelector();
  const myProductsIndex = doesContain(myProducts, prodID);
  if (myProductsIndex >= 0) {
    myProducts[myProductsIndex].amount++;
    document.querySelector(`.amntMyProd-${prodID}`).textContent =
      myProducts[myProductsIndex].amount;
    document.querySelector(`.ttlPMyProd-${prodID}`).textContent =
      parseInt(myProducts[myProductsIndex].amount) *
      parseInt(getProductPriceByID(prodID));
  } else {
    const product = getProductByID(prodID);
    myProducts.push({
      prodID: prodID,
      prodName: product.prodName,
      unitPrice: product.prodPrice,
      amount: 1,
    });
    renderMyProducts();
  }
}

function getProductPriceByID(prodID) {
  for (let i = 0; i < availableProducts.length; i++) {
    if (availableProducts[i].prodID === prodID) {
      return availableProducts[i].prodPrice;
    }
  }
}

function getProductByID(prodID) {
  for (let i = 0; i < availableProducts.length; i++) {
    if (availableProducts[i].prodID === prodID) {
      return availableProducts[i];
    }
  }
}

function doesContain(array, prodID) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].prodID === prodID) {
      return i;
    }
  }
  return -1;
}

function removeFromMyList(prodID) {
  console.log(myProducts);
  console.log("a removing product from my list function will be added later");
  console.log(document.querySelector(`.my-products tbody`));
  console.log(`myProdID-${prodID}`);
  console.log(document.getElementById(`myProdID-${prodID}`));
  document
    .querySelector(`.my-products tbody`)
    .removeChild(document.getElementById(`myProdID-${prodID}`));
  // document
  //   .querySelector(`.my-products tbody`)
  //   .removeChild(`myProdID-${prodID}`);
  const myNewProducts = [];
  myProducts.forEach((product) => {
    if (product.prodID !== prodID) {
      myNewProducts.push({
        prodID: product.prodID,
        prodName: product.prodName,
        unitPrice: product.prodPrice,
        amount: product.amount,
      });
    }
  });
  myProducts = myNewProducts;
}

function addNewProduct(ev) {
  ev.preventDefault();
  const prodName = document.querySelector(".new-product-name");
  const prodPrice = document.querySelector(".new-product-price");
  if (prodName.value && prodPrice.value) {
    console.log(availableProducts);
    availableProducts.push({
      prodID: makeID,
      prodName: prodName.value,
      prodPrice: prodPrice.value,
    });
    prodName.value = "";
    prodPrice.value = "";
    console.log(availableProducts);
    insertNewProduct(availableProducts[availableProducts.length - 1]);
    renderAvailableProducts();
  } else {
    alert("something went wrong, please try again");
  }
}

function insertNewProduct(newProduct) {
  localStorage.setItem("availableProducts", JSON.stringify(availableProducts));
  console.log(
    `an "inserting new product to the local storage" will be added soon`
  );
}

function getAvailableProducts() {
  return JSON.parse(localStorage.getItem("availableProducts"))
    ? JSON.parse(localStorage.getItem("availableProducts"))
    : availableProducts;
}

//code start here ⬇️
availableProducts = getAvailableProducts();

document
  .querySelector(".making-new-product")
  .addEventListener("submit", addNewProduct);
renderAvailableProducts();
renderMyProducts();
