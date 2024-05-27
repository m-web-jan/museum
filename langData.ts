interface LangData {
  [key: string]: string;
}
interface Langs {
  [lang: string]: LangData;
}

export const arrLang: Langs = {
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
    whySubtitle:
      "Посетите наш музей, чтобы погрузиться в удивительный мир древних цивилизаций через богатую коллекцию археологических находок. Каждый экспонат расскажет увлекательную историю и откроет перед вами тайны прошлого. Посещение музея - это настоящее приключение и уникальный опыт для любителей истории и археологии.",
    reviewName: "Анастасия",
    reviewPosition: "Посетитель",
    review:
      "Очень хороший музей, для развития, знания того как жили наши предки. Мне очень понравилось, останки домов, в хорошем сохранившемся виде, на сколько это возможно было, интерактивная история в каждом мини - зале, много экспонатов. Всем кто приехал в Брест очень советую!\nСпасибо, что храните историю!",
    sliderTitle: "Исследуйте наши коллекции",
    services1Title: "Основы Археологии",
    services1Subtitle:
      "Археология — наука, изучающая материальные останки древних цивилизаций для понимания их культуры, образа жизни и истории.",
    services2Title: "Наши Услуги",
    services2Subtitle:
      "Аудиогид на пяти языках через QR-код; виртуальные экскурсии по раскопам; 3D-программы о древнем Берестье; кинозал с фильмами о городе.",
    poster1Title: "Берестейская маёвка 2024 в археологическом музее «Берестье",
    poster1Date: "25\nмая",
    poster1Subtitle:
      "25 мая в 19.00 в филиале Брестского областного краеведческого музея «Археологический музей «Берестье», в рамках международной акции «Ночь музеев» состоялось ежегодное мероприятие «Берестейская маёвка 2024».",
    poster2Title: "О закрытии филиала «Археологический музей «Берестье» 5 февраля 2024 г.",
    poster2Date: "5\nфев",
    poster2Subtitle:
      "Филиал \"Археологический музей \"Берестье\" будет закрыт для посещений в связи с проведением технических работ по обслуживаеию кассового оборудования.",
    poster3Title: "Музейное Путешествие",
    poster3Date: "10\nнояб",
    poster3Subtitle:
      "Ваше путешествие в мир культуры начинается здесь! Присоединяйтесь к нашей экскурсии, чтобы открыть потрясающие истории и уникальные искусственные шедевры.",
    faqTitle: "Отвечаем на вопросы",
    faqQ1: "Есть ли у вас экскурсии?",
    faqA1:
      "Да, мы предлагаем регулярные экскурсии по расписанию. Также возможно заказать индивидуальную экскурсию для группы.",
    faqQ2: "Сколько стоит билет на вход?",
    faqA2:
      "Цены на билеты следующие: взрослый - 7.50 рублей, студент - 5.70 рублей, школьник - 3.70 рублей, а для дошкольников вход бесплатный.",
    faqQ3: "Каковы часы работы музея?",
    faqA3:
      "В период с сентября по апрель музей работает с 10:00 до 18:00 (касса закрывается в 17:30), а с мая по август - с 10:00 до 19:00 (касса закрывается в 18:30).",
    faqQ4: "Могу ли я сделать фотографии в музее?",
    faqA4:
      "Да, фотографирование разрешено. Однако, пожалуйста, обратите внимание на запрет использования вспышки и требования к сохранности экспонатов.",
    gos1Title: 'Музей "Спасённые художественные ценности"',
    gos2Title: "Каменецкая башня",
    gos3Title: "Художественный музей",
    gos4Title: "Брестский областной краеведческий музей",
    country: "Республики Беларусь",
    footerText:
      "Археологический музей «Берестье» – единственный в мире музей средневекового восточнославянского города, расположенный на месте детинца древнего Берестья.",
    years: "© БЕРЕСТЬЕ 1982 - 2023",
    docs1: "Пользовательское соглашение",
    docs2: "Политика конфиденциальности",
    hoursTitle: "Время работы",
    hours1: "Пн - Вс: 10:00 - 18:00",
    hours2: "+375 162 53 10 11",
    hours3: "brest_museum@brest.by",
    hours4: "224018, г. Брест, проезд Крепостной, 15",
    exhibitsTitle: "Галерея Музейных Экспонатов",
    contactUs: "Свяжитесь с нами — будем рады!",
    contactUsText:
      "Погрузитесь в мир знаний и открытий вместе с нами! Добро пожаловать в музей 'Берестье', где культура и познание переплетаются в увлекательном танце!",
    contactUsTitle: "Археологический музей «Берестье»",
    contactUsInfo:
      "Наш адерс: г. Брест, проезд Крепостной, 15\nРежим работы:\nСентябрь-Апрель: с 10.00 до 18.00 (касса до 17.30)Май-Август: с 10.00 до 19.00 (касса до 18.30)\nБез выходных\nТелефон: +375 162 53 10 11",
    add1Title:
      "3D-очки демонстрируют программы виртуальной реальности, панорамы древнего Берестья",
    add2Title: "Тематическая и обзорная экскурсии по археологическому музею",
    add3Title: "Тематическая экскурсия по прилегающей территории",
    ticketType: "Тип билета",
    adult: "Взрослый\n7.50",
    student: "Студент\n5.70",
    schoolboy: "Школьник\n3.70",
    preschooler: "Дошкольник\nБесплатно",
    addService: "Дополнительные услуги",
    add1: "Тематическая экскурсия - 24 р.",
    add2: "Обзорная экскурсия (1-3 классы) - 14 р.",
    add3: "Демонстрация программы 3D панорамы Древнего Берестья XIII века - 5 р.",
    cardDetails: "Детали карты",
    priceTotla: "Итого: ",
    pay: "Оплатить",
    policy: "Согласие на обработку персональных данных",
    policyText:
      "Даю согласие Музею «Берестье» (юридический адрес: 224018, г. Брест, проезд Крепостной, 15) на обработку моих персональных данных: фамилия, имя, контактный мобильный телефон, адрес электронной почты, автоматизированным и неавтоматизированным способом в целях установления обратной связи, получения консультаций, рассылки рекламных сообщений и маркетинга, проведения преддоговорных переговоров по вопросам покупки услуг музея.\n В указанных целях я даю согласие на осуществление следующих действий с моими персональными данными: сбор, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, обезличивание, блокирование, удаление, уничтожение.\n Мне разъяснены права, связанные с обработкой моих персональных данных, механизм реализации таких прав, а также последствия дачи мною согласия или отказа в даче такого согласия.\n Я согласен(а) с тем, что:\n согласие на обработку персональных данных действует с даты предоставления настоящего согласия до достижения целей обработки персональных данных.",
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
    whySubtitle:
      "Наведайце наш музей, каб пагрузіцца ў дзіўны свет старажытных цывілізацый праз багатую калекцыю археалагічных знаходак. Кожны экспанат раскажа займальную гісторыю і адкрые перад вамі таямніцы мінулага. Наведванне музея-гэта сапраўднае прыгода і унікальны вопыт для аматараў гісторыі і археалогіі.",
    reviewName: "Анастасія",
    reviewPosition: "Наведвальнік",
    review:
      "Вельмі добры музей, для развіцця, веды таго як жылі нашы продкі. Мне вельмі спадабалася, астанкі дамоў, у добрым захаваным выглядзе, наколькі гэта магчыма было, інтэрактыўная гісторыя ў кожнай міні-зале, шмат экспанатаў. Усім хто прыехаў у Брэст вельмі раю!\nДзякуй, што захоўваеце гісторыю!",
    sliderTitle: "Дасьледуйце нашы калекцыі",
    services1Title: "Асновы Археалогіі",
    services1Subtitle:
      "Археалогія-навука, якая вывучае матэрыяльныя астанкі старажытных цывілізацый для разумення іх культуры, ладу жыцця і гісторыі.",
    services2Title: "Нашы Паслугі",
    services2Subtitle:
      "Аўдыягід на пяці мовах праз QR-код; віртуальныя экскурсіі па раскопках; 3D-праграмы аб старажытным Бярэсці; кіназала з фільмамі пра горад.",
    poster1Title: "Берасцейская маёўка 2024 у археалагічным музеі \" Бярэсце",
    poster1Date: "25\n мая",
    poster1Subtitle:
      "25 мая ў 19.00 у філіяле Брэсцкага абласнога краязнаўчага музея «Археалагічны музей «Бярэсце», у рамках міжнароднай акцыі «Ноч музеяў» адбылося штогадовае мерапрыемства «Берасцейская маёўка 2024».",
    poster2Title: "Аб закрыцці філіяла \"Археалагічны музей\" Бярэсце \" 5 лютага 2024 г.",
    poster2Date: "5\n лютага",
    poster2Subtitle:
      "Філіял \"Археалагічны музей\" Бярэсце \" будзе зачынены для наведванняў у сувязі з правядзеннем тэхнічных работ па абслугоўванні касавага абсталявання.",
    poster3Title: "Музейнае Падарожжа",
    poster3Date: "10\nлістапада",
    poster3Subtitle:
      "Ваша падарожжа ў свет культуры пачынаецца тут! Далучайцеся да нашай экскурсіі, каб адкрыць цудоўныя гісторыі і унікальныя штучныя шэдэўры.",
    faqTitle: "Адказваем на пытанні",
    faqQ1: "Ці ёсць у вас экскурсіі?",
    faqA1:
      "Так, мы прапануем рэгулярныя экскурсіі па раскладзе. Таксама магчыма замовіць індывідуальную экскурсію для групы.",
    faqQ2: "Колькі каштуе білет на ўваход?",
    faqA2:
      "Цэны на квіткі наступныя: Дарослы-7.50 рублёў, студэнт - 5.70 рублёў, школьнік - 3.70 рублёў, а для дашкольнікаў уваход бясплатны.",
    faqQ3: "Якія гадзіны працы музея?",
    faqA3:
      "У перыяд з верасня па красавік музей працуе з 10:00 да 18:00 (каса зачыняецца ў 17:30), а з мая па жнівень - з 10:00 да 19: 00 (каса зачыняецца ў 18: 30).",
    faqQ4: "Ці магу я зрабіць фатаграфіі ў музеі?",
    faqA4:
      "Так, фатаграфаванне дазволена. Аднак, калі ласка, звярніце ўвагу на забарону выкарыстання ўспышкі і патрабаванні да захаванасці экспанатаў.",
    gos1Title: 'Музей "Выратаваныя мастацкія каштоўнасці"',
    gos2Title: "Камянецкая вежа",
    gos3Title: "Мастацкі музей",
    gos4Title: "Брэсцкі абласны краязнаўчы музей",
    country: "Рэспубліка Беларусь",
    footerText:
      "Археалагічны музей «Бярэсце» - адзіны ў свеце музей сярэднявечнага ўсходнеславянскага горада, размешчаны на месцы дзяцінца старажытнага Бярэсця.",
    years: "© Бярэсце 1982-2023",
    docs1: "Карыстальніцкае Пагадненне",
    docs2: "Палітыка прыватнасці",
    hoursTitle: "Час працы",
    hours1: "Пн-Нд: 10:00 - 18: 00",
    hours2: "+375 162 53 10 11",
    hours3: "brest_museum@brest.by",
    hours4: "224018, г. Брэст, праезд прыгонны, 15",
    exhibitsTitle: "Галерэя Музейных Экспанатаў",
    contactUs: "Звяжыцеся з намі - будзем рады!",
    contactUsText:
      "Акунуцца ў свет ведаў і адкрыццяў разам з намі! Сардэчна запрашаем у музей 'Бярэсце', дзе культура і пазнанне пераплятаюцца ў займальным танцы!",
    contactUsTitle: "Археалагічны музей «Бярэсце»",
    contactUsInfo:
      "Наш адэрс: г. Брэст, праезд прыгонны, 15\nрэжым працы:\nВерасень-Красавік: з 10.00 да 18.00 (каса да 17.30)Май-жнівень: з 10.00 да 19.00 (каса да 18.30)\nБез выхадных\nТэлефон: +375 162 53 10 11",
    add1Title:
      "3D-акуляры дэманструюць праграмы віртуальнай рэальнасці, панарамы старажытнага Бярэсця",
    add2Title: "Тэматычная і аглядная экскурсія па археалагічным музеі",
    add3Title: "Тэматычная экскурсія па прылеглай тэрыторыі",
    ticketType: "Тып білета",
    adult: "Дарослы\n7.50",
    student: "Студэнт\n5.70",
    schoolboy: "Школьнік\n3.70",
    preschooler: "Дашкольнік\nБясплатна",
    addService: "Дадатковыя паслугі",
    add1: "Тэматычная экскурсія - 24 Р.",
    add2: "Аглядная экскурсія (1-3 класы) - 14 р.",
    add3: "Дэманстрацыя праграмы 3D панарамы старажытнага Бярэсця XIII стагоддзя - 5 р.",
    cardDetails: "Дэталі карты",
    priceTotla: "Усяго: ",
    pay: "Аплаціць",
    policy: "Згоду на апрацоўку персанальных дадзеных",
    policyText: "Даю згоду Музею «Бярэсце» (юрыдычны адрас: 224018, г.  Брэст, праезд, 15) на апрацоўку маіх персанальных дадзеных: Прозвішча, імя, кантактны мабільны тэлефон, адрас электроннай пошты, аўтаматызаваным і неаўтаматызаваным спосабам у мэтах устанаўлення зваротнай сувязі, атрымання кансультацый, рассылкі рэкламных паведамленняў і маркетынгу, правядзення пераддагаворных перамоў па пытаннях куплі паслуг музея.\n у названых мэтах Я даю згоду на ажыццяўленне наступных дзеянняў з маімі персанальнымі дадзенымі: збор, сістэматызацыя, назапашванне, захоўванне, ўдакладненне (абнаўленне, змяненне), выманне, выкарыстанне, обезличивание, блякаваньне, выдаленне, знішчэнне.\ n мне растлумачаны правы, звязаныя з апрацоўкай маіх персанальных дадзеных, механізм рэалізацыі такіх правоў, а таксама наступствы дачы мною згоды або адмовы ў дачы такой згоды.\n я згодны(а) з тым, што: \ n згоду на апрацоўку персанальных дадзеных дзейнічае з даты прадастаўлення гэтага згоды да дасягнення мэтаў апрацоўкі персанальных дадзеных."
  },
};
