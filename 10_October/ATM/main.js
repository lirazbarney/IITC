//variables and constants declarations start here⬇️

const NUMBERS = "0123456789";

let myPINcode;
let myCreditCard;
let myBalance;
let counter = 0;
let lastCreditCardInpValue = "XXXX-XXXX-XXXX-XXXX";
let creditCardDigitsCounter = 0;
let lastPINcodeInpValue = "XXXX";
let pinCodeDigitsCounter = 0;

const enteringNewCreditCard = document.querySelector(".welcome");
const creditCardInp = enteringNewCreditCard.querySelector("#creditCardInp");
const pinCodeInp = enteringNewCreditCard.querySelector("#PINcodeInp");
const finishBtn = enteringNewCreditCard.querySelector("#welcomingBtn");
const choosingCreditCard = document.querySelector(".choosing-credit-card");
const elFormPIN = document.querySelector(".pin-code");
const enteringPINcodeInp = elFormPIN.querySelector("#PINcode");
const mainNav = document.querySelector("nav");
const container = mainNav.querySelector(".blank-container");
const balance = mainNav.querySelector(".balance");
const withdraw = mainNav.querySelector(".withdraw");
const withdrawForm = withdraw.querySelector("form");
const withdrawInp = withdrawForm.querySelector("input");
const deposit = mainNav.querySelector(".deposit");
const depositForm = deposit.querySelector("form");
const depositInp = depositForm.querySelector("input");

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//functions start here⬇️

//handling the credit card input
function creditCardInputHandler(ev) {
  //get the new character that was just entered
  const currentVal = ev.target.value;
  const currentDigit = currentVal[currentVal.length - 1];
  //check if the new entered character is a digit
  //and the limit (16) hasn't been reached yet
  if (NUMBERS.includes(currentDigit) && creditCardDigitsCounter < 16) {
    const newVal = lastCreditCardInpValue.replaceAll("-", "").split("");
    //inserting the new digit
    newVal.shift();
    newVal.push(currentDigit);
    newVal.splice(12, 0, "-");
    newVal.splice(8, 0, "-");
    newVal.splice(4, 0, "-");
    lastCreditCardInpValue = newVal.join("");
    //increase the digits counters
    creditCardDigitsCounter++;
  }
  ev.target.value = lastCreditCardInpValue;
  checkIfDone();
}

//handling the PIN code input
function pinCodeInputHandler(ev) {
  //get the new character that was just entered
  const currentVal = ev.target.value;
  const currentDigit = currentVal[currentVal.length - 1];
  //check if the new entered character is a digit
  //and the limit (4) hasn't been reached yet
  if (NUMBERS.includes(currentDigit) && pinCodeDigitsCounter < 4) {
    const newVal = lastPINcodeInpValue.split("");
    //inserting the new digit
    newVal.shift();
    newVal.push(currentDigit);
    lastPINcodeInpValue = newVal.join("");
    //increase the digits counters
    pinCodeDigitsCounter++;
  }
  ev.target.value = lastPINcodeInpValue;
  checkIfDone();
}

function checkIfDone() {
  if (creditCardDigitsCounter === 16 && pinCodeDigitsCounter === 4) {
    finishBtn.classList.add("done");
  }
}

function getAllCards() {
  const allCards = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const val = localStorage.getItem(key);
    const pin = val.substring(0, 4);
    const balance = val.substring(4);
    allCards.push({ cardNumber: key, pinCode: pin, balance: balance });
  }
  console.log(allCards);
  return allCards;
}

//search if a cardNumber is already inside the list
//true if already exists
//false if doesn't exist
function hasAlreadyCard(cardNumber) {
  const allCards = getAllCards();
  for (let i = 0; i < allCards.length; i++) {
    if (allCards[i].cardNumber === cardNumber) {
      return true;
    }
  }
  return false;
}

//handling the finish button
function finishBtnHandler(ev) {
  if (ev.target.classList.contains("done")) {
    if (!hasAlreadyCard(lastCreditCardInpValue)) {
      localStorage.setItem(
        lastCreditCardInpValue,
        lastPINcodeInpValue + "1000"
      );
      myCreditCard = lastCreditCardInpValue;
      myPINcode = lastPINcodeInpValue;
      renderForm();
    } else {
      alert("credit card already exist, please enter different card");
      renderAddingNewCard();
    }
  } else {
    alert(
      "please fill all 16 digits of the credit card and all 4 digits of the PIN code before continuing. if there is any problem (and i promise you that there are not any problems!), please call imminently the programmer, Liraz Bar-Nir, he will 100% ignore this."
    );
  }
}

function chosenCreditCard(ev) {
  const currentCard = ev.currentTarget;
  myCreditCard = currentCard.querySelector("p").textContent;
  const pinNbalance = currentCard.querySelector("span").textContent;
  myPINcode = pinNbalance.substring(0, 4);
  myBalance = pinNbalance.substring(4);
  choosingCreditCard.classList.add("hidden");
  renderForm();
}

function renderForm() {
  counter = 0;
  console.log(`the desired PIN code is ${myPINcode}`);
  elFormPIN.querySelector("span").textContent = myCreditCard;
  //make the form visible, the rest hidden
  makeAllHidden(document.body);
  elFormPIN.classList.remove("hidden");
}

function renderAllCards() {
  //uploading all cards with their PIN codes
  const allCards = getAllCards();
  if (allCards.length === 0) {
    alert("You have no cards. You are transferred to the adding new card page");
    renderAddingNewCard();
  } else if (allCards.length === 1) {
    myCreditCard = allCards[0].cardNumber;
    myPINcode = allCards[0].pinCode;
    alert(
      "You have only one card. You are transferred to the PIN validation page"
    );
    renderForm();
  } else {
    const cardList = choosingCreditCard.querySelector("ul");
    cardList.innerHTML = "";
    for (let i = 0; i < allCards.length; i++) {
      //create new card element
      const fullNewCard = document.createElement("li");
      const newCard = document.createElement("p");
      newCard.textContent = allCards[i].cardNumber;
      const newPIN = document.createElement("span");
      newPIN.textContent = allCards[i].pinCode + allCards[i].balance;
      newPIN.classList.add("hidden");
      //append the new card
      fullNewCard.appendChild(newCard);
      fullNewCard.appendChild(newPIN);
      cardList.appendChild(fullNewCard);
      fullNewCard.addEventListener("click", function (ev) {
        chosenCreditCard(ev);
      });
    }
    //make the cards list visible, the rest hidden
    makeAllHidden(document.body);
    choosingCreditCard.classList.remove("hidden");
  }
}

function renderAddingNewCard() {
  //resetting the page
  creditCardInp.value = "";
  pinCodeInp.value = "";
  lastCreditCardInpValue = "XXXX-XXXX-XXXX-XXXX";
  creditCardDigitsCounter = 0;
  lastPINcodeInpValue = "XXXX";
  pinCodeDigitsCounter = 0;
  finishBtn.classList.remove("done");
  //make the adding new card page visible, the rest hidden
  makeAllHidden(document.body);
  enteringNewCreditCard.classList.remove("hidden");
}

function renderMainNav() {
  mainNav.querySelector("span").textContent = myCreditCard;
  makeAllHidden(document.body);
  makeAllHidden(container);
  mainNav.classList.remove("hidden");
}

//make all the first-generation children of the body to be hidden
function makeAllHidden(fatherEL) {
  Array.from(fatherEL.children).forEach(function (el) {
    el.classList.add("hidden");
  });
}

//handling the PIN validation
function enteringMyPINcode() {
  const enteredPIN = enteringPINcodeInp.value;
  enteringPINcodeInp.value = "";
  if (myPINcode === enteredPIN) {
    console.log("correct PIN code");
    renderMainNav();
  } else {
    counter++;
    if (counter >= 3) {
      alert("invalid PIN codes, please connect the bank");
      renderAllCards();
    } else {
      alert(
        `wrong PIN code! please try again , you have left ${3 - counter} tries`
      );
    }
  }
}

function showAvailableBalance() {
  balance.querySelector("span").textContent = myBalance;
  makeAllHidden(container);
  balance.classList.remove("hidden");
}

function withdrawMoney() {
  withdrawInp.value = "";
  withdrawInp.setAttribute("max", myBalance);
  makeAllHidden(container);
  withdraw.classList.remove("hidden");
}

function withdrawAction() {
  myBalance -= withdrawInp.value;
  localStorage.setItem(myCreditCard, myPINcode + myBalance);
  renderMainNav();
}

function depositMoney() {
  depositInp.value = "";
  makeAllHidden(container);
  deposit.classList.remove("hidden");
}

function depositAction() {
  console.log(myBalance);
  console.log(depositInp.value);
  myBalance += Number(depositInp.value);
  console.log(myBalance);
  localStorage.setItem(myCreditCard, myPINcode + myBalance);
  renderMainNav();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//code start from here ⬇️

//if you want to clear the local storage, run this commend ⬇
localStorage.clear();

//which screen to show at the start
if (localStorage.length > 0) {
  if (localStorage.length === 1) {
    myCreditCard = localStorage.key(0);
    myPINcode = localStorage.getItem(myCreditCard).substring(0, 4);
    myBalance = localStorage.getItem(myCreditCard).substring(4);
    renderForm();
  } else {
    renderAllCards();
  }
} else {
  enteringNewCreditCard.querySelector("h1").textContent =
    "Welcome! Please insert New Credit Card!";
}

//handling the credit card input

creditCardInp.addEventListener("input", function (ev) {
  creditCardInputHandler(ev);
});

//handling the PIN code input

pinCodeInp.addEventListener("input", function (ev) {
  pinCodeInputHandler(ev);
});

//handling the finish button
finishBtn.addEventListener("click", function (ev) {
  finishBtnHandler(ev);
});

//

elFormPIN.addEventListener("submit", function (ev) {
  ev.preventDefault();
  enteringMyPINcode();
});

withdrawForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  withdrawAction();
});

depositForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  depositAction();
});
