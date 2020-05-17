document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenIds = [];

  const createBoard = () => {
    for (let idx = 0; idx < images.length; idx++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", idx);
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  };

  function flipCard() {
    let cardId = this.getAttribute("data-id");

    cardsChosen.push(images[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute("src", images[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  const checkForMatch = () => {
    alert("checkForMatch");
  };

  createBoard();
});
