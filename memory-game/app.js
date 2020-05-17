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
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];

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
    let cards = document.querySelectorAll("img");
    const [optionOneId, optionTwoId] = cardsChosenIds;
    const [optionOne, optionTwo] = cardsChosen;

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");

      alert("You have clicked the same image!");
    } else if (optionOne === optionTwo) {
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);

      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionTwoId].removeEventListener("click", flipCard);

      cardsWon.push(cardsChosen);

      alert("You found a match");
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");

      alert("Sorry, try again");
    }

    cardsChosen = [];
    cardsChosenIds = [];

    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === images.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  };

  createBoard();
});
