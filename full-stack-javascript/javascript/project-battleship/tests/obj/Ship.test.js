/* eslint-disable no-undef */
import Ship from '../../src/obj/Ship.js';

// test objects
let patrolBoat, submarine, destroyer, battleship, carrier;

// setup
beforeEach(() => {
  patrolBoat = new Ship('patrol boat');
  submarine = new Ship('submarine');
  destroyer = new Ship('destroyer');
  battleship = new Ship('battleship');
  carrier = new Ship('carrier');
});

// tests
describe('construction', () => {
  describe('successful construction', () => {
    test('object properties', () => {
      const props = Object.getOwnPropertyNames(carrier);
      expect(props).toContain('hull');
      expect(props).toContain('length');
    });

    test('object methods', () => {
      const methods = Object.getOwnPropertyNames(Ship.prototype);
      expect(methods).toContain('hit');
      expect(methods).toContain('isSunk');
    });
  });
  describe('failed construction', () => {
    test('incorrect parameter', () => {
      expect(() => new Ship('train'))
        .toThrow('ship parameter string not recognised: "train". Allowable values: patrol boat,submarine,destroyer,battleship,carrier');
    });
  });
});

describe('length method', () => {
  test('ship lengths are correct', () => {
    expect(patrolBoat.length).toBe(2);
    expect(submarine.length).toBe(3);
    expect(destroyer.length).toBe(3);
    expect(battleship.length).toBe(4);
    expect(carrier.length).toBe(5);
  });
});

describe('hit method', () => {
  test('hit success at valid position', () => {
    expect(patrolBoat.hull[0]).toBe(false);
    patrolBoat.hit(0);
    expect(patrolBoat.hull[0]).toBe(true);

    expect(carrier.hull[2]).toBe(false);
    carrier.hit(2);
    expect(carrier.hull[2]).toBe(true);
  });

  test('hit fail at invalid position', () => {
    expect(() => patrolBoat.hit(2)).toThrow('specified hit index "2" is greater than allowable for a ship of length 2.');
    expect(() => carrier.hit(-1)).toThrow('specified hit index "-1" cannot be negative.');
  });
});

describe('isSunk method', () => {
  test('isSunk = false when all hull positions not hit', () => {
    expect(patrolBoat.isSunk()).toBe(false);
  });

  test('isSunk = true when all hull positions hit', () => {
    expect(patrolBoat.isSunk()).toBe(false);
    patrolBoat.hit(0);
    expect(patrolBoat.isSunk()).toBe(false);
    patrolBoat.hit(1);
    expect(patrolBoat.isSunk()).toBe(true);

    expect(carrier.isSunk()).toBe(false);
    carrier.hit(0);
    carrier.hit(1);
    carrier.hit(2);
    carrier.hit(3);
    carrier.hit(4);
    expect(carrier.isSunk()).toBe(true);
  });
});
