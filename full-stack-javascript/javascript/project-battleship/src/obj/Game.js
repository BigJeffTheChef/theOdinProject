import Player from './Player';
import Gameboard from './Gameboard';
import { renderBoards } from '../web/dom.js';
import settings from './settings.json';

let gameData = null;

/**
 * Object that holds game state
 */
function GameData() {
  this.p1 = { player: new Player(true), board: new Gameboard() };
  this.p2 = { player: new Player(false), board: new Gameboard() };
  this.currentPlayer = this.p1;
  this.enemyPlayer = this.p2;
}

/**
 * Swaps currentPlayer and enemyPlayer of gameData
 */
GameData.prototype.changePlayer = function changePlayer() {
  const tmp = gameData.currentPlayer;
  gameData.currentPlayer = gameData.enemyPlayer;
  gameData.enemyPlayer = tmp;
};

function initGame() {
  gameData = new GameData();
  placeShipsRandomly();
  renderBoards(gameData);
}

function round() {

}

function placeShipsRandomly() {
  const { ships } = settings;
  // eslint-disable-next-line no-restricted-syntax
  let y = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const ship of ships) {
    gameData.p1.board.placeShip(ship.name, 0, y, false);
    gameData.p1.board.receiveAttack(0, y);
    gameData.p2.board.placeShip(ship.name, 0, y, false);
    gameData.p2.board.receiveAttack(0, y);
    y++;
  }
  gameData.p1.board.receiveAttack(9, 9);
  gameData.p2.board.receiveAttack(3, 0);
}

// eslint-disable-next-line import/prefer-default-export
export { initGame };
