import Gameboard from './Gameboard.js';

/**
 * Player object constructor
 * @param {boolean | undefined} isAI
 */
function Player(isAI, boardSize) {
  this.isAI = isAI;
  this.attacks = [];
  this.gameboard = new Gameboard(boardSize);
}

/**
 * 
 * @param {number | undefined} xCoord 
 * @param {number | undefined} yCoord 
 */
Player.prototype.attack = function(xCoord, yCoord) {
  if (this.isAI && (xCoord !== undefined || yCoord !== undefined)) throw new Error('AI player cannot take attack coordinates');
  if (!this.isAI && (xCoord === undefined || yCoord === undefined)) throw new Error('playable player requires coordinates but none were provided');
  this.attacks.push({x: xCoord, y:yCoord});
  // return Math.floor(Math.random() * 100);
}

export default Player;