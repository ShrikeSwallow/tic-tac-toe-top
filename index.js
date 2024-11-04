const gameboard = (() => {
  const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const fillSpace = (position, symbol) => {
    board[position] = symbol;
  };
  return { board, fillSpace };
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

display.draw(gameboard.board);
for (let i = 0; i < 5; i++) {
  player1.turn();
  display.draw(gameboard.board);
  player2.turn();
  display.draw(gameboard.board);
}
