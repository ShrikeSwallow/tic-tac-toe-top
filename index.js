const gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
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
  const playGame = (player1, player2) => {
    display.draw(board);
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
    }
  };
  return { board, fillSpace, playGame };
})();

const display = (() => {
  const draw = (board) => {
    console.log(`
         ${board[0]} | ${board[1]} | ${board[2]}
        -----------
         ${board[3]} | ${board[4]} | ${board[5]}
        -----------
         ${board[6]} | ${board[7]} | ${board[8]}`);
  };
  return { draw };
})();

const createPlayer = (name, symbol) => {
  const turn = () => {
    const position = prompt(`${name}, it's your turn!`);
    let choice = Number.parseInt(position);
    gameboard.fillSpace(choice, symbol);
  };
  return { name, symbol, turn };
};

const player1 = createPlayer("mac", "x");
const player2 = createPlayer("ben", "o");
gameboard.playGame(player1, player2);

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
