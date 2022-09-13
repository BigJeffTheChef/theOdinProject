import GameData from './GameData.js';
import Player from './Player.js';
// eslint-disable-next-line import/no-cycle
import { renderBoards, declareWinner } from '../web/ui.js';
import Gameboard from './Gameboard.js';

let gameData = null;
let gameActive = false;

export async function startGame(b1, b2) {
  // set game data
  gameActive = true;
  gameData = new GameData(
    new Player(true),
    new Player(false),
    b1,
    b2,
  );
  renderBoards(gameData);
}

/**
 * This is an event handler that is activated each time a valid board square is clicked.
 * @param {number} x x co-ordinate of gameboard (outer array index)
 * @param {number} y y co-ordinate              (inner array index)
 * @param {number} playerIndex the index of the current player for use in gameData.players[index].
 */
export function onSquareClick(x, y, playerIndex) {
  if (!gameActive || gameData === null || gameData.enemyPlayer !== playerIndex) return;
  gameData.players[playerIndex].board.receiveAttack(x, y);

  // check for game win

  if (gameData.players[playerIndex].board.allSunk()) {
    gameActive = false;
    declareWinner(`Gameover! ${playerIndex === 0 ? 'Computer' : 'Human'} player wins!`);
  }

  // change player and render new move

  gameData.changePlayer();
  renderBoards(gameData);

  // if new player is a computer player then make select it's move

  if (!gameData.isCurrentPlayerHuman()) {
    setTimeout(() => {
      const attackCoords = gameData.players[gameData.currentPlayer].player.attack();
      onSquareClick(attackCoords.x, attackCoords.y, gameData.enemyPlayer);
    }, 250);
  }
}

/**
 * Creates a Gameboard and randomly places ships onto it, for the computer player. Returns the Gameboard with the placed ships
 * @param {String[]} ships names of all ships to be placed
 */
export function placeShipsForComputer(ships) {
  const board = new Gameboard();
  for (const ship of ships) {
    let complete = false;
    while (!complete) {
      complete = board.placeShip(
        ship,
        parseInt(Math.random() * 10, 10),
        parseInt(Math.random() * 10, 10),
        Math.random() < 0.5,
      );
    }
  }
  return board;
}
