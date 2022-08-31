import settings from '../obj/settings.json';
// eslint-disable-next-line import/no-cycle
import { onSquareClick } from '../obj/Game.js';

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
      square.dataset.col = y;
      square.dataset.row = x;
      square.addEventListener('click', () => onSquareClick(y, x, id));
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}

/**
 * Iterate through.
 * @param {GameData} gameData
 */
function renderBoards(gameData) {
  for (let row = 0; row < gameData.p1.board.size; row++) {
    for (let col = 0; col < gameData.p1.board.size; col++) {
      squareHandle(
        document.querySelector('#boardPlayer').childNodes[row].childNodes[col],
        gameData.p1.board.board[row][col],
      );
      squareHandle(
        document.querySelector('#boardComputer').childNodes[row].childNodes[col],
        gameData.p2.board.board[row][col],
      );
    }
  }

  /**
   * Takes a pair of connected squares. One is a HTMLDivElement from the UI, the other is a square from the Gameboard object's
   * board property.
   * @param {HTMLDivElement} uiSquare
   * @param {BoardPlacement} dataSquare
   */
  function squareHandle(uiSquare, dataSquare) {
    // if ship found, add ship class
    // if spot struck, add struck class
    //    empty square struck
    //    ship struck

    // if square is empty
    if (dataSquare === null) {
      uiSquare.classList.remove('ship');
      return;
    }

    if (typeof dataSquare === 'object') {
      uiSquare.classList.add('ship');
      if (dataSquare.isStruck()) {
        uiSquare.classList.add('struck');
      }
    }

    if (typeof dataSquare === 'string') {
      uiSquare.classList.add('struck');
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { initializeDOM, renderBoards };
