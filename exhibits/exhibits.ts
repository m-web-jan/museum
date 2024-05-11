import "./style.scss";

const cards = document
  .getElementsByClassName("cards")[0]
  .getElementsByClassName("container")[0];

async function getCards() {
  let data = await fetch("./exhibits.json");
  let json = await data.json();

  for (let i = 0; i < json.length; i++) {
    fillCard(json[i]);
  }
}

getCards();

interface ICard {
  title: string;
  description: string;
  century: string;
  image: string;
  properties: string[];
}

function fillCard(cardData: ICard) {
  const card = document.createElement("div");
  card.onclick = (event) => {
    openModal(cardData);
  };
  card.classList.add("card");
  const cardImg = document.createElement("div");
  cardImg.classList.add("img");
  cardImg.style.backgroundImage = `url(../images/${cardData.image})`;
  const cardTitle = document.createElement("p");
  cardTitle.innerText = cardData.title;

  const cardContent = document.createElement("div");
  cardContent.classList.add("content");
  const cardDescription = document.createElement("p");
  cardDescription.innerHTML = cropText(cardData.description);
  const cardCentury = document.createElement("h2");
  cardCentury.innerText = cardData.century;

  cardImg.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(cardCentury);
  card.appendChild(cardImg);
  card.appendChild(cardContent);

  cards.appendChild(card);
}

function cropText(text: string) {
  if (text.length < 81) return text;
  return `${text.slice(0, 81)}... <p style="color: #2D545E;">Читать далее</p>`;
}

function openModal(cardData: ICard) {
  document.body.style.overflowY = "hidden";
  const modal = document.getElementsByClassName("modal")[0] as HTMLElement;
  modal.getElementsByTagName("img")[0].src = `../images/${cardData.image}`;
  modal.getElementsByTagName("h2")[0].innerText = `${cardData.title}`;
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

export function closeModal() {
  document.body.style.overflowY = "visible";
  const modal = document.getElementsByClassName("modal")[0] as HTMLElement;
  modal.style.display = "none";
}
