const gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const symbols = { x: "close", o: "circle" };
  let activePlayer = { name: "", symbol: "" };
  const fillSpace = (position, symbol) => {
    board[position] = symbol;
  };
  const findWinner = (symbol) => {
    const winCon = symbol + symbol + symbol;
    const sequence = [
      board[0] + board[1] + board[2],
      board[3] + board[4] + board[5],
      board[6] + board[7] + board[8],
      board[0] + board[3] + board[6],
      board[1] + board[4] + board[7],
      board[2] + board[5] + board[8],
      board[0] + board[4] + board[8],
      board[2] + board[4] + board[6],
    ];
    if (sequence.includes(winCon)) {
      return true;
    } else {
      return false;
    }
  };
  const swapPlayers = () => {
    if (activePlayer.symbol === "x") {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  };
  const playGame = (player1, player2) => {
    let isWinner = false;
    activePlayer = player1;
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        if (!cell.hasChildNodes()) {
          display.draw(activePlayer, event.currentTarget);
          if (findWinner(activePlayer.symbol)) {
            setTimeout(() => {
              return alert(`${activePlayer.name} is a winner!`);
            }, 100);
          }
          swapPlayers();

          /*const cellText = document.createElement("p");
          cellText.classList.add("material-symbols-outlined");
          gameboard.board[Number.parseInt(cell.dataset.index)] =
            activePlayer.symbol;
          console.log(cell.dataset.index);
          cellText.textContent = `${symbols[activePlayer.symbol] ?? ""}`;
          cell.appendChild(cellText);*/

          // IMPLEMENT PLAYERS TAKING TURNS
        }
      });
    });

    /*display.draw(board);
    let isWinner = false;
    while (!isWinner) {
      player1.turn();
      isWinner = findWinner(player1.symbol);
      display.draw(board);
      if (isWinner) {
        return alert(`${player1.name} is a winner!`);
      }
      player2.turn();
      isWinner = findWinner(player2.symbol);
      display.draw(board);
      if (isWinner) {
        return alert(`${player2.name} is a winner!`);
      }
    }*/
  };
  return { board, symbols, fillSpace, playGame };
})();

const display = (() => {
  const gameContainer = document.querySelector(".game-container");
  //const displaySymbol = { x: "close", o: "circle" };
  const init = () => {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      /*const cellText = document.createElement("p");
      cellText.classList.add("material-symbols-outlined");
      cellText.textContent = `${displaySymbol[gameboard.board[i]] ?? ""}`;
      cell.appendChild(cellText);*/
      gameContainer.appendChild(cell);
    }
    gameContainer.focus();
  };
  const draw = (activePlayer, cell) => {
    const cellText = document.createElement("p");
    cellText.classList.add("material-symbols-outlined");
    gameboard.board[Number.parseInt(cell.dataset.index)] = activePlayer.symbol;
    console.log(cell.dataset.index);
    cellText.textContent = `${gameboard.symbols[activePlayer.symbol] ?? ""}`;
    cell.appendChild(cellText);
  };
  return { draw, init };
})();

const createPlayer = (name, symbol) => {
  return { name, symbol };
};

display.init();

const player1 = createPlayer("mac", "x");
const player2 = createPlayer("ben", "o");
gameboard.playGame(player1, player2);
//gameboard.playGame(player1, player2);

/*let isWinner = false;

display.draw(gameboard.board);
while (!isWinner) {
  player1.turn();
  isWinner = gameboard.findWinner(player1.symbol);
  display.draw(gameboard.board);
  if (isWinner) {
    alert(`${player1.name} is a winner!`);
    break;
  }
  player2.turn();
  isWinner = gameboard.findWinner(player2.symbol);
  display.draw(gameboard.board);
  if (isWinner) {
    alert(`${player2.name} is a winner!`);
  }
}
*/
