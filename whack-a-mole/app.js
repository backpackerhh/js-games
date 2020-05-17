const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
let timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let result = 0;
let currentTime = timeLeft.textContent;

const randomSquare = () => {
  squares.forEach((square) => square.classList.remove("mole"));

  let randomPosition = squares[Math.floor(Math.random() * squares.length)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
};

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(randomSquareTimerId);

    alert(`GAME OVER! Your final score is ${result}`);
  }
};

squares.forEach((square) => {
  square.addEventListener("mouseup", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;

      hitPosition = null;
    }
  });
});

let countDownTimerId = setInterval(countDown, 1000);
let randomSquareTimerId = setInterval(randomSquare, 500);
