import Ship from './ShipObj';

const GAMEBOARD_STANDARD_LENGTH = 10;

function Gameboard(length = GAMEBOARD_STANDARD_LENGTH) {
  this.length = length;
  this.ships = new Array(length).fill(new Array(length).fill(null));
}

/**
 * 
 * @param {string} shipName 
 * @param {string} orientation 
 * @param {number} xCoord 
 * @param {number} yCoord 
 */
Gameboard.prototype.place = function (shipName, orientation, xCoord, yCoord) {
  const ships = [
    { name: 'carrier', size: 5, },
    { name: 'battleship', size: 4 },
    { name: 'destroyer', size: 3 },
    { name: 'submarine', size: 3 },
    { name: 'patrolboat', size: 2 },
  ];
  // validate ship type and create ship
  const shipNameSanitized = shipName.toLowerCase();
  const shipSize = ships.reduce((prev, current) => (current.name === shipNameSanitized) ? current.size : prev, -1);
  if (shipSize === -1) throw new Error(`unrecognised ship type ("${shipName}")\nmust be one of (case in-sensitive):\n"${ships.map(e => e.name).toString()}" `);
  const shipObj = new Ship(shipSize);

  // validate orientation
  switch (orientation) {
    case 'v': case 'V': case 'h': case 'H': break;
    default: throw new Error('unrecognised orientation')
  }
  const shipOrientation = orientation.toLowerCase();

  //validate coords
  if (xCoord < 0 || xCoord >= this.length) throw new Error(`xCoord not accepted must be 0 to ${this.length - 1} but was ${xCoord}`);
  if (yCoord < 0 || yCoord >= this.length) throw new Error(`yCoord not accepted must be 0 to ${this.length - 1} but was ${yCoord}`);

  //place ship
  let coordTracker = { x: xCoord, y: yCoord };
  for (let i = 0; i < shipSize; i++) {
    if (coordTracker.x >= this.length || coordTracker.y >= this.length) throw new Error('this would place the ship outside the board');
    this.ships[yCoord][xCoord] = shipObj;
    if (shipOrientation === 'v') {
      coordTracker.y++;
    } else {
      coordTracker.x++;
    }
  }

}

export default Gameboard;