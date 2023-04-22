let gameBoard = ["x", "", "", "o", "x", "", "", "", "o"];

function playerFactory(name, mark) {
  return { name, mark };
}

const playerOne = playerFactory("Player One", "X");
const playerTwo = playerFactory("Player Two", "O");

(function () {
  const grid = document.querySelector("#grid");
  for (let i = 0; i <= gameBoard.length - 1; i++) {
    let square = document.createElement("div");
    square.classList.add(`square`);
    square.classList.add(`${i + 1}`);
    square.textContent = gameBoard[i];
    grid.appendChild(square);
    function gameOver() {
      const alertBox = document.getElementById('alertBox');
      const alert = document.createElement("h3");
      alertBox.textContent = '';
      alert.textContent = "Press Start to play!";
      alertBox.appendChild(alert);
    }
    square.addEventListener("click", gameOver, { once: true });
  }
  return grid;
})();

function startGame() {
  let computerPlay = false;
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  const grid = document.querySelector("#grid");
  grid.textContent = "";
  for (let i = 0; i <= gameBoard.length - 1; i++) {
    let square = document.createElement("div");
    square.classList.add(`square`);
    square.classList.add(`${i + 1}`);
    square.textContent = gameBoard[i];
    grid.appendChild(square);
    function toogleTurn(){
      return computerPlay != computerPlay;
    }
    square.addEventListener("click", () => {
      if (computerPlay === true) {
        toogleTurn()
        
      } else {
        square.textContent = playerOne.mark;
        toogleTurn()
      }
    });
  }
}
