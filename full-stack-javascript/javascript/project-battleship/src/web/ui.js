import settings from '../settings.json';
// eslint-disable-next-line import/no-cycle
import { startGame, onSquareClick, placeShipsForComputer } from '../obj/Game.js';
import Gameboard from '../obj/Gameboard';

const BOARD_SIZE = settings['gameboard-size'];
const SHIPS = settings.ships;
const TEST_MODE = settings['test-mode'];
let placedShips = 0;

/**
 * Prepares components for game play
 */
export default function initialize() {
  // dom elements

  const containerShipPlacer = document.body.querySelector('.container-ship-placer');
  const containerIntro = document.querySelector('.container-intro');
  const buttonPlay = containerIntro.querySelector('#button-play');
  const placingBoard = containerShipPlacer.querySelector('.placing-board');
  const shipChooser = containerShipPlacer.querySelector('.ship-chooser');
  const constructionBoard = new Gameboard();

  // create a board for placing ships onto

  placingBoard.appendChild(buildBoardElement(BOARD_SIZE, 0, true));

  // create draggable ship representations

  for (const ship of SHIPS) {
    const shipDraggable = document.createElement('div');
    shipDraggable.classList.add('ship-draggable');
    shipDraggable.draggable = true;
    shipDraggable.dataset.shipName = ship.name;
    for (let i = 0; i < ship.size; i++) { // add boxs up to ship length
      shipDraggable.appendChild(document.createElement('div'));
    }
    shipChooser.append(shipDraggable);
  }

  // ship placement direction button (vertical/ horizontal)

  const directionButton = document.createElement('button');
  directionButton.type = 'button';
  directionButton.className = 'direction-button';
  directionButton.textContent = 'horizontal';
  directionButton.addEventListener('click', () => {
    const vertical = directionButton.textContent === 'vertical';
    directionButton.textContent = vertical ? 'horizontal' : 'vertical';
  });
  shipChooser.appendChild(directionButton);

  // register event listeners

  buttonPlay.addEventListener('click', () => {
    containerShipPlacer.classList.remove('hidden');
    containerIntro.classList.add('hidden');
  });

  for (const draggable of document.querySelectorAll('.ship-draggable')) {
    draggable.addEventListener('dragstart', e => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggable.dataset.shipName);
    });
  }

  for (const droppable of document.querySelectorAll('.board.square')) {
    droppable.addEventListener('dragover', e => {
      e.preventDefault();
    });
    // eslint-disable-next-line no-loop-func
    droppable.addEventListener('drop', e => {
      const dataShipName = e.dataTransfer.getData('text/plain'); // "patrol boat" etc
      e.dataTransfer.dropEffect = 'move';
      e.preventDefault();
      const draggingShip = document.querySelector(`.ship-draggable[data-ship-name="${dataShipName}"]`);
      const accepted = constructionBoard.placeShip(
        draggingShip.dataset.shipName,
        parseInt(e.target.dataset.col, 10),
        parseInt(e.target.dataset.row, 10),
        document.querySelector('.direction-button').textContent === 'vertical',
      );
      if (accepted) {
        placedShips++;
        renderNew(document.querySelector('.placing-board>.board'), constructionBoard);
        document.querySelector('.ship-chooser').removeChild(draggingShip);
        if (placedShips === SHIPS.length) {
          placedShips = 0;
          const b = placeShipsForComputer(SHIPS.map(shipDetails => shipDetails.name));
          prepareUIForGame();
          startGame(constructionBoard, b);
        }
      }
    });
  }

  // if test mode is true, then skip play button, and ship placement screen, and just start game with randomly placed ships

  if (TEST_MODE) {
    buttonPlay.click();
    containerShipPlacer.classList.add('hidden');
    containerIntro.classList.add('hidden');
    prepareUIForGame();
    startGame(
      placeShipsForComputer(SHIPS.map(e => e.name)),
      placeShipsForComputer(SHIPS.map(e => e.name)),
    );
  }
}

/**
 * Prepares the UI for a new game.
 * The ship-placer board  is removed, and the ship placer container div is hidden.
 * The real board container and game info container are then shown.
 */
function prepareUIForGame() {
  // Close ship placer (and also remove placing board - regenerate if needed)

  const containerShipPlacer = document.querySelector('.container-ship-placer');
  containerShipPlacer.removeChild(document.querySelector('.placing-board'));
  containerShipPlacer.classList.add('hidden');

  // show container board and container game info

  const containerBoards = document.querySelector('.container-board');
  containerBoards.classList.remove('hidden');

  const containerGameInfo = document.querySelector('.container-game-info');
  containerGameInfo.classList.remove('hidden');

  // append new empty board to container boards

  containerBoards.appendChild(buildBoardElement(BOARD_SIZE, 0));
  containerBoards.appendChild(buildBoardElement(BOARD_SIZE, 1));
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
  board.id = (playerIndex === 0) ? 'player1' : 'player2';
  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let colIndex = 0; colIndex < boardSize; colIndex++) {
      const square = document.createElement('div');
      square.className = 'board square';
      square.dataset.col = colIndex;
      square.dataset.row = rowIndex;
      // eslint-disable-next-line no-unused-vars
      square.addEventListener('click', (el, event) => {
        if (!el.srcElement.classList.contains('struck')) {
          onSquareClick(colIndex, rowIndex, playerIndex);
        } else {
          const msg = document.querySelector('.info-msg');
          msg.textContent = 'already attacked this square!';
          setTimeout(() => { msg.textContent = ''; }, 3000);
        }
      });
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}

/**
 * @param {HTMLDivElement} uiElement the board div
 * @param {Gameboard} board the Gameboard object underpinning the uiElement
 */
export function renderNew(uiElement, board) {
  for (let row = 0; row < board.size; row++) {
    for (let col = 0; col < board.size; col++) {
      processBoardSquare(
        uiElement.childNodes[row].childNodes[col],
        board.board[row][col],
      );
    }
  }
}

/**
 * Iterate through.
 * @param {GameData} gameData
 */
export function renderBoards(gameData) {
  // const uib1 = document.querySelector('player1');
  // const uib2 = document.querySelector('player2');

  // for (let row = 0; row < gameData.p1.board.size; row++) {
  //   for (let col = 0; col < gameData.p1.board.size; col++) {
  //     processBoardSquare(
  //       document.querySelector('#player1').childNodes[row].childNodes[col],
  //       gameData.p1.board.board[row][col],
  //     );
  //     processBoardSquare(
  //       document.querySelector('#player2').childNodes[row].childNodes[col],
  //       gameData.p2.board.board[row][col],
  //     );
  //   }
  // }
  // document.querySelector('.current-player>span').textContent = gameData.currentPlayer + 1;
  renderNew(document.querySelector('#player1'), gameData.p1.board);
  renderNew(document.querySelector('#player2'), gameData.p2.board);
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

export function declareWinner(message) {
  document.querySelector('.info-msg').textContent = message;
}

// eslint-disable-next-line import/prefer-default-export
