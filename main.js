let gameBoard = ["x", "", "", "o", "x", "", "", "", "o"];

/// player factory
function playerFactory(name, mark) {
  return { name, mark };
}
/// Place holder for the players

const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playerOne = playerFactory("Player One", "X");
const playerTwo = playerFactory("Player Two", "O");
/// main boot function
(function () {
  const grid = document.querySelector("#grid");
  const gameScreen = document.querySelector("#gameScreen");
  /// start game button
  const startButton = document.createElement("button");
  startButton.textContent = `Let's go`;
  gameScreen.appendChild(startButton);
  startButton.addEventListener("click", startGame);
  for (let i = 0; i <= gameBoard.length - 1; i++) {
    let square = document.createElement("div");
    square.classList.add(`square`);
    square.textContent = gameBoard[i];
    grid.appendChild(square);
    function gameOver() {
      const alertBox = document.getElementById("alertBox");
      const alert = document.createElement("h3");
      alertBox.textContent = "";
      alert.textContent = "Press Start to play!";
      alertBox.appendChild(alert);
    }
    square.addEventListener("click", gameOver, { once: true });
  }
  return { grid, gameOver };
})();

function startGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  const grid = document.querySelector("#grid");
  grid.textContent = "";
  /// counts turn order for multiplayer
  var count = 1;
  /// selects player marker
  function mark() {
    if (count % 2 !== 0) {
      return playerOne.mark;
    }
    if (count % 2 === 0) {
      return playerTwo.mark;
    }
  }
  function checkWin() {
    winStates.forEach((win) => {
      const positionA = win[0];
      const positionB = win[1];
      const positionC = win[2];
      if (
        gameBoard[positionA] === gameBoard[positionB] &&
        gameBoard[positionB] === gameBoard[positionC] &&
        (gameBoard[positionA] !== "" ||
          gameBoard[positionB] !== "" ||
          gameBoard[positionC] !== "")
      ) {
        return alert("it works!!!");
      }
    });
  }
  ///sets up game board
  for (let i = 0; i <= gameBoard.length; i++) {
    let square = document.createElement("div");
    square.classList.add(`square`);
    /// adds new attribute to number the squares so it can be used in updating gameBoard
    square.setAttribute("cellIndex", `${i}`);
    square.textContent = gameBoard[i];
    grid.appendChild(square);
    ///gets a number of a square
    const cellIndex = square.getAttribute(`cellIndex`);
    /// adds an event for puting marks on the board and updating gameBoard array
    square.addEventListener("click", () => {
      if (gameBoard[cellIndex] === "") {
        gameBoard[cellIndex] = mark();
        square.textContent = mark();
        count++;
        checkWin();
        console.log(cellIndex);
      } else return;
    });
  }
}
