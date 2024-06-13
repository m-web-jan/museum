import "./style.scss";
import { arrLang } from "../langData";
let language = "ru";
let data: any[];

const cards = document
  .getElementsByClassName("cards")[0]
  .getElementsByClassName("container")[0];


interface ICard {
  name: string;
  description: string;
  image: string;
  properties: string[];
}

function fillCard(cardData: ICard) {
  const card = document.createElement("div");
  card.onclick = () => {
    openModal(cardData);
  };
  card.classList.add("card");
  const cardImg = document.createElement("div");
  cardImg.classList.add("img");
  cardImg.style.backgroundImage = `url(../images/${cardData.image})`;
  const cardTitle = document.createElement("p");
  cardTitle.innerText = cardData.name;

  const cardContent = document.createElement("div");
  cardContent.classList.add("content");
  const cardDescription = document.createElement("p");
  cardDescription.innerHTML = cropText(
    cardData.description
  );
  const cardCentury = document.createElement("h2");
  cardCentury.innerText = cardData.properties[0];

  cardImg.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(cardCentury);
  card.appendChild(cardImg);
  card.appendChild(cardContent);

  cards.appendChild(card);
}

function cropText(text: string) {
  if (text.length < 81) return text;
  return `${text.slice(0, 81)}... <p style="color: #2D545E;">${
    language === "ru" ? "Читать далее" : "Чытаць далей"
  }</p>`;
}

// Открытие модального окна
function openModal(cardData: ICard) {
  document.body.style.overflowY = "hidden";
  const modal = document.getElementsByClassName("modal")[0] as HTMLElement;
  modal.getElementsByTagName("img")[0].src = `../images/${cardData.image}`;
  modal.getElementsByTagName("h2")[0].innerText = `${cardData.name}`;
  modal.getElementsByTagName("p")[0].innerText = `${cardData.description}`;

  modal.getElementsByTagName("span")[0].innerText = `${cardData.properties[0]}`;
  modal.getElementsByTagName("span")[1].innerText = `${cardData.properties[1]}`;
  modal.getElementsByTagName("span")[2].innerText = `${cardData.properties[2]}`;

  modal.style.display = "block";
  modal.onclick = (event) => {
    const target = event.target as HTMLElement;
    if (
      target.classList.contains("modalBtn") ||
      target.classList.contains("modal")
    )
      closeModal();
  };
}
function closeModal() {
  document.body.style.overflowY = "visible";
  const modal = document.getElementsByClassName("modal")[0] as HTMLElement;
  modal.style.display = "none";
}
// Открытие модального окна


// Переключение тем

let switchMode = document.getElementsByClassName(
  "change-theme__input"
)[0] as HTMLInputElement;

switchMode.onchange = changeTheme;

function changeTheme() {
  const root = document.documentElement;
  const icons = document.getElementsByClassName('icon') as unknown as HTMLElement[];
  const themeText = document.getElementsByClassName(
    "themeText"
  )[0] as HTMLElement;
  const socialIcons = document.getElementsByClassName(
    "social"
  )[0] as HTMLElement;
  const bannerImg = document.getElementsByClassName(
    "bannerImg"
  )[0] as HTMLImageElement;
  if (switchMode.checked) {
    themeText.innerText = "Темная";
    root.style.setProperty("--background-light", "#121212");
    root.style.setProperty("--secondary-background-light", "#202328");
    root.style.setProperty("--text-light", "#ffffff");
    root.style.setProperty("--text-light2", "#121212");
    changeLogo("logoWhite.png");
    localStorage.setItem("theme", "dark");
    socialIcons.style.filter = "invert(1)";
    bannerImg.src = "../images/exhibitsDarkBanner.png";
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = 'invert(1)';
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
    bannerImg.src = "../images/exhibitsLightBanner.png";
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = 'invert(0)';
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

// Переключение тем

// Переключение зяыка
const lngSelect = document.querySelector(".change-lng") as HTMLSelectElement;
lngSelect.addEventListener("change", changeLang);
document.body.onload = () => {
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
  language = currentLang;
  getCardsData(currentLang.toUpperCase());
}

function changeLang(e: Event) {
  const target = e.target as HTMLSelectElement;
  const lang = target.value as "ru";
  localStorage.setItem("lang", lang);
  language = lang;
  getCardsData(lang.toUpperCase());
  const allTags = document.getElementsByClassName("lang");

  for (let i = 0; i < allTags.length; i++) {
    const tag = allTags[i] as HTMLElement;
    const key = tag.getAttribute("key") as string;
    tag.innerText = arrLang[lang][key];
  }
}
// Переключение зяыка

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


// Бэк
async function getCardsData(lang: string) {
  fetch(`http://localhost:3000/data?language=${lang}`)
  .then((response) => response.json())
  .then((responseData) => {
    data = responseData;
    cards.innerHTML = '';
    for (let i = 0; i < data?.length; i++) {
      fillCard(data[i]);
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
}

await getCardsData('RU');