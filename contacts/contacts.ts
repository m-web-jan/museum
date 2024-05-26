import './style.scss';
import { arrLang } from "../langData";


// Переключение тем

let switchMode = document.getElementsByClassName(
  "change-theme__input"
)[0] as HTMLInputElement;

switchMode.onchange = changeTheme;

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
};

function changeTheme() {
  const root = document.documentElement;
  const icons = document.getElementsByClassName('icon') as unknown as HTMLElement[];
  const themeText = document.getElementsByClassName(
    "themeText"
  )[0] as HTMLElement;
  const socialIcons = document.getElementsByClassName(
    "social"
  )[0] as HTMLElement;
  const bannerImg1 = document.getElementsByClassName(
    "bannerImg"
  )[0] as HTMLImageElement;
  const bannerImg2 = document.getElementsByClassName(
    "bannerImg"
  )[1] as HTMLImageElement;
  if (switchMode.checked) {
    themeText.innerText = "Темная";
    root.style.setProperty("--background-light", "#121212");
    root.style.setProperty("--secondary-background-light", "#202328");
    root.style.setProperty("--text-light", "#ffffff");
    root.style.setProperty("--text-light2", "#121212");
    changeLogo("logoWhite.png");
    localStorage.setItem("theme", "dark");
    socialIcons.style.filter = "invert(1)";
    bannerImg1.src = "../images/contactsDarkBanner1.png";
    bannerImg2.src = "../images/contactsDarkBanner2.png";
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
    bannerImg1.src = "../images/contactsLightBanner1.png";
    bannerImg2.src = "../images/contactsLightBanner2.png";
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

function changeLang(e: Event) {
  const target = e.target as HTMLSelectElement;
  const lang = target.value as "ru";
  const allTags = document.getElementsByClassName("lang");

  for (let i = 0; i < allTags.length; i++) {
    const tag = allTags[i] as HTMLElement;
    const key = tag.getAttribute("key") as string;
    tag.innerText = arrLang[lang][key];
  }
}
// Переключение зяыка