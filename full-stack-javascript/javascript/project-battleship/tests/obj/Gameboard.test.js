/* eslint-disable no-undef */
import Gameboard, { BOARD_SIZE } from '../../src/obj/Gameboard.js';
import { Coord } from '../../src/obj/GameboardObjs.js';
import Ship, { shipsTypes as ships } from '../../src/obj/Ship.js';

// test objects
let gameboard;
let patrolBoat, submarine, destroyer, battleship, carrier;
const MAX_COORD_VALUE = BOARD_SIZE - 1;

// setup
beforeEach(() => {
  gameboard = new Gameboard();
  patrolBoat = ships[0].name;
  submarine = ships[1].name;
  destroyer = ships[2].name;
  battleship = ships[3].name;
  carrier = ships[4].name;
});

describe('construction', () => {
  let props, methods;
  beforeEach(() => {
    props = Object.getOwnPropertyNames(gameboard);
    methods = Object.getOwnPropertyNames(Gameboard.prototype);
  });

  describe('properties tests', () => {
    test('properties', () => {
      expect(props).toContain('board');
      expect(props).toContain('misses');
    });

    test('property types', () => {
      expect(gameboard.board).toEqual(expect.any(Array));
      expect(gameboard.misses).toEqual(expect.any(Array));
    });
  });

  test('methods', () => {
    expect(methods).toContain('placeShip');
    expect(methods).toContain('receiveAttack');
    expect(methods).toContain('allSunk');
  });
});

describe('placeShip method', () => {
  describe('invalid placement', () => {
    test('ship placed with negative coords', () => {
      expect(gameboard.placeShip(patrolBoat, -1, 0, false)).toBe(false);
      expect(gameboard.placeShip(patrolBoat, 0, -1, false)).toBe(false);
    });

    test('ship place with coord outside gameboard', () => {
      expect(gameboard.placeShip(patrolBoat, MAX_COORD_VALUE + 1, 0, false)).toBe(false);
      expect(gameboard.placeShip(patrolBoat, 0, MAX_COORD_VALUE + 1, false)).toBe(false);
    });

    test('ship initial position correct but extends outside gameboard bounds', () => {
      // top & left - not possible
      // right
      expect(gameboard.placeShip(carrier, MAX_COORD_VALUE, MAX_COORD_VALUE, false)).toBe(false);
      // bottom
      expect(gameboard.placeShip(carrier, MAX_COORD_VALUE, MAX_COORD_VALUE, true)).toBe(false);
    });

    test('ship overlaps another placed ship', () => {
      expect(gameboard.placeShip(patrolBoat, 0, 0, false)).toBe(true);
      expect(gameboard.placeShip(submarine, 1, 0, false)).toBe(false);
    });
  });

  describe('correct placement', () => {
    test('simple top left placement', () => {
      expect(gameboard.placeShip(patrolBoat, 0, 0, false)).toBe(true);
    });

    test('top right placement against edge vertical', () => {
      expect(gameboard.placeShip(patrolBoat, 9, 0, true)).toBe(true);
    });

    test('top right placement against edge horizontal', () => {
      expect(gameboard.placeShip(patrolBoat, 8, 0, false)).toBe(true);
    });

    test('bottom right placement against edge vertical', () => {
      expect(gameboard.placeShip(patrolBoat, 9, 8, true)).toBe(true);
    });

    test('bottom right placement against edge horizontal', () => {
      expect(gameboard.placeShip(patrolBoat, 8, 9, false)).toBe(true);
    });

    test('bottom left placement against edge vertical', () => {
      expect(gameboard.placeShip(patrolBoat, 0, 8, true)).toBe(true);
    });

    test('bottom left placement against edge horizontal', () => {
      expect(gameboard.placeShip(patrolBoat, 0, 9, false)).toBe(true);
    });
  });
});

describe('receiveAttack method', () => {
  test('attack miss recorded', () => {
    gameboard.placeShip(patrolBoat, 0, 0, true);
    expect(gameboard.receiveAttack(MAX_COORD_VALUE, MAX_COORD_VALUE)).toBe(false);
    expect(gameboard.misses).toContainEqual(new Coord(MAX_COORD_VALUE, MAX_COORD_VALUE));
  });
  test('attack hit successful', () => {
    gameboard.placeShip(patrolBoat, 0, 0, true);
    expect(gameboard.receiveAttack(0, 0)).toBe(true);
    expect(gameboard.misses).not.toContainEqual(new Coord(MAX_COORD_VALUE, MAX_COORD_VALUE));
    expect(gameboard.board[0][0].ship.name).toBe('patrol boat');
  });
});

describe('allSunk method', () => {
  beforeEach(() => {
    gameboard.placeShip(patrolBoat, 0, 0, false);
    gameboard.placeShip(submarine, 0, 5, true);
  });

  test('allSunk false when all ships not sunk', () => {
    expect(gameboard.allSunk()).toBe(false);
    expect(gameboard.receiveAttack(0, 0)).toBe(true);
    expect(gameboard.allSunk()).toBe(false);
  });

  test('allSunk true when all ships are sunk', () => {
    expect(gameboard.receiveAttack(0, 0)).toBe(true);
    expect(gameboard.receiveAttack(1, 0)).toBe(true);
    expect(gameboard.receiveAttack(0, 5)).toBe(true);
    expect(gameboard.receiveAttack(0, 6)).toBe(true);
    expect(gameboard.receiveAttack(0, 7)).toBe(true);
    expect(gameboard.allSunk()).toBe(true);
  });
});
