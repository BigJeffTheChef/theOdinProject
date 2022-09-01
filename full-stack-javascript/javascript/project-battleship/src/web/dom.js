import settings from '../obj/settings.json';
// eslint-disable-next-line import/no-cycle
import { initGame, onSquareClick } from '../obj/Game.js';

const BOARD_SIZE = settings['gameboard-size'];
/**
 * Build Battleships UI
 */
function initializeDOM() {
  const containerBoard = document.body.querySelector('.board-container');
  const containerGameInfo = document.body.querySelector('.game-info-container');
  const currentPlayer = containerGameInfo.querySelector('.current-player>span');
  console.dir(currentPlayer);
  const containerIntro = document.querySelector('.intro-container');
  const buttonPlay = containerIntro.querySelector('#button-play');

  containerBoard.innerHTML = ''; // clear old dom elements out of board-container
  containerBoard.appendChild(buildBoardElement(BOARD_SIZE, 0));
  containerBoard.appendChild(buildBoardElement(BOARD_SIZE, 1));
  buttonPlay.addEventListener('click', () => {
    containerBoard.classList.remove('hidden');
    containerGameInfo.classList.remove('hidden');
    containerIntro.classList.add('hidden');
    currentPlayer.textContent = '1';
    initGame();
  });
}

/**
 * Create a visual representation of a Gameboard
 * @param {number} boardSize the length of the gameboard sides
 * @param {string} id id attribute of this HTML element
 * @returns HTMLDivElement
 */
function buildBoardElement(boardSize, playerIndex) {
  const board = document.createElement('div');
  board.className = 'board';
  board.id = (playerIndex === 0) ? 'boardPlayer' : 'boardComputer';
  for (let x = 0; x < boardSize; x++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let y = 0; y < boardSize; y++) {
      const square = document.createElement('div');
      square.className = 'board square';
      square.dataset.col = y;
      square.dataset.row = x;
      square.addEventListener('click', () => onSquareClick(y, x, playerIndex));
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
      processBoardSquare(
        document.querySelector('#boardPlayer').childNodes[row].childNodes[col],
        gameData.p1.board.board[row][col],
      );
      processBoardSquare(
        document.querySelector('#boardComputer').childNodes[row].childNodes[col],
        gameData.p2.board.board[row][col],
      );
    }
  }
  document.querySelector('.current-player>span').textContent = gameData.currentPlayer + 1;
}

/**
   * Takes a pair of connected squares. One is a HTMLDivElement from the UI, the other is a square from the Gameboard object's
   * board property.
   * @param {HTMLDivElement} uiSquare
   * @param {BoardPlacement} dataSquare
   */
function processBoardSquare(uiSquare, dataSquare) {
  // if square is empty
  if (dataSquare === null) {
    uiSquare.classList.remove('ship');
    return;
  }

  // if square contains a board placement aka a ship
  if (typeof dataSquare === 'object') {
    uiSquare.classList.add('ship');
    if (dataSquare.isStruck()) {
      uiSquare.classList.add('struck');
    }
  }

  // if square contains a string, indicating a miss
  if (typeof dataSquare === 'string') {
    uiSquare.classList.add('struck');
  }
}

// eslint-disable-next-line import/prefer-default-export
export { initializeDOM, renderBoards };
