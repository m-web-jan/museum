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
document.body.onload = async () => {
  const currentTheme = localStorage.getItem("theme");
  const themeLink = document.getElementById("theme") as HTMLLinkElement;
  const themeText = document.getElementsByClassName(
    "themeText"
  )[0] as HTMLElement;

  const loadStyle = async (stylePath: string) => {
    const oldLink = document.querySelector('#theme') as HTMLLinkElement;
    if (oldLink) {
      oldLink.parentNode?.removeChild(oldLink);
    }

    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.id = 'theme';
    newLink.href = stylePath;
    document.head.appendChild(newLink);
  };

  if (currentTheme === "dark") {
    switchMode.checked = true;
    await loadStyle('./styleD.scss');
    changeLogo("logoWhite.png");
    themeText.innerText = "Темная";
  } else {
    switchMode.checked = false;
    await loadStyle('./styleL.scss');
    changeLogo("logoBlack.png");
    themeText.innerText = "Светлая";
  }
};

let switchMode = document.getElementsByClassName(
  "change-theme__input"
)[0] as HTMLInputElement;

switchMode.onchange = async () => {
  const themeText = document.getElementsByClassName(
    "themeText"
  )[0] as HTMLElement;

  const loadStyle = async (stylePath: string) => {
    const oldLink = document.querySelector('#theme') as HTMLLinkElement;
    if (oldLink) {
      oldLink.parentNode?.removeChild(oldLink);
    }

    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.id = 'theme';
    newLink.href = stylePath;
    document.head.appendChild(newLink);
  };

  if (switchMode.checked) {
    localStorage.setItem("theme", "dark");
    await loadStyle('./styleD.scss');
    changeLogo("logoWhite.png");
    themeText.innerText = "Темная";
  } else {
    localStorage.setItem("theme", "light");
    await loadStyle('./styleL.scss');
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

// Переключатель языков
const arrLang: Langs = {
  ru: {
    logo: "Берестье",
    home: "Главная",
    exhibits: "Экспонаты",
    contacts: "Контакты",
    tickets: "Билеты",
    bannerTitle: "Путешествие по истории Берестья",
    bannerSubtitle: "Погружение в Уникальное Наследие",
    aboutTitle: "О Нас",
    aboutSubtitle:
      "Добро пожаловать в музей Берестье! Мы - увлеченная команда профессионалов, посвятивших себя сохранению исторического наследия и раскрытию его для публики. Наш музей - это не просто коллекция артефактов, но место, где каждый предмет оживает с собственной уникальной историей. Мы стремимся создать пространство, где исследователи любого возраста могут расширить свои знания и насладиться погружением в прошлое. Присоединяйтесь к нам, чтобы обнаружить удивительный мир археологии и истории!",
    ourExhibitsTitle: "ОТКРОЙТЕ ДЛЯ СЕБЯ ВСЕ НАШИ ЭКСПОНАТЫ",
    ourExhibitsSubtitle:
      "Погрузитесь в историю, узнайте о древних культурах и артефактах... Музей Берестье приглашает вас посетить разнообразные экспозиции в Бресте и регионах. В музее Берестье каждый найдет что-то для себя!",
    card1Title: "Самшитовый гребень XIII века",
    card1Subtitle:
      "Уникальная находка — самшитовый гребень XIII века с кириллическим алфавитом. Этот гребень является старейшим «учебником» грамотности в Беларуси и свидетельствует о высоком уровне культуры и письменности в Берестье.",
    card2Title: "Шахматная фигурка короля ХIII века",
    card2Subtitle:
      "Под названием расположен текст, описывающий экспонат. Это высокохудожественное изделие из кости, созданное с особым вниманием к деталям и отделке. В тексте также упоминается, что в Беларуси было найдено 70 шахматных фигур, и только 4 из них, включая берестейского шахматного короля, представляют собой изобразительные шахматы с реалистичными чертами, а не абстрактными фигурами.",
    card3Title: "Биллоновый колт ХIII века",
    card3Subtitle:
      "Текст описывает уникальность и ценность колта как одного из наиболее дорогостоящих предметов в коллекции музея. Он был украшен символическим рисунком прорастающего зерна, и внутрь артефакта вкладывалась ткань, смоченная душистыми маслами.",
    moreBtn: "Смотреть еще",
    whyTitle: "Почему вам стоит посетить наш музей?",
    whySubtitle: "Посетите наш музей, чтобы погрузиться в удивительный мир древних цивилизаций через богатую коллекцию археологических находок. Каждый экспонат расскажет увлекательную историю и откроет перед вами тайны прошлого. Посещение музея - это настоящее приключение и уникальный опыт для любителей истории и археологии.",
    reviewName: "Анастасия",
    reviewPosition: "Посетитель",
    review: "Очень хороший музей, для развития, знания того как жили наши предки. Мне очень понравилось, останки домов, в хорошем сохранившемся виде, на сколько это возможно было, интерактивная история в каждом мини - зале, много экспонатов. Всем кто приехал в Брест очень советую!\nСпасибо, что храните историю!",
    sliderTitle: "Исследуйте наши коллекции",
    services1Title: "Основы Археологии",
    services1Subtitle: "Археология — наука, изучающая материальные останки древних цивилизаций для понимания их культуры, образа жизни и истории.",
    services2Title: "Наши Услуги",
    services2Subtitle: "Аудиогид на пяти языках через QR-код; виртуальные экскурсии по раскопам; 3D-программы о древнем Берестье; кинозал с фильмами о городе.",
    poster1Title: "Музейное Путешествие",
    poster1Date: "10\nнояб",
    poster1Subtitle: "Ваше путешествие в мир культуры начинается здесь! Присоединяйтесь к нашей экскурсии, чтобы открыть потрясающие истории и уникальные искусственные шедевры.",
    poster2Title: "Музейное Путешествие",
    poster2Date: "10\nнояб",
    poster2Subtitle: "Ваше путешествие в мир культуры начинается здесь! Присоединяйтесь к нашей экскурсии, чтобы открыть потрясающие истории и уникальные искусственные шедевры.",
    poster3Title: "Музейное Путешествие",
    poster3Date: "10\nнояб",
    poster3Subtitle: "Ваше путешествие в мир культуры начинается здесь! Присоединяйтесь к нашей экскурсии, чтобы открыть потрясающие истории и уникальные искусственные шедевры.",
    faqTitle: "Отвечаем на вопросы",
    faqQ1: "Есть ли у вас экскурсии?",
    faqA1: "Да, мы предлагаем регулярные экскурсии по расписанию. Также возможно заказать индивидуальную экскурсию для группы.",
    faqQ2: "Сколько стоит билет на вход?",
    faqA2: "Цены на билеты следующие: взрослый - 7.50 рублей, студент - 5.70 рублей, школьник - 3.70 рублей, а для дошкольников вход бесплатный.",
    faqQ3: "Каковы часы работы музея?",
    faqA3: "В период с сентября по апрель музей работает с 10:00 до 18:00 (касса закрывается в 17:30), а с мая по август - с 10:00 до 19:00 (касса закрывается в 18:30).",
    faqQ4: "Могу ли я сделать фотографии в музее?",
    faqA4: "Да, фотографирование разрешено. Однако, пожалуйста, обратите внимание на запрет использования вспышки и требования к сохранности экспонатов.",
    gos1Title: "Официальный Интернет-портал Президента",
    gos2Title: "Генеральная прокуратура",
    gos3Title: "Государственный комитет судебных экспертиз",
    gos4Title: "Следственный комитет",
    country: "Республики Беларусь",
    footerText: "Археологический музей «Берестье» – единственный в мире музей средневекового восточнославянского города, расположенный на месте детинца древнего Берестья.",
    years: "© БЕРЕСТЬЕ 1982 - 2023",
    docs1: "Пользовательское соглашение",
    docs2: "Политика конфиденциальности",
    hoursTitle: "Время работы",
    hours1: "Пн - Вс: 10:00 - 18:00",
    hours2: "+375 162 53 10 11",
    hours3: "brest_museum@brest.by",
    hours4: "224018, г. Брест, проезд Крепостной, 15",
  },
  by: {
    logo: "Берасьце",
    home: "Галоўны",
    exhibits: "Экспанаты",
    contacts: "Кантакт",
    tickets: "Квіткі",
    bannerTitle: "Падарожжа па гісторыі Бярэсця",
    bannerSubtitle: "Апусканне ў унікальнае спадчына",
    aboutTitle: "Пра Нас",
    aboutSubtitle:
      "Сардэчна запрашаем у музей Бярэсце! Мы-захопленая каманда прафесіяналаў, якія прысвяцілі сябе захаванню гістарычнай спадчыны і раскрыццю яго для публікі. Наш музей - гэта не проста калекцыя артэфактаў, але месца, дзе кожны прадмет ажывае з уласнай унікальнай гісторыяй. Мы імкнемся стварыць прастору, дзе даследчыкі любога ўзросту могуць пашырыць свае веды і атрымаць асалоду ад апусканнем у мінулае. Далучайцеся да нас, каб выявіць дзіўны свет археалогіі і гісторыі!",
    ourExhibitsTitle: "АДКРЫЙЦЕ ДЛЯ СЯБЕ ЎСЕ НАШЫ ЭКСПАНАТЫ",
    ourExhibitsSubtitle:
      "Акунуцца ў гісторыю, Даведайцеся аб старажытных культурах і артэфактах... Музей Бярэсце запрашае Вас наведаць разнастайныя экспазіцыі ў Брэсце і рэгіёнах. У Музеі Бярэсце кожны знойдзе нешта для сябе!",
    card1Title: "Самшытавы грэбень XIII стагоддзя",
    card1Subtitle:
      "Унікальная знаходка - самшытавы грэбень XIII стагоддзя з кірылічным алфавітам. Гэты грэбень з'яўляецца найстарэйшым» падручнікам \" пісьменнасці ў Беларусі і сведчыць пра высокі ўзровень культуры і пісьменства ў Бярэсці.",
    card2Title: "Шахматная фігурка караля XIII стагоддзя",
    card2Subtitle:
      "Пад назвай размешчаны тэкст, які апісвае экспанат. Гэта высокамастацкае выраб з косці, створанае з асаблівай увагай да дэталяў і аздабленні. У тэксце таксама згадваецца, што ў Беларусі было знойдзена 70 шахматных фігур, і толькі 4 з іх, уключаючы Берасцейскага шахматнага караля, уяўляюць сабой выяўленчыя шахматы з рэалістычнымі рысамі, а не абстрактнымі фігурамі.",
    card3Title: "Білонавы колт XII стагоддзя",
    card3Subtitle:
    "Тэкст апісвае ўнікальнасць і каштоўнасць колта як аднаго з найбольш дарагіх прадметаў у калекцыі музея. Ён быў упрыгожаны сімвалічным малюнкам прарастаючага збожжа, і ўнутр артэфакта ўкладвалася тканіна, змочаная духмянымі алеямі.",
    moreBtn: "Глядзець яшчэ",
    whyTitle: "Чаму вам варта наведаць наш музей?",
    whySubtitle: "Наведайце наш музей, каб пагрузіцца ў дзіўны свет старажытных цывілізацый праз багатую калекцыю археалагічных знаходак. Кожны экспанат раскажа займальную гісторыю і адкрые перад вамі таямніцы мінулага. Наведванне музея-гэта сапраўднае прыгода і унікальны вопыт для аматараў гісторыі і археалогіі.",
    reviewName: "Анастасія",
    reviewPosition: "Наведвальнік",
    review: "Вельмі добры музей, для развіцця, веды таго як жылі нашы продкі. Мне вельмі спадабалася, астанкі дамоў, у добрым захаваным выглядзе, наколькі гэта магчыма было, інтэрактыўная гісторыя ў кожнай міні-зале, шмат экспанатаў. Усім хто прыехаў у Брэст вельмі раю!\nДзякуй, што захоўваеце гісторыю!",
    sliderTitle: "Дасьледуйце нашы калекцыі",
    services1Title: "Асновы Археалогіі",
    services1Subtitle: "Археалогія-навука, якая вывучае матэрыяльныя астанкі старажытных цывілізацый для разумення іх культуры, ладу жыцця і гісторыі.",
    services2Title: "Нашы Паслугі",
    services2Subtitle: "Аўдыягід на пяці мовах праз QR-код; віртуальныя экскурсіі па раскопках; 3D-праграмы аб старажытным Бярэсці; кіназала з фільмамі пра горад.",
    poster1Title: "Музейнае Падарожжа",
    poster1Date: "10\nлістапада",
    poster1Subtitle: "Ваша падарожжа ў свет культуры пачынаецца тут! Далучайцеся да нашай экскурсіі, каб адкрыць цудоўныя гісторыі і унікальныя штучныя шэдэўры.",
    poster2Title: "Музейнае Падарожжа",
    poster2Date: "10\nлістапада",
    poster2Subtitle: "Ваша падарожжа ў свет культуры пачынаецца тут! Далучайцеся да нашай экскурсіі, каб адкрыць цудоўныя гісторыі і унікальныя штучныя шэдэўры.",
    poster3Title: "Музейнае Падарожжа",
    poster3Date: "10\nлістапада",
    poster3Subtitle: "Ваша падарожжа ў свет культуры пачынаецца тут! Далучайцеся да нашай экскурсіі, каб адкрыць цудоўныя гісторыі і унікальныя штучныя шэдэўры.",
    faqTitle: "Адказваем на пытанні",
    faqQ1: "Ці ёсць у вас экскурсіі?",
    faqA1: "Так, мы прапануем рэгулярныя экскурсіі па раскладзе. Таксама магчыма замовіць індывідуальную экскурсію для групы.",
    faqQ2: "Колькі каштуе білет на ўваход?",
    faqA2: "Цэны на квіткі наступныя: Дарослы-7.50 рублёў, студэнт - 5.70 рублёў, школьнік - 3.70 рублёў, а для дашкольнікаў уваход бясплатны.",
    faqQ3: "Якія гадзіны працы музея?",
    faqA3: "У перыяд з верасня па красавік музей працуе з 10:00 да 18:00 (каса зачыняецца ў 17:30), а з мая па жнівень - з 10:00 да 19: 00 (каса зачыняецца ў 18: 30).",
    faqQ4: "Ці магу я зрабіць фатаграфіі ў музеі?",
    faqA4: "Так, фатаграфаванне дазволена. Аднак, калі ласка, звярніце ўвагу на забарону выкарыстання ўспышкі і патрабаванні да захаванасці экспанатаў.",
    gos1Title: "Афіцыйны інтэрнэт-партал Прэзідэнта",
    gos2Title: "Генеральная пракуратура",
    gos3Title: "Дзяржаўны камітэт судовых экспертыз",
    gos4Title: "Следчы камітэт",
    country: "Рэспубліка Беларусь",
    footerText: "Археалагічны музей «Бярэсце» - адзіны ў свеце музей сярэднявечнага ўсходнеславянскага горада, размешчаны на месцы дзяцінца старажытнага Бярэсця.",
    years: "© Бярэсце 1982-2023",
    docs1: "Карыстальніцкае Пагадненне",
    docs2: "Палітыка прыватнасці",
    hoursTitle: "Час працы",
    hours1: "Пн-Нд: 10:00 - 18: 00",
    hours2: "+375 162 53 10 11",
    hours3: "brest_museum@brest.by",
    hours4: "224018, г. Брэст, праезд прыгонны, 15",
  },
};

interface LangData {
  [key: string]: string;
}
interface Langs {
  [lang: string]: LangData;
}

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
// Переключатель языков
