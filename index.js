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

display.draw(gameboard.board);
gameboard.fillSpace(1, "X");
display.draw(gameboard.board);
