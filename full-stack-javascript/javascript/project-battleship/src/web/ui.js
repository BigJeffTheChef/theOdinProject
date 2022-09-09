import settings from '../settings.json';
// eslint-disable-next-line import/no-cycle
import { startGame, onSquareClick } from '../obj/Game.js';
import Ship from '../obj/Ship.js';
import Gameboard from '../obj/Gameboard';

const BOARD_SIZE = settings['gameboard-size'];
const SHIPS = settings.ships;
let constructionBoard = new Gameboard();

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
  constructionBoard = new Gameboard();

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
    //shipDraggable.addEventListener('dragstart', () => shipDraggable.classList.add('dragging'));
    //shipDraggable.addEventListener('dragend', () => shipDraggable.classList.remove('dragging'));
    shipChooser.append(shipDraggable);
  }

  // register event listeners
  buttonPlay.addEventListener('click', () => {
    // containerBoard.classList.remove('hidden');
    containerShipPlacer.classList.remove('hidden');
    containerIntro.classList.add('hidden');
    startGame();
  });
  for (const draggable of document.querySelectorAll('.ship-draggable')) {
    draggable.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', draggable.dataset.shipName);
    });
  }
  for (const droppable of document.querySelectorAll('.board.square')) {
    droppable.addEventListener('dragover', e => {
      e.preventDefault();
    });
    droppable.addEventListener('drop', e => {
      const id = e.dataTransfer.getData('text/plain');
      console.log(id);
      const draggingShip = document.querySelector('#' + id);
      const accepted = constructionBoard.placeShip(
    draggingShip.dataset.shipName,
    parseInt(event.target.dataset.col),
    parseInt(event.target.dataset.row),
    false
  );
  if (accepted) {
    renderNew(document.querySelector('.placing-board>.board'), constructionBoard);
    document.querySelector('.ship-chooser').removeChild(draggingShip);
  }
    });
  }

  buttonPlay.click(); // jumps past play button by pressing it
}

/**
 * draggable ship dropping event handler
 * @param {event} event drop event
 */
// function dropShipHandler(event) {
//   event.preventDefault();
//   const draggingShip = document.querySelector('.dragging');
//   const accepted = constructionBoard.placeShip(
//     draggingShip.dataset.shipName,
//     parseInt(event.target.dataset.col),
//     parseInt(event.target.dataset.row),
//     false
//   );
//   if (accepted) {
//     renderNew(document.querySelector('.placing-board>.board'), constructionBoard);
//     document.querySelector('.ship-chooser').removeChild(draggingShip);
//   }
// }

function allowDropShip(event) {

}

/**
 * Create a visual representation of a Gameboard
 * @param {number} boardSize the length of the gameboard sides
 * @param {string} id id attribute of this HTML element
 * @param {boolean} isChooser set to true when a UI board is being created for ship placement. Defaults to false.
 * @returns HTMLDivElement
 */
function buildBoardElement(boardSize, playerIndex, isChooser = false) {
  const board = document.createElement('div');
  board.className = 'board';
  board.id = (playerIndex === 0) ? 'boardPlayer' : 'boardComputer';
  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let colIndex = 0; colIndex < boardSize; colIndex++) {
      const square = document.createElement('div');
      square.className = 'board square';
      square.dataset.col = colIndex;
      square.dataset.row = rowIndex;
      square.addEventListener('click', (el, event) => {
        if (!el.srcElement.classList.contains('struck')) {
          onSquareClick(colIndex, rowIndex, playerIndex);
        } else {
          const msg = document.querySelector('.info-msg');
          msg.textContent = 'already attacked this square!';
          setTimeout(() => { msg.textContent = ''; }, 3000);
        }
      });
      // if (isChooser) {
      //   square.addEventListener('dragenter', () => square.classList.add('ship-hovered'));
      //   square.addEventListener('dragleave', () => square.classList.remove('ship-hovered'));
      //   square.addEventListener('dragover', e => e.preventDefault());
      //   square.addEventListener('drop', e => {
      //     square.classList.remove('ship-hovered');
      //     dropShipHandler(e)
      //   });
      // }
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}

/**
 * 
 * @param {HTMLDivElement} uiElement 
 * @param {Gameboard} board 
 */
function renderNew(uiElement, board) {
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
  const uib1 = document.querySelector('boardPlayer');
  const uib2 = document.querySelector('boardComputer');

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

export function declareWinner(message) {
  document.querySelector('.info-msg').textContent = message;
}

// eslint-disable-next-line import/prefer-default-export
