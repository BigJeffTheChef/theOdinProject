import GameData from './GameData.js';
import Player from './Player.js';
// eslint-disable-next-line import/no-cycle
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

export function onSquareClick(x, y, playerIndex) {
  if (gameData.enemyPlayer === playerIndex) {
    console.log(`x: ${x}, y: ${y}, playerIndex ${playerIndex}`);
    gameData.players[playerIndex].board.receiveAttack(x, y);
    gameData.changePlayer();
    renderBoards(gameData);
  } else {
    console.log('aint ya go son, simmer down');
  }
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
