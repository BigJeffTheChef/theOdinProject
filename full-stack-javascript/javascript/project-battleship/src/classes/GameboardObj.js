import Ship from './ShipObj.js';

const GAMEBOARD_STANDARD_LENGTH = 10;

/**
 * Raow
 * @param {*} length 
 */
function Gameboard(length = GAMEBOARD_STANDARD_LENGTH) {
  this.length = length;
  //this.board = new Array(length).fill(new Array(length).fill(null));
  this.misses = [];
  this.ships = [];
}


/**
 * 
 * @param {string} shipName 'carrier', 'battleship', 'destroyer','submarine', or 'patrolboat' only
 * @param {string} orientation 
 * @param {number} xCoord 
 * @param {number} yCoord 
 */
Gameboard.prototype.place = function placeShipOnBoard(shipName, orientation, xCoord, yCoord) {

  const shipObj = validateShip.call(this, shipName);
  const shipOrientation = validateOrientation.call(this, orientation);
  const coords = validateCoords.call(this, xCoord, yCoord);

  const allShipCoords = [];
  for (let i = 0; i < shipObj.length; i++) {
    if (coords.x >= this.length || coords.y >= this.length) throw new Error('this would place the ship outside the board');
    allShipCoords.push({ x: coords.x, y: coords.y });
    if (shipOrientation === 'v') {
      coords.y++;
    } else {
      coords.x++;
    }
  }

  this.ships.push({ ship: shipObj, coords: allShipCoords });


}

Gameboard.prototype.receiveAnAttack = function (xCoord, yCoord) {
  // search gameboard
  let coords;
  try {
    coords = validateCoords.call(this, xCoord, yCoord);
  } catch (err) {
    return false;
  }

  // const shipSearchResult = this.board[yCoord][xCoord];

  // search ships for a hit, if found, return the position it was hit

  const shipPos =
    (function findHitPosition(gameboard, x, y) {
      for (let i = 0; i < gameboard.ships.length; i++) {
        const curShip = gameboard.ships[i].ship;
        const curCoords = gameboard.ships[i].coords;
        for (let j = 0; j < curCoords.length; j++) {
          const curCoord = curCoords[j];
          if (curCoord.x === x && curCoord.y === y) return { ship: curShip, hitPosition: j };
        }
      }
      return null;
    })(this, coords.x, coords.y);

  if (!shipPos) {
    // record miss
    this.misses.push(coords);
    return false;
  }

  shipPos.ship.hit(shipPos.hitPosition);
  return true;
}

Gameboard.prototype.allSunk = function areAllShipsOnGameboardHitAtAllPositions() {
  return this.ships.reduce((prev, cur) => (!cur.ship.isSunk()) ? false : prev, true);
}

/**
 * Validate a pair of coordinates to be valid coordinates, that is: greater or equal to 0 and less than (gameboard length - 1). 
 * Must be called with the context of 'this' set to a Gameboard instance.
 * @param {number} xCoord 
 * @param {number} yCoord 
 * @returns an object like {x, y} containing valid coords
 * @throws Error if any coord is not valid
 */
function validateCoords(xCoord, yCoord) {
  if (xCoord === undefined || xCoord == null) throw new Error('missing parameter xCoord');
  if (xCoord < 0 || xCoord >= this.length) throw new Error(`xCoord not accepted must be 0 to ${this.length - 1} but was ${xCoord}`);
  if (yCoord === undefined || yCoord == null) throw new Error('missing parameter yCoord');
  if (yCoord < 0 || yCoord >= this.length) throw new Error(`yCoord not accepted must be 0 to ${this.length - 1} but was ${yCoord}`);
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

export default Gameboard;