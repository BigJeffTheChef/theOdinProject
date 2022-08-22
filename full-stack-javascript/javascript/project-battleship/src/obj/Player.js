import { Coord } from './Gameboard.js';
import settings from './settings.json';

const BOARD_SIZE = settings['gameboard-size'];
/**
 * Create a player object
 * @param {boolean} human true if this is a human player, false if it is a computer player
 */
function Player(human) {
  this.human = human;
  this.validMoves = [];
  for (let x = 0; x < BOARD_SIZE; x++) {
    for (let y = 0; y < BOARD_SIZE; y++) {
      this.validMoves.push(new Coord(x, y));
    }
  }
}
/**
 * Uses this valid move, that is, if this is a computer player, attack coordinates will be chosen randomly from
 * this Players validMoves array. If this is a human player, null will be returned, so that the UI can prompt
 * the player for attack coordinates.
 * @param {number} x x co-ordinate
 * @param {number} y y co-ordinate
 * @returns a boolean representing if this is a valid move for this player
 */
Player.prototype.attack = function attack(x, y) {
  const index = this.validMoves.findIndex(e => e.x === x && e.y === y);
  if (index === -1) return false;
  this.validMoves.splice(index, 1);
  return true;
};

export default Player;
