/* eslint-disable no-param-reassign */
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
 * @param {GameData} gameData an object that holds game state
 */
function renderBoards(gameData) {
  const data = {
    b1Obj: gameData.p1.board,
    b1Dom: document.querySelector('#boardPlayer'),
    b2Obj: gameData.p2.board,
    b2Dom: document.querySelector('#boardComputer'),
  };

  for (let row = 0; row < data.b1Obj.size; row++) {
    for (let col = 0; col < data.b1Obj.size; col++) {
      data.p1SquareObj = data.b1Obj.board[row][col];
      data.p1SquareDom = data.b1Dom.childNodes[row].childNodes[col];
      data.p2SquareObj = data.b2Obj.board[row][col];
      data.p2SquareDom = data.b2Dom.childNodes[row].childNodes[col];
      humanSquareHandle();
      computerSquareHandle(row, col);
    }
  }

  function humanSquareHandle() {
    data.p1SquareDom.className = 'board square';
    const shipFound = data.p1SquareObj !== null;
    if (shipFound) data.p1SquareDom.classList.add('ship');
    const positionStruck = data.p1SquareObj.ship.hull[data.p1SquareObj.shipHullIndex];

    if (shipFound)
    
    if (shipIsStruck) data.p1SquareDom.classList.add('struck');
  }

  function computerSquareHandle(row, col) {
    data.p2SquareDom.className = 'board square';
    const missAt = data.b2Obj.misses.reduce((prev, cur) => (cur.x === col && cur.y === row) ? true : prev, false);
    // const missAt = b2Obj.misses.indexOf({ x: col, y: row }) !== -1;
    const shipAtStruck = (data.p2SquareObj !== null && data.p2SquareObj.ship.hull[data.p2SquareObj.shipHullIndex] === true);
    if (shipAtStruck) {
      data.p2SquareDom.className = 'board square struck-hit';
    } else if (missAt) {
      data.p2SquareDom.className = 'board square struck-miss';
    } else {
      data.p2SquareDom.className = 'board square';
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { initializeDOM, renderBoards };
