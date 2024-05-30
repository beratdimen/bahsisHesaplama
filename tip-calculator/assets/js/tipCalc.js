let selectTip = document.querySelector(".tip");
let btns = document.querySelectorAll(".selectTip button");
let numberOfPeople = document.querySelector(".peoples");
let peopleOfTip = document.querySelector(".peopleOfTip");
let totalTip = document.querySelector(".totalTip");
let custom = document.querySelector(".custom");
let customer = document.querySelector(".customer");
let reset = document.querySelector(".res");
let hata = document.querySelector(".hata");
let uyari = document.querySelector(".uyari");

let tip = 0;
let fullTip = 0;
let peopleTip = 0;
let sonuc = 0;

function handleTipClick() {
  tip += this.innerText;
  fullTip = (selectTip.value * tip) / 100;
  sonuc = Number(selectTip.value) + fullTip;
  totalTip.innerText = "$" + sonuc.toFixed(2);
  peopleTip = fullTip / numberOfPeople.value;
  peopleOfTip.innerText = "$" + peopleTip.toFixed(2);

  if (selectTip.value == "" || selectTip.value == null || selectTip.value == 0) {
    selectTip.style.border = "2px solid red";
    hata.innerText = "0 olamaz";
  } else {
    selectTip.style.border = "transparent";
    hata.innerText = "";
  }

  if (
    numberOfPeople.value == "" ||
    numberOfPeople.value == null ||
    numberOfPeople.value == 0
  ) {
    numberOfPeople.style.border = "2px solid red";
    uyari.innerText = "0 olamaz";
  } else {
    numberOfPeople.style.border = "transparent";
    uyari.innerText = "";
  }

  return (tip = 0);
}

let cus = 0;
function handleCusClick(e) {
  e.preventDefault();
  cus += this.innerText;
  fullTip = (selectTip.value * custom.value) / 100;
  sonuc = Number(selectTip.value) + fullTip;
  totalTip.innerText = "$" + sonuc.toFixed(2);
  peopleTip = fullTip / numberOfPeople.value;
  peopleOfTip.innerText = "$" + peopleTip.toFixed(2);

  if (custom.value == "" || custom.value == null) {
    custom.style.border = "2px solid red";
  } else {
    custom.style.border = "transparent";
    hata.innerText = "";
  }

  return (cus = 0);
}

function handleResClick() {
  peopleOfTip.innerText = "$0";
  totalTip.innerText = "$0";
  selectTip.value = "";
  numberOfPeople.value = "";
  custom.value = "";
}

reset.addEventListener("click", handleResClick);

customer.addEventListener("submit", handleCusClick);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleTipClick);
}
