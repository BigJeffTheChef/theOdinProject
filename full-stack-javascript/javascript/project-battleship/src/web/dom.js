import settings from '../obj/settings.json';

const BOARD_SIZE = settings['gameboard-size'];

/**
 * Build Battleships UI
 */
function initializeDOM() {
  // place a couple of test ships
  const container = document.body.querySelector('.board-container');
  container.appendChild(buildBoardElement(BOARD_SIZE, 'boardPlayer'));
  container.appendChild(buildBoardElement(BOARD_SIZE, 'boardComputer'));
}

/**
 * Create a visual representation of a Gameboard
 * @param {number} boardSize the length of the gameboard sides
 * @param {string} id id attribute of this HTML element
 * @returns HTMLDivElement
 */
function buildBoardElement(boardSize, id) {
  const board = document.createElement('div');
  board.className = 'board';
  board.id = id;
  for (let x = 0; x < boardSize; x++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let y = 0; y < boardSize; y++) {
      const square = document.createElement('div');
      square.className = 'board square';
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}

/**
 *
 * @param {*} playerHuman
 * @param {*} playerComputer
 */
function placeShips(players, boards) {
  console.log('placeShips not implemented');
}

// eslint-disable-next-line import/prefer-default-export
export { initializeDOM };
