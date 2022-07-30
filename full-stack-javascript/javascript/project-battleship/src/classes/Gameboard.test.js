import Gameboard from './Gameboard';

let gameboard;

beforeAll(() => {
  gameboard = new Gameboard(10);
});

describe('place ships at specific coords.', () => {
  test('all parameters wrong throws error.', () => {
    expect(() => gameboard.place('wrongship', 'Z', -1, -1)).toThrow(Error);test
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
  test('')
});