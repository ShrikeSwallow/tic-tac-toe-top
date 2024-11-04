const gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const draw = () => {
    board.forEach((ele) => {
      console.log(`|${ele}|`);
    });
  };
  const play = (position, symbol) => {
    board[position] = symbol;
  };
  return { draw, play };
})();

gameboard.draw();
gameboard.play(1, "X");
gameboard.draw();
