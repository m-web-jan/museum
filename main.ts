import { arrLang } from './langData.ts';

// Слайдер
function animateSlider() {
  const slider = document.querySelector("#sliderCards") as HTMLElement;
  const nextButton = document.querySelector("#sliderBtnRight") as HTMLElement;
  const prevButton = document.querySelector("#sliderBtnLeft") as HTMLElement;
  const cardsCount = slider.getElementsByTagName("img").length;

  let currentTranslateX = 0;
  let cardWidth = 390;

  prevButton.addEventListener("click", () => {
    currentTranslateX += currentTranslateX === 0 ? 0 : cardWidth;
    slider.style.transform = `translateX(${currentTranslateX}px)`;
  });

  nextButton.addEventListener("click", () => {
    currentTranslateX -=
      -cardsCount + 1 !== currentTranslateX / cardWidth ? cardWidth : 0;
    slider.style.transform = `translateX(${currentTranslateX}px)`;
  });

  let startX = 0;
  let isSwiping = false;
  let cardMobWidth = 290;

  slider.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    isSwiping = true;
  });

  slider.addEventListener("touchmove", (event) => {
    if (!isSwiping) return;
  });

  slider.addEventListener("touchend", (event) => {
    if (!isSwiping) return;
    const endX = event.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (diffX > 50) {
      // Swipe left
      if (currentTranslateX > -(cardsCount - 3) * cardMobWidth) {
        currentTranslateX -= cardMobWidth;
      }
    } else if (diffX < -50) {
      // Swipe right
      if (currentTranslateX < 0) {
        currentTranslateX += cardMobWidth;
      }
    }
    slider.style.transform = `translateX(${currentTranslateX}px)`;
    isSwiping = false;
  });
}

document.addEventListener("DOMContentLoaded", animateSlider);
// Слайдер

const galleryData = [
  {
    title: "Вечер в музее",
    description:
      "Откройте для себя магию музея после закрытия на событии 'Вечер в музее'! Под тихую музыку и со вспышками света вы узнаете удивительные истории экспонатов, насладитесь атмосферой загадочности и волшебства в компании других любителей истории.",
    img: "aboutusImg.png",
  },
  {
    title: "Берестейская маёвка",
    description:
      "Захватывающее археологическое открытие, раскрывающее удивительные аспекты древних обычаев и культуры. Эта уникальная находка представляет собой ценный артефакт, который бережно хранится в коллекции музея археологического Берестья. Погружаясь в историю, посетители могут открыть для себя тайны древних обрядов и обычаев, которые когда-то ценились на этих землях.",
    img: "gallery1.png",
  },
  {
    title: "Ожившая история",
    description:
      "Захватывающее путешествие в прошлое, где артефакты и воссозданные сцены оживляют историю, погружая посетителей в атмосферу удивительных и непознанных древних эпох.",
    img: "gallery2.png",
  },
  {
    title: "Тайны забытых времен",
    description:
      "Глубокое погружение в прошлое, где таинственные артефакты и воссозданные сцены рассказывают нам истории о забытых временах, раскрывая удивительные аспекты древних цивилизаций и обычаев. Посетители будут потрясены атмосферой загадочности и увлекательными открытиями, которые ждут их в этом путешествии сквозь туманные пелены времени.",
    img: "gallery3.png",
  },
];

// Галерея
function gallery() {
  let galleryImages = document
    .querySelector(".gallery")
    ?.getElementsByTagName("img")!;
  let galleryMainImage = galleryImages[0];
  const galTitle = document.querySelector("#galTitle") as HTMLElement;
  const galText = document.querySelector("#galText") as HTMLElement;

  for (let i = 1; i < galleryImages?.length; i++) {
    galleryImages[i].onclick = () => {
      galleryImages = document
        .querySelector(".gallery")
        ?.getElementsByTagName("img")!;
      galleryMainImage = galleryImages[0];

      galleryImages[i].src = galleryMainImage.src;
      const current = galleryData[parseInt(galleryImages[i].id.slice(-1)) - 1];
      galleryMainImage.src = `images/${current.img}`;
      let currentIndex = galleryImages[i].id;
      galleryImages[i].id = galleryMainImage.id;
      galTitle.innerText = current.title;
      galText.innerText = current.description;
      galleryMainImage.id = currentIndex;
    };
  }
}

gallery();
// Галерея

// Переключатель тем

let switchMode = document.getElementsByClassName(
  "change-theme__input"
)[0] as HTMLInputElement;

switchMode.onchange = changeTheme;

function changeTheme() {
  const icons = document.getElementsByClassName('icon') as unknown as HTMLElement[];
  const socialIcons = document.getElementsByClassName('social')[0] as HTMLElement;
  const root = document.documentElement;
  const themeText = document.getElementsByClassName('themeText')[0] as HTMLElement;
  if (switchMode.checked) {
    themeText.innerText = 'Темная';
    root.style.setProperty('--background-light', '#121212');
    root.style.setProperty('--secondary-background-light', '#202328');
    root.style.setProperty('--text-light', '#ffffff');
    root.style.setProperty('--text-light2', '#121212');
    changeLogo("logoWhite.png");
    localStorage.setItem("theme", "dark");
    socialIcons.style.filter = "invert(1)"
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = 'invert(1)';
    }
  } else {
    themeText.innerText = 'Светлая';
    root.style.setProperty('--background-light', '#ffffff');
    root.style.setProperty('--secondary-background-light', '#E3E3E3');
    root.style.setProperty('--text-light', '#121212');
    root.style.setProperty('--text-light2', '#ffffff');
    changeLogo("logoBlack.png");
    localStorage.setItem("theme", "light");
    socialIcons.style.filter = "invert(0)"
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = 'invert(0)';
    }
  }
}

function changeLogo(newPath: string) {
  const logos = document.getElementsByClassName("logoImg");
  for (let i = 0; i < logos.length; i++) {
    const logoImg = logos[i] as HTMLImageElement;
    logoImg.src = `images/${newPath}`;
  }
}

// Переключатель тем

// Переключатель языков
const lngSelect = document.querySelector(".change-lng") as HTMLSelectElement;
lngSelect.addEventListener("change", changeLang);

document.body.onload = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === 'dark') {
    switchMode.checked = true;
    changeTheme();
  }
  if (currentTheme === 'light') {
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
}

function changeLang(e: Event) {
  const target = e.target as HTMLSelectElement;
  const lang = target.value as "ru";
  localStorage.setItem("lang", lang);

  const allTags = document.getElementsByClassName("lang");
  for (let i = 0; i < allTags.length; i++) {
    const tag = allTags[i] as HTMLElement;
    const key = tag.getAttribute("key") as string;
    tag.innerText = arrLang[lang][key];
  }
}
// Переключатель языков

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