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

function renderBoards(gameData) {
  const b1Obj = gameData[0].board;
  const b1Dom = document.querySelector('#boardPlayer');

  const b2Obj = gameData[1].board;
  const b2Dom = document.querySelector('#boardComputer');

  for (let row = 0; row < b1Obj.size; row++) {
    for (let col = 0; col < b1Obj.size; col++) {
      const p1SquareObj = b1Obj.board[row][col];
      const p1SquareDom = b1Dom.childNodes[row].childNodes[col];
      const p2SquareObj = b2Obj.board[row][col];
      const p2SquareDom = b2Dom.childNodes[row].childNodes[col];

      humanSquareHandle(p1SquareObj, p1SquareDom);
      const missAt = b2Obj.misses.reduce((prev, cur) => (cur.x === col && cur.y === row) ? true : prev, false);
      // const missAt = b2Obj.misses.indexOf({ x: col, y: row }) !== -1;
      const shipAtStruck = (p2SquareObj !== null && p2SquareObj.ship.hull[p2SquareObj.shipHullIndex] === true);
      if (shipAtStruck) {
        p2SquareDom.className = 'board square struck-hit';
      } else if (missAt) {
        p2SquareDom.className = 'board square struck-miss';
      } else {
        p2SquareDom.className = 'board square';
      }
    }
  }

  function humanSquareHandle(squareObj, squareDom) {
    if (squareObj === null) {
      // eslint-disable-next-line no-param-reassign
      squareDom.className = 'board square';
    } else {
      // eslint-disable-next-line no-param-reassign
      squareDom.className = 'board square ship';
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { initializeDOM, renderBoards };
