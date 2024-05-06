import "./style.scss";

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
    console.log(currentTranslateX);

    currentTranslateX -=
      -cardsCount + 3 !== currentTranslateX / cardWidth ? cardWidth : 0;
    slider.style.transform = `translateX(${currentTranslateX}px)`;
  });
}

animateSlider();
