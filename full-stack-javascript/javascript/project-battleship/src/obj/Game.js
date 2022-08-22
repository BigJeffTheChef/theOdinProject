/**
one player take turn
  chose a spot to attack enemy gameboard, that has not been previously attacked
    if a hit
      mark square as hit
    if a miss mark square as a miss
if ship sunk mark as such
if all ships sunk game over
*/

import Gameboard from './Gameboard';
import Player from './Player';

function startGame(p1, p2, p1Gameboard, p2Gameboard) {
  // instantiate game objects
  const gameData = [
    { player: p1, board: p1Gameboard },
    { player: p2, board: p2Gameboard },
  ];
  let currentPlayer = 0;

  // !gameObjs[0].board.allSunk() && !gameObjs[1].board.allSunk()
  while (validMovesRemaining(gameData)) {
    ({ x, y } = gameData[currentPlayer].player.attack(x, y));
    console.log(x, y);
    gameData[enemyPlayer].board.receiveAttack(x, y);
    renderBoards(gameData);
    currentPlayer = (currentPlayer === 0) ? 1 : 0; // switch player
    tmpCounter++;
  }
}

function validMovesRemaining(gameData) {
  return gameData.playerComputer.validMoves.length > 0 && gameData.playerComputer.validMoves.length > 0;
}

let x = 0;
let y = 0;

function getAttackCoords() {
  return { x: x++, y: y++ };
}

function renderBoards() {
  console.log('render board not implemented');
}

function placeShips(board) {
  board.placeShip('carrier', 0, 0, true);
}

// eslint-disable-next-line import/prefer-default-export
export { startGame };
