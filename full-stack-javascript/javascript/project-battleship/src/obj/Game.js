import GameData from './GameData.js';
import Player from './Player.js';
import { renderBoards } from '../web/dom.js';
import settings from './settings.json';
import Gameboard from './Gameboard.js';

let gameData = null;

export function initGame() {
  gameData = new GameData(
    new Player(true),
    new Player(false),
    new Gameboard(),
    new Gameboard(),
  );
  placeShipsRandomly();
  renderBoards(gameData);
}

export function onSquareClick(x, y, boardId) {
  console.log(`x: ${x}, y: ${y} - ${boardId}`);
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
