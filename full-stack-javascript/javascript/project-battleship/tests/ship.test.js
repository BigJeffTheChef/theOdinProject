import Ship from '../src/ship/ShipClass.js';

let ship2, ship3, ship4, ship5;

beforeEach(() => {
  ship2 = new Ship(2);
  ship3 = new Ship(3);
  ship4 = new Ship(4);
  ship5 = new Ship(5);
});

describe('ship is of expected length', () => {
  test('ship2 has a length of 2', () => {
    expect(ship2.length).toBe(2);
  });
  test('ship3 has a length of 3', () => {
    expect(ship3.length).toBe(3);
  });
  test('ship4 has a length of 4', () => {
    expect(ship4.length).toBe(4);
  });
  test('ship5 has a length of 5', () => {
    expect(ship5.length).toBe(5);
  });
});

describe('ship - not hit > hits array contains all falses', () => {
  test('ship2 - with no hits -> [false, false]', () => {
    expect(ship2.hits).toEqual([false, false]);
  });
  test('ship3 - with no hits -> [false, false, false]', () => {
    expect(ship3.hits).toEqual([false, false, false]);
  });
  test('ship4 - with no hits -> [false, false, false, false]', () => {
    expect(ship4.hits).toEqual([false, false, false, false]);
  });
  test('ship5 - with no hits -> [false, false, false, false, false]', () => {
    expect(ship5.hits).toEqual([false, false, false, false, false]);
  });
});

describe('ship - hits in valid positions', () => {
  test('ship2 hits', () => {
    ship2.hit(0);
    expect(ship2.hits).toEqual([true, false]);
    ship2.hit(1);
    expect(ship2.hits).toEqual([true, true]);
  });

  test('ship3 hits', () => {
    ship3.hit(0);
    expect(ship3.hits).toEqual([true, false, false]);
    ship3.hit(2);
    expect(ship3.hits).toEqual([true, false, true]);
  });

});


describe.skip('ship.isSunk() test', () => {
  test('no hits - ship.isSunk() === false', () => {
    expect(ship2.isSunk()).toBe(false);
    expect(ship3.isSunk()).toBe(false);
    expect(ship4.isSunk()).toBe(false);
    expect(ship5.isSunk()).toBe(false);
  });
});


