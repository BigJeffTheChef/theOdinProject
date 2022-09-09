import GameData from './GameData.js';
import Player from './Player.js';
// eslint-disable-next-line import/no-cycle
import { renderBoards, declareWinner } from '../web/ui.js';
import settings from '../settings.json';
import Gameboard from './Gameboard.js';

let gameData = null;
let gameActive = false;

export async function startGame() {
  // set game data
  gameActive = true;
  // gameData = new GameData(
  //   new Player(true),
  //   new Player(false),
  //   new Gameboard(),
  //   new Gameboard(),
  // );

  // prepare ship placing functionality and start
  // placeShipsRandomly();
  // eslint-disable-next-line prefer-template
  // console.log('start ' + Date());
  // placeShipsIntentionally().then(() => {
  //   renderBoards(gameData);
  //   // eslint-disable-next-line prefer-template
  //   console.log('end ' + Date());
  // });
}

/**
 * This is an event handler that is activated each time a valid board square is clicked.
 * @param {number} x x co-ordinate of gameboard (outer array index)
 * @param {number} y y co-ordinate              (inner array index)
 * @param {number} playerIndex the index of the current player for use in gameData.players[index].
 */
export function onSquareClick(x, y, playerIndex) {
  if (!gameActive || gameData === null) return;
  if (gameData.enemyPlayer === playerIndex) {
    gameData.players[playerIndex].board.receiveAttack(x, y);
    if (gameData.players[playerIndex].board.allSunk()) {
      gameActive = false;
      // player has not changed yet, so current player is allSunk & therefore loses.
      declareWinner(`Gameover! ${playerIndex === 0 ? 'Computer' : 'Human'} player wins!`);
    }
    gameData.changePlayer();
    renderBoards(gameData);
    if (!gameData.isCurrentPlayerHuman()) {
      // console.log('computer players go now');
      setTimeout(() => {
        const attackCoords = gameData.players[gameData.currentPlayer].player.attack();
        onSquareClick(attackCoords.x, attackCoords.y, gameData.enemyPlayer);
      }, 1);
    }
  } else {
    // console.log('aint ya go son, simmer down');
  }
}

async function placeShipsIntentionally() {
  // const { ships } = settings;
  // // eslint-disable-next-line no-restricted-syntax
  // let y = 0;
  // // eslint-disable-next-line no-restricted-syntax
  // for (const ship of ships) {
  //   gameData.p1.board.placeShip(ship.name, 0, y, false);
  //   // gameData.p1.board.receiveAttack(0, y);
  //   gameData.p2.board.placeShip(ship.name, 0, y, false);
  //   // gameData.p2.board.receiveAttack(0, y);
  //   y++;
  // }
  // const result = await setTimeout(() => 'hello', 5000);
  // return result;
  // const wait = '';
  // gameData.p1.board.receiveAttack(9, 9);
  // gameData.p2.board.receiveAttack(3, 0);
}

function placeShipsRandomly() {
  const { ships } = settings;
  // eslint-disable-next-line no-restricted-syntax
  let y = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const ship of ships) {
    gameData.p1.board.placeShip(ship.name, 0, y, false);
    // gameData.p1.board.receiveAttack(0, y);
    gameData.p2.board.placeShip(ship.name, 0, y, false);
    // gameData.p2.board.receiveAttack(0, y);
    y++;
  }
  // gameData.p1.board.receiveAttack(9, 9);
  // gameData.p2.board.receiveAttack(3, 0);
}
