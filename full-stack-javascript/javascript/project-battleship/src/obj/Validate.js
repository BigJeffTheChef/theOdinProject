import Ship from './Ship.js';

/**
 * Validate a pair of coordinates to be valid coordinates, that is: greater or equal to 0 and less than (gameboard length - 1). 
 * Must be called with the context of 'this' set to a Gameboard instance.
 * @param {number} xCoord 
 * @param {number} yCoord 
 * @param {number} min minimum allowable value for a coordinate
 * @param {number} max maximum allowable value for a coordinate
 * @returns an object like {x, y} containing valid coords
 * @throws Error if any coord is not valid
 */
 function validateCoords(xCoord, yCoord, min, max) {
  if (min === undefined || min == null) throw new Error('missing parameter min');
  if (max === undefined || max == null) throw new Error('missing parameter max');
  if (xCoord === undefined || xCoord == null) throw new Error('missing parameter xCoord');
  if (xCoord < min || xCoord > max) throw new Error(`xCoord not accepted must be ${min} to ${max} but was ${xCoord}`);
  if (yCoord === undefined || yCoord == null) throw new Error('missing parameter yCoord');
  if (yCoord < min || yCoord > max) throw new Error(`yCoord not accepted must be ${min} to ${max} but was ${yCoord}`);
  return { x: xCoord, y: yCoord };
}

/**
 * Validates a shape name as acceptable, and returns a Ship object as appropriate.
 * @param {string} shipName 
 * @returns {Ship} a Ship object
 * @throws Error if shipName is not valid
 */
function validateShip(shipName) {
  const ships = [
    { name: 'carrier', size: 5, },
    { name: 'battleship', size: 4 },
    { name: 'destroyer', size: 3 },
    { name: 'submarine', size: 3 },
    { name: 'patrolboat', size: 2 },
  ];
  if (!shipName) throw new Error('missing parameter shipName');
  const shipNameSanitized = shipName.toLowerCase();
  const shipSize = ships.reduce((prev, current) => (current.name === shipNameSanitized) ? current.size : prev, -1);
  if (shipSize === -1) throw new Error(`unrecognised ship type ("${shipName}")\nmust be one of (case in-sensitive):\n"${ships.map(e => e.name).toString()}" `);
  const shipObj = new Ship(shipSize);
  return shipObj;
}

/**
 * Validates a ship orientation
 * @param {string} orientation 
 * @throws Error if orientation is not valid
 * @returns {string} orientation as 'v', or 'h' for vertical and horizontal
 */
function validateOrientation(orientation) {
  // validate orientation
  if (!orientation) throw new Error('missing parameter orientation');
  switch (orientation) {
    case 'v': case 'V': case 'h': case 'H': break;
    default: throw new Error('unrecognised orientation')
  }
  return orientation.toLowerCase();
}

export {validateCoords, validateOrientation, validateShip};