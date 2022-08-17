import Ship from './Ship.js';
import {validateCoords, validateOrientation, validateShip} from './Validate.js';

const GAMEBOARD_STANDARD_LENGTH = 10;

/**
 * Raow
 * @param {number} length 
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
  const coords = validateCoords(xCoord, yCoord, 0, this.length - 1);

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
    coords = validateCoords(xCoord, yCoord, 0, this.length - 1);
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



export default Gameboard;