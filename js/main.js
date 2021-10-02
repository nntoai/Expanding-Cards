const firstCard = document.querySelector(".bg1");
const secondCard = document.querySelector(".bg2");
const thirdCard = document.querySelector(".bg3");
const fourthCard = document.querySelector(".bg4");
const fifthCard = document.querySelector(".bg5");
const cards = document.querySelectorAll(".cards");

let cardExpanding = 1;

firstCard.addEventListener("click", () => {
  cardExpanding = 1;
  expand();
});
secondCard.addEventListener("click", () => {
  cardExpanding = 2;
  expand();
});
thirdCard.addEventListener("click", () => {
  cardExpanding = 3;
  expand();
});
fourthCard.addEventListener("click", () => {
  cardExpanding = 4;
  expand();
});
fifthCard.addEventListener("click", () => {
  cardExpanding = 5;
  expand();
});

function expand() {
  cards.forEach((card, index) => {
    if (cardExpanding == index + 1) {
      card.classList.add("expanding");
    } else {
      card.classList.remove("expanding");
    }
  });
  
}
