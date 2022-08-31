/**
 * Holds data about a game. There are two players, each holding data on the player itself, and their board.
 * Additional the current player and enemy players are stored here.
 * @param {*} p1 player 1's player
 * @param {*} p2 player 2's player
 * @param {*} b1 player 1's board
 * @param {*} b2 player 2's board
 */
export default function GameData(p1, p2, b1, b2) {
  this.p1 = { player: p1, board: b1 };
  this.p2 = { player: p2, board: b2 };
  this.currentPlayer = this.p1;
  this.enemyPlayer = this.p2;
}

/**
 * Swaps currentPlayer and enemyPlayer of gameData
 */
GameData.prototype.changePlayer = function changePlayer() {
  const tmp = this.currentPlayer;
  this.currentPlayer = this.enemyPlayer;
  this.enemyPlayer = tmp;
};
