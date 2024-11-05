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
    activePlayer = player1;
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", (event) => {
        if (!cell.hasChildNodes()) {
          display.draw(activePlayer, event.currentTarget);
          if (findWinner(activePlayer.symbol)) {
            console.log(activePlayer);
            setTimeout(() => {
              alert(`${activePlayer.name} is a winner!`);
            }, 100);
          } else {
            swapPlayers();
          }
        }
      });
    });
  };
  return { board, symbols, fillSpace, playGame };
})();

const display = (() => {
  const gameContainer = document.querySelector(".game-container");

  const init = () => {
    gameContainer.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
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

const controlPanel = (() => {
  const newGameBtn = document.querySelector(".new-game-btn");
  const renameBtn = document.querySelector(".rename-players-btn");

  const newGame = () => {
    if (player1.name === "" || player2.name === "") {
      renamePlayers();
    }
    reset();
    gameboard.playGame(player1, player2);
  };
  const renamePlayers = () => {
    player1.name = prompt(`Enter new name for Player 1 (x)`);
    player2.name = prompt(`Enter new name for Player 2 (o)`);
  };
  const reset = () => {
    for (let i = 0; i < 9; i++) {
      gameboard.board[i] = "";
    }
    console.log(gameboard.board);
    display.init();
  };
  return { newGameBtn, renameBtn, newGame, renamePlayers };
})();

const createPlayer = (name, symbol) => {
  return { name, symbol };
};
const player1 = createPlayer("", "x");
const player2 = createPlayer("", "o");

controlPanel.newGameBtn.addEventListener("click", () => {
  controlPanel.newGame();
});

controlPanel.renameBtn.addEventListener("click", () => {
  controlPanel.renamePlayers();
});
