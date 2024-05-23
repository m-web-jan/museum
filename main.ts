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
      -cardsCount + 3 !== currentTranslateX / cardWidth ? cardWidth : 0;
    slider.style.transform = `translateX(${currentTranslateX}px)`;
  });
}

animateSlider();
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
document.body.onload = () => {
  const currentTheme = localStorage.getItem("theme");
  const theme = document.getElementById("theme") as HTMLLinkElement;
  const themeText = document.getElementsByClassName(
    "themeText"
  )[0] as HTMLElement;

  if (currentTheme === 'dark') {
    switchMode.checked = true;
    theme.href = "./styleD.scss";
    changeLogo("logoWhite.png");
    themeText.innerText = "Темная";
  } else {
    switchMode.checked = false;
    theme.href = "./styleL.scss";
    changeLogo("logoBlack.png");
    themeText.innerText = "Светлая";
  }
}

let switchMode = document.getElementsByClassName(
  "change-theme__input"
)[0] as HTMLInputElement;

switchMode.onchange = () => {
  const theme = document.getElementById("theme") as HTMLLinkElement;
  const themeText = document.getElementsByClassName(
    "themeText"
  )[0] as HTMLElement;

  if (theme?.getAttribute("href") === "./styleL.scss") {
    localStorage.setItem("theme", "dark");
    theme.href = "./styleD.scss";
    changeLogo("logoWhite.png");
    themeText.innerText = "Темная";
  } else {
    localStorage.setItem("theme", "light");
    theme.href = "./styleL.scss";
    changeLogo("logoBlack.png");
    themeText.innerText = "Светлая";
  }
};

function changeLogo(newPath: string) {
  const logos = document.getElementsByClassName("logoImg");
  for (let i = 0; i < logos.length; i++) {
    const logoImg = logos[i] as HTMLImageElement;
    logoImg.src = `images/${newPath}`;
  }
}
// Переключатель тем
