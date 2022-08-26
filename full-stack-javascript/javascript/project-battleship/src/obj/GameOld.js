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
import settings from './settings.json';
// eslint-disable-next-line import/named
import { renderBoards } from '../web/dom.js';

const gameData = new GameData();

function GameData() {
  this.p1 = { player: null, board: null };
  this.p2 = { player: null, board: null };
  this.currentPlayer = this.p1;
  this.enemyPlayer = this.p2;
}

/**
 * - Render boards
 * - get attack
 *    - from ui
 *    - from player object
 * - process move
 */
function initGame() {
  gameData.p1.player = new Player(true);
  gameData.p1.board = new Gameboard();
  gameData.p2.player = new Player(false);
  gameData.p2.board = new Gameboard();
  gameData.currentPlayer = 0;
  gameData.enemyPlayer = 1;
  renderBoards(gameData);
}

function turn(coords) {
  // get coords as param
  // attack coords
  // next turn
}


async function startGame() {
  // instantiate game objects
  gameData.p1.player = new Player(true);
  gameData.p1.board = new Gameboard();
  gameData.p2.player = new Player(false);
  gameData.p2.board = new Gameboard();
  gameData.currentPlayer = 0;
  gameData.enemyPlayer = 1;

  placeShipsRandomly();
  renderBoards(gameData);

  while (validMovesRemaining(gameData)) {
    const attackMove = gameData[currentPlayer].attack();
    gameData[enemyPlayer].board.receiveAttack(attackMove.x, attackMove.y);
    renderBoards(gameData);
    switchPlayer();
  }


}

function switchPlayer() {
  const tmp = gameData.currentPlayer;
  gameData.currentPlayer = gameData.enemyPlayer;
  gameData.enemyPlayer = tmp;
}

function placeShipsRandomly() {
  const { ships } = settings;
  // eslint-disable-next-line no-restricted-syntax
  let y = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const ship of ships) {
    gameData[0].board.placeShip(ship.name, 0, y, false);
    gameData[0].board.receiveAttack(0, y);
    gameData[1].board.placeShip(ship.name, 0, y, false);
    gameData[1].board.receiveAttack(0, y);
    y++;
  }
  gameData[0].board.receiveAttack(9, 9);
  gameData[1].board.receiveAttack(3, 0);
}

function validMovesRemaining(gameData) {
  return gameData[0].player.validMoves.length > 0 && gameData[1].player.validMoves.length > 0;
}

async function getAttackCoords(player) {
  let attack = player.attack();
  if (attack === null) {

    //attack = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) };
  }
  return attack;
}

// eslint-disable-next-line import/prefer-default-export
export { startGame };
