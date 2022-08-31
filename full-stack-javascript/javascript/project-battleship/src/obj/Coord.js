/**
 * Create a coord object that holds x and y numberic values for a board co-ordinate
 * @param {number} x x co-ordinate
 * @param {number} y y co-ordinate
 */
export default function Coord(x, y) {
  this.x = parseInt(x, 10);
  this.y = parseInt(y, 10);
}
