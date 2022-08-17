// hasbro rules
const ships = [
  { name: 'patrol boat', length: 2 },
  { name: 'submarine', length: 3 },
  { name: 'destroyer', length: 3 },
  { name: 'battleship', length: 4 },
  { name: 'carrier', length: 5 },
];

/**
 * Create a ship object, by specifying the name of the ship required.
 * @param {string} ship name of ship, corresponds to a length.
 */
function Ship(ship) {
  this.length = determineShipLength(ship);
  this.hull = new Array(this.length).fill(false);
}

/**
 * 'hit' / attack this ship at specified index
 * @param {number} position the zero-indexed positon of this ships hull to record a hit
 */
Ship.prototype.hit = function hit(index) {
  if (index >= this.length) {
    throw new Error(`specified hit index "${index}" is greater than allowable for a ship of length ${this.length}.`);
  } else if (index < 0) {
    throw new Error(`specified hit index "${index}" cannot be negative.`);
  }
  this.hull[index] = true;
};

Ship.prototype.isSunk = function isSunk() {
  return this.hull.reduce((prev, current) => current === false ? false : prev, true);
};

function determineShipLength(ship) {
  const shipLength = ships.reduce((prev, current) => (current.name === ship) ? current.length : prev, null);
  if (shipLength === null) throw new Error(`ship parameter string not recognised: "${ship}". Allowable values: ${ships.map(e => e.name)}`);
  return shipLength;
}

export default Ship;
