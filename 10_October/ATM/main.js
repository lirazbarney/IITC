//variables and constants declarations start here⬇️

const NUMBERS = "0123456789";

let myPINcode;
let myCreditCard;
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
    allCards.push({ cardNumber: key, pinCode: val });
  }
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
      localStorage.setItem(lastCreditCardInpValue, lastPINcodeInpValue);
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
  myPINcode = currentCard.querySelector("span").textContent;
  choosingCreditCard.classList.add("hidden");
  renderForm();
}

function renderForm() {
  counter = 0;
  console.log(`the desired PIN code is ${myPINcode}`);
  elFormPIN.querySelector("span").textContent = myCreditCard;
  //make the form visible, the rest hidden
  makeAllHidden();
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
      newPIN.textContent = allCards[i].pinCode;
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
    makeAllHidden();
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
  makeAllHidden();
  enteringNewCreditCard.classList.remove("hidden");
}

//make all the first-generation children of the body to be hidden
function makeAllHidden() {
  Array.from(document.body.children).forEach(function (el) {
    el.classList.add("hidden");
  });
}

function enteringMyPINcode() {
  if (myPINcode === enteringPINcodeInp.value) {
    console.log("correct PIN code");
  } else {
    counter++;
    enteringPINcodeInp.value = "";
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//code start from here ⬇️

//if you want to clear the local storage, run this commend ⬇
// localStorage.clear();

//which screen to show at the start
if (localStorage.length > 0) {
  enteringNewCreditCard.classList.add("hidden");
  if (localStorage.length === 1) {
    myCreditCard = localStorage.key(0);
    myPINcode = localStorage.getItem(myCreditCard);
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
