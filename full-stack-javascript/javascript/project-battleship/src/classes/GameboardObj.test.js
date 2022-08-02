import Gameboard from './GameboardObj.js';

let gameboard;

beforeEach(() => {
  gameboard = new Gameboard(10);
});

describe('place ships at specific coords.', () => {
  test('all parameters wrong throws error.', () => {
    expect(() => gameboard.place('wrongship', 'Z', -1, -1)).toThrow(Error); test
  });

  test('a single parameter wrong throws error.', () => {
    expect(() => gameboard.place('xxxx', 'V', 0, 0)).toThrow(Error);
    expect(() => gameboard.place('carrier', 'x', 0, 0)).toThrow(Error);
    expect(() => gameboard.place('carrier', 'V', -1, 0)).toThrow(Error);
    expect(() => gameboard.place('carrier', 'V', 0, -1)).toThrow(Error);
  });

  test('all parameters correct does not throw error.', () => {
    expect(() => gameboard.place('patrolboat', 'v', 5, 5)).not.toThrow(Error);
  });
});

describe('place ships at coords that would leave part of ship off the board.', () => {
  test('carrier too far down vertically', () => {
    expect(() => gameboard.place('carrier', 'v', 0, 5)).not.toThrow(Error);
    expect(() => gameboard.place('carrier', 'v', 0, 6)).toThrow(Error);
  });

  test('carrier too far across horizontally', () => {
    expect(() => gameboard.place('carrier', 'h', 5, 0)).not.toThrow(Error);
    expect(() => gameboard.place('carrier', 'h', 6, 0)).toThrow(Error);
  });

  test('patrolboat too far down vertically', () => {
    expect(() => gameboard.place('patrolboat', 'v', 0, 8)).not.toThrow(Error);
    expect(() => gameboard.place('patrolboat', 'v', 0, 9)).toThrow(Error);
  });

  test('patrolboat too far across horizontally', () => {
    expect(() => gameboard.place('patrolboat', 'h', 8, 0)).not.toThrow(Error);
    expect(() => gameboard.place('patrolboat', 'h', 9, 0)).toThrow(Error);
  });
});

describe('receive an attack', () => {
  test('receive an attack successfully', () => {
    gameboard.place('patrolboat', 'h', 0, 0);
    expect(gameboard.receiveAnAttack(5, 5)).toBe(false);
    expect(gameboard.receiveAnAttack(9, 9)).toBe(false);
    expect(gameboard.receiveAnAttack(0, 0)).toBe(true);
    expect(gameboard.receiveAnAttack(1, 0)).toBe(true);
  });

  test('records a miss successfully', () => {
    gameboard.place('patrolboat', 'h', 0, 0);
    gameboard.receiveAnAttack(9, 9);
    expect(gameboard.misses[0]).toEqual({ x: 9, y: 9 });
    gameboard.receiveAnAttack(5, 5);
    expect(gameboard.misses[1]).toEqual({ x: 5, y: 5 });
  });
});

describe('allSunk', () => {
  test('one of two boats sank', () => {
    gameboard.place('patrolboat', 'h', 0,0);
    gameboard.receiveAnAttack(0,0);
    gameboard.receiveAnAttack(1,0);
    gameboard.place('submarine', 'v', 1,0);
    expect(gameboard.allSunk()).toBe(false);
  });
  test('two of two boats sank', () => {
    gameboard.place('patrolboat', 'h', 0,0);
    gameboard.receiveAnAttack(0,0);
    gameboard.receiveAnAttack(1,0);
    gameboard.place('submarine', 'v', 0,1);
    gameboard.receiveAnAttack(0,1);
    gameboard.receiveAnAttack(0,2);
    gameboard.receiveAnAttack(0,3);
    expect(gameboard.allSunk()).toBe(true);
  });
});