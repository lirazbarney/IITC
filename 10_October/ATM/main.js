const myPINcode = "1234";
let counter = 0;

const elFormPIN = document.querySelector(".pin-code");
const enteringPINcodeInp = elFormPIN.querySelector("#PINcode");
elFormPIN.addEventListener("submit", function (ev) {
  ev.preventDefault();
  if (myPINcode === enteringPINcodeInp.value) {
    console.log("correct PIN code");
  } else {
    counter++;
    if (counter >= 3) {
      alert("invalid PIN codes, please connect the bank");
    } else {
      alert(
        `wrong PIN code! please try again , you have left ${3 - counter} tries`
      );
    }
  }
});
