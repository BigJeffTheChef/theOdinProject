/**
 * Create a visual representation of a Gameboard
 * @param {Gameboard} gameboard the gameboard object backing this element
 * @param {string} id id attribute of this HTML element
 * @returns HTMLDivElement
 */
export default function buildBoardElement(gameboard, id) {
  const board = document.createElement('div');
  board.className = 'board';
  board.id = id;
  for (let x = 0; x < gameboard.size; x++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let y = 0; y < gameboard.size; y++) {
      const square = document.createElement('div');
      square.className = 'board square';
      const backingSquare = gameboard.board[y][x];
      if (backingSquare !== null) {
        if (backingSquare.ship.hull[backingSquare.shipHullIndex]) {
          square.style['background-color'] = 'red';
        } else {
          square.style['background-color'] = 'green';
        }
      }
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}
