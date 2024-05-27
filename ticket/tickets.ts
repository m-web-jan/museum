import "./style.scss";
import { arrLang } from "../langData";

document.body.onload = () => {
  const cardForm = document.getElementById("cardForm") as HTMLFormElement;
  const cardHolderInput = document.getElementById(
    "cardHolder"
  ) as HTMLInputElement;
  const cardNumberInput = document.getElementById(
    "cardNumber"
  ) as HTMLInputElement;
  const cardExpiryInput = document.getElementById(
    "cardExpiry"
  ) as HTMLInputElement;
  const cardCVVInput = document.getElementById("cardCVV") as HTMLInputElement;

  const cardHolderDisplay = document.getElementById(
    "cardHolderDisplay"
  ) as HTMLElement;
  const cardNumberDisplay = document.getElementById(
    "cardNumberDisplay"
  ) as HTMLElement;
  const cardExpiryDisplay = document.getElementById(
    "cardExpiryDisplay"
  ) as HTMLElement;
  const cardLogo = document.getElementById("cardLogo") as HTMLImageElement;

  cardHolderInput.addEventListener("input", () => {
    cardHolderInput.value = cardHolderInput.value
      .replace(/[^a-zA-Z\s]/g, "")
      .replace(/\s{2,}/g, " ");
    cardHolderDisplay.textContent = cardHolderInput.value.toUpperCase();
  });

  cardNumberInput.addEventListener("input", () => {
    let cardNumber = cardNumberInput.value.replace(/\D/g, "").slice(0, 16);
    cardNumberInput.value = formatCardNumber(cardNumber);
    cardNumberDisplay.textContent = cardNumberInput.value;
    updateCardLogo(cardNumber);
  });

  cardExpiryInput.addEventListener("input", () => {
    let expiry = cardExpiryInput.value.replace(/\D/g, "").slice(0, 4);
    if (expiry.length >= 2) {
      let month = expiry.slice(0, 2);
      let year = expiry.slice(2, 4);
      if (parseInt(month) < 1) {
        month = "01";
      } else if (parseInt(month) > 12) {
        month = "12";
      }
      cardExpiryInput.value = month + (year ? "/" + year : "");
    } else {
      cardExpiryInput.value = expiry;
    }
    cardExpiryDisplay.textContent = cardExpiryInput.value;
  });

  cardCVVInput.addEventListener("input", () => {
    cardCVVInput.value = cardCVVInput.value.replace(/\D/g, "").slice(0, 3);
  });

  function formatCardNumber(number) {
    return number.replace(/(.{4})/g, "$1 ").trim();
  }

  function updateCardLogo(number) {
    const cardType = getCardType(number);
    let logoSrc = "";

    switch (cardType) {
      case "visa":
        logoSrc = "../images/visaCard.png";
        break;
      case "mastercard":
        logoSrc = "../images/masterCard.png";
        break;
      case "mir":
        logoSrc = "../images/mirCard.png";
        break;
      case "belkart":
        logoSrc = "../images/belCard.png";
        break;
      default:
        logoSrc = "";
        break;
    }

    if (logoSrc) {
      cardLogo.src = logoSrc;
      cardLogo.style.display = "block";
    } else cardLogo.style.display = "none";
  }

  function getCardType(number) {
    const firstDigit = number[0];
    if (firstDigit === "4") return "visa";
    if (firstDigit === "5") return "mastercard";
    if (firstDigit === "2") return "mir";
    if (firstDigit === "6") return "belkart";
    return "unknown";
  }

  function isExpiryValid(expiry) {
    const [month, year] = expiry.split("/");
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    if (parseInt(month) < 1 || parseInt(month) > 12) {
      return false;
    }
    if (parseInt(year) < currentYear || parseInt(year) > currentYear + 20) {
      return false;
    }
    if (parseInt(year) === currentYear && parseInt(month) < currentMonth) {
      return false;
    }
    return true;
  }

  cardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cardHolderValid = /^[a-zA-Z\s]+$/.test(cardHolderInput.value);
    const cardNumberValid = /^\d{16}$/.test(
      cardNumberInput.value.replace(/\s/g, "")
    );
    const cardExpiryValid = isExpiryValid(cardExpiryInput.value);
    const cardCVVValid = /^\d{3}$/.test(cardCVVInput.value);

    if (!cardHolderValid) {
      alert("Invalid card holder name");
    } else if (!cardNumberValid) {
      alert("Invalid card number");
    } else if (!cardExpiryValid) {
      alert("Invalid expiration date");
    } else if (!cardCVVValid) {
      alert("Invalid CVV");
    } else {
      alert("Payment successful");
    }
  });

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    switchMode.checked = true;
    changeTheme();
  }
  if (currentTheme === "light") {
    switchMode.checked = false;
    changeTheme();
  }
  const currentLang = localStorage.getItem("lang");
  if (currentLang === null) return;
  const langBtn = document.getElementsByTagName('select')[0];
  if (currentLang === 'ru') {
    langBtn.value = currentLang;
  }
  if (currentLang === 'by') {
    langBtn.value = currentLang;
  }
  const allTags = document.getElementsByClassName("lang");
  for (let i = 0; i < allTags.length; i++) {
    const tag = allTags[i] as HTMLElement;
    const key = tag.getAttribute("key") as string;
    tag.innerText = arrLang[currentLang][key];
  }
};
// Переключение зяыка
const lngSelect = document.querySelector(".change-lng") as HTMLSelectElement;
lngSelect.addEventListener("change", changeLang);
let lang = 'ru';
function changeLang(e: Event) {
  const target = e.target as HTMLSelectElement;
  lang = target.value as "ru";
  const allTags = document.getElementsByClassName("lang");
  localStorage.setItem("lang", lang);
  for (let i = 0; i < allTags.length; i++) {
    const tag = allTags[i] as HTMLElement;
    const key = tag.getAttribute("key") as string;
    tag.innerText = arrLang[lang][key];
  }
}
// Переключение зяыка

// Переключатель тем
let switchMode = document.getElementsByClassName(
  "change-theme__input"
)[0] as HTMLInputElement;

switchMode.onchange = changeTheme;

function changeTheme() {
  const icons = document.getElementsByClassName(
    "icon"
  ) as unknown as HTMLElement[];
  const socialIcons = document.getElementsByClassName(
    "social"
  )[0] as HTMLElement;
  const root = document.documentElement;
  const themeText = document.getElementsByClassName(
    "themeText"
  )[0] as HTMLElement;
  if (switchMode.checked) {
    themeText.innerText = "Темная";
    root.style.setProperty("--background-light", "#121212");
    root.style.setProperty("--secondary-background-light", "#202328");
    root.style.setProperty("--text-light", "#ffffff");
    root.style.setProperty("--text-light2", "#121212");
    changeLogo("logoWhite.png");
    localStorage.setItem("theme", "dark");
    socialIcons.style.filter = "invert(1)";
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = "invert(1)";
    }
  } else {
    themeText.innerText = "Светлая";
    root.style.setProperty("--background-light", "#ffffff");
    root.style.setProperty("--secondary-background-light", "#E3E3E3");
    root.style.setProperty("--text-light", "#121212");
    root.style.setProperty("--text-light2", "#ffffff");
    changeLogo("logoBlack.png");
    localStorage.setItem("theme", "light");
    socialIcons.style.filter = "invert(0)";
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = "invert(0)";
    }
  }
}

function changeLogo(newPath: string) {
  const logos = document.getElementsByClassName("logoImg");
  for (let i = 0; i < logos.length; i++) {
    const logoImg = logos[i] as HTMLImageElement;
    logoImg.src = `../images/${newPath}`;
  }
}
// Переключатель тем

// Подсчет стоимости

let ticketPrice = 0;
let addPrice = 0;

const adult = document.querySelector("#adult") as HTMLInputElement;
const student = document.querySelector("#student") as HTMLInputElement;
const schoolboy = document.querySelector("#schoolboy") as HTMLInputElement;
const preschooler = document.querySelector("#preschooler") as HTMLInputElement;

adult.onchange = (e) => changeTicketPrice(e);
student.onchange = (e) => changeTicketPrice(e);
schoolboy.onchange = (e) => changeTicketPrice(e);
preschooler.onchange = (e) => changeTicketPrice(e);

function changeTicketPrice(e: Event) {
  const elem = e.target as HTMLInputElement;
  ticketPrice = parseFloat(elem.getAttribute("key")!);
  changeTotalPrice();
}

const add1 = document.querySelector("#add1") as HTMLInputElement;
const add2 = document.querySelector("#add2") as HTMLInputElement;
const add3 = document.querySelector("#add3") as HTMLInputElement;
add1.onchange = (e) => changeAddPrice(e);
add2.onchange = (e) => changeAddPrice(e);
add3.onchange = (e) => changeAddPrice(e);

function changeAddPrice(e: Event) {
  const elem = e.target as HTMLInputElement;
  addPrice = elem.checked ? addPrice + parseFloat(elem.getAttribute('key')!) : addPrice - parseFloat(elem.getAttribute('key')!);
  changeTotalPrice();
}

const price = document.getElementsByClassName("totalPrice")[0];
function changeTotalPrice() {
  price.innerHTML = `${lang === "ru" ? '<span>Итого: </span>' : '<span>Усяго: </span>'}<span>${ticketPrice + addPrice} р.</span>`;
}

// Подсчет стоимости

// Открытие моб меню
const burger = document.getElementsByClassName('burgerMenu')[0] as HTMLElement;
burger.onclick = showMobMenu;

const mobMenu = document.getElementsByClassName('mobMenu')[0] as HTMLElement;

function showMobMenu() {
  if (mobMenu.classList.contains('close')) {
    mobMenu.classList.remove('close');
    document.body.style.overflow = 'hidden';
  } else {
    mobMenu.classList.add('close');
    document.body.style.overflow = 'visible';
  }
}

mobMenu.addEventListener('click', (e) => {
  const elem = e.target as HTMLElement;
  if (!elem.classList.contains('menuContent')) {
    showMobMenu();
  }
});
// Открытие моб меню
