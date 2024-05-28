import { arrLang } from "./langData.ts";

// Слайдер
function animateSlider() {
  const sliderContainer = document.getElementsByClassName(
    "slider"
  )[0] as HTMLElement;
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

  sliderContainer.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    isSwiping = true;
  });

  sliderContainer.addEventListener("touchmove", () => {
    if (!isSwiping) return;
  });

  sliderContainer.addEventListener("touchend", (event) => {
    if (!isSwiping) return;
    const endX = event.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (diffX > 10) {
      if (currentTranslateX > -(cardsCount - 1) * cardMobWidth) {
        currentTranslateX -= cardMobWidth;
      }
    } else if (diffX < -10) {
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
    title: ["Вечер в музее", "Вечар у музеі"],
    description: [
      "Откройте для себя магию музея после закрытия на событии 'Вечер в музее'! Под тихую музыку и со вспышками света вы узнаете удивительные истории экспонатов, насладитесь атмосферой загадочности и волшебства в компании других любителей истории.",
      "Адкрыйце для сябе магію музея пасля закрыцця на падзеі 'вечар у музеі'! Пад ціхую музыку і са выбліскамі святла вы даведаецеся дзіўныя гісторыі экспанатаў, атрымаеце асалоду ад атмасферай загадкавасці і чараўніцтва ў кампаніі іншых аматараў гісторыі.",
    ],
    img: "aboutusImg.png",
  },
  {
    title: ["Берестейская маёвка", "Берасцейская маёўка"],
    description: [
      "Захватывающее археологическое открытие, раскрывающее удивительные аспекты древних обычаев и культуры. Эта уникальная находка представляет собой ценный артефакт, который бережно хранится в коллекции музея археологического Берестья. Погружаясь в историю, посетители могут открыть для себя тайны древних обрядов и обычаев, которые когда-то ценились на этих землях.",
      "Захапляльнае археалагічнае адкрыццё, якое раскрывае дзіўныя аспекты старажытных звычаяў і культуры. Гэтая ўнікальная знаходка ўяўляе сабой каштоўны артэфакт, які беражліва захоўваецца ў калекцыі музея археалагічнага Бярэсця. Апускаючыся ў гісторыю, наведвальнікі могуць адкрыць для сябе таямніцы старажытных абрадаў і звычаяў, якія калісьці шанаваліся на гэтых землях.",
    ],
    img: "gallery1.png",
  },
  {
    title: ["Ожившая история", "Ажыўшая гісторыя"],
    description: [
      "Захватывающее путешествие в прошлое, где артефакты и воссозданные сцены оживляют историю, погружая посетителей в атмосферу удивительных и непознанных древних эпох.",
      "Захапляльнае падарожжа ў мінулае, дзе артэфакты і адноўленыя сцэны ажыўляюць гісторыю, апускаючы наведвальнікаў у атмасферу дзіўных і непазнаных старажытных эпох.",
    ],
    img: "gallery2.png",
  },
  {
    title: ["Тайны забытых времен", "Таямніцы забытых часоў"],
    description: [
      "Глубокое погружение в прошлое, где таинственные артефакты и воссозданные сцены рассказывают нам истории о забытых временах, раскрывая удивительные аспекты древних цивилизаций и обычаев. Посетители будут потрясены атмосферой загадочности и увлекательными открытиями, которые ждут их в этом путешествии сквозь туманные пелены времени.",
      "Глыбокае апусканне ў мінулае, дзе таямнічыя артэфакты і адноўленыя сцэны распавядаюць нам гісторыі пра забытых часах, раскрываючы дзіўныя аспекты старажытных цывілізацый і звычаяў. Наведвальнікі будуць узрушаныя атмасферай загадкавасці і займальнымі адкрыццямі, якія чакаюць іх у гэтым падарожжы скрозь туманныя заслоны часу.",
    ],
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

  if (window.innerWidth < 768) {
    let current = 0;
    galleryMainImage.onclick = () => {
      current = (current + 1) % 4;
      galTitle.innerText = galleryData[current].title[lang === 'ru' ? 0 : 1];
      galText.innerText = galleryData[current].description[lang === 'ru' ? 0 : 1];
      galleryMainImage.src = `images/${galleryData[current].img}`;
    };
    return;
  }

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
      galTitle.innerText = current.title[lang === 'ru' ? 0 : 1];
      galText.innerText = current.description[lang === 'ru' ? 0 : 1];
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
    logoImg.src = `images/${newPath}`;
  }
}
// Переключатель тем

// Переключатель языков
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
  const langBtn = document.getElementsByTagName("select")[0];
  if (currentLang === "ru") {
    langBtn.value = currentLang;
  }
  if (currentLang === "by") {
    langBtn.value = currentLang;
  }
  const allTags = document.getElementsByClassName("lang");
  for (let i = 0; i < allTags.length; i++) {
    const tag = allTags[i] as HTMLElement;
    const key = tag.getAttribute("key") as string;
    tag.innerText = arrLang[currentLang][key];
  }
};
let lang = "ru";
function changeLang(e: Event) {
  const target = e.target as HTMLSelectElement;
  lang = target.value as "ru";
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
const burger = document.getElementsByClassName("burgerMenu")[0] as HTMLElement;
burger.onclick = showMobMenu;

const mobMenu = document.getElementsByClassName("mobMenu")[0] as HTMLElement;

function showMobMenu() {
  if (mobMenu.classList.contains("close")) {
    mobMenu.classList.remove("close");
    document.body.style.overflow = "hidden";
  } else {
    mobMenu.classList.add("close");
    document.body.style.overflow = "visible";
  }
}

mobMenu.addEventListener("click", (e) => {
  const elem = e.target as HTMLElement;
  if (!elem.classList.contains("menuContent")) {
    showMobMenu();
  }
});
// Открытие моб меню

const scrollSlider = document
  .getElementsByClassName("gosSlider")[0]
  .getElementsByClassName("container")[0];
if (window.innerWidth < 768) {
  setInterval(function () {
    scrollSlider.scrollTo(0, 0);
  }, 1000 * 15);
}
