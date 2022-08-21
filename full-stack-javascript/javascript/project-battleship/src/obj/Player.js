import { Coord } from './Gameboard.js';

/**
 * Create a player object
 * @param {boolean} human true if this is a human player, false if it is a computer player
 */
function Player(human, boardSize) {
  this.human = human;
  this.validMoves = [];
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      this.validMoves.push(new Coord(x, y));
    }
  }
}
/**
 * Attack the enemy gameboard
 * @param {Gameboard} enemyGameboard the enemy gameboard to attack
 * @param {number | undefined} x x co-ordinate (if human player)
 * @param {number | undefined} y y co-orindate (if human player)
 */
Player.prototype.attack = function attack(enemyGameboard, x, y) {
  let xCoord = x;
  let yCoord = y;
  if (!this.human) {
    const move = this.validMoves.at(Math.floor(Math.random() * this.validMoves.length));
    xCoord = (move !== undefined) ? move.x : null;
    yCoord = (move !== undefined) ? move.y : null;
  }
  const index = this.validMoves.findIndex(e => e.x === xCoord && e.y === yCoord);
  if (index === -1) throw new Error('no valid moves remaining');
  enemyGameboard.receiveAttack(xCoord, yCoord);
  this.validMoves.splice(index, 1);
};

function generateValidMoves() {

}

export default Player;
