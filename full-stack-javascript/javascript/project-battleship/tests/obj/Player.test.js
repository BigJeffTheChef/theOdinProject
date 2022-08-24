/* eslint-disable no-undef */
import Gameboard, { BOARD_SIZE } from '../../src/obj/Gameboard.js';
import Player from '../../src/obj/Player.js';

let playerHuman, playerComputer;
let gameboardHuman, gameboardComputer;

beforeEach(() => {
  gameboardHuman = new Gameboard(10);
  gameboardComputer = new Gameboard(10);
  playerHuman = new Player(true, gameboardHuman);
  playerComputer = new Player(false, gameboardComputer);
});

describe('construction', () => {
  let props, methods;
  beforeEach(() => {
    props = Object.getOwnPropertyNames(playerHuman);
    methods = Object.getOwnPropertyNames(Player.prototype);
  });

  describe('properties', () => {
    test('property names', () => {
      expect(props).toContain('human');
      expect(Object.getOwnPropertyNames(playerComputer)).toContain('validMoves');
    });

    test('property types', () => {
      expect(playerHuman.human).toEqual(expect.any(Boolean));
      expect(playerComputer.human).toEqual(expect.any(Boolean));
    });
  });

  describe('methods', () => {
    test('method names', () => {
      expect(methods).toContain('attack');
      expect(playerHuman.attack).toEqual(expect.any(Function));
    });
  });
});

describe('human property', () => {
  test('property set', () => {
    expect(playerHuman.human).toBe(true);
    expect(playerComputer.human).toBe(false);
  });
});

describe('validMoves property', () => {
  test('validMoves contains 100x moves for a default gameboard', () => {
    const moves = BOARD_SIZE ** 2;
    expect(playerComputer.validMoves.length).toBe(moves);
    expect(playerHuman.validMoves.length).toBe(moves);
  });
});

describe('attack method', () => {
  const ERR_MSG = 'no valid moves remaining';
  test('computer can attack only 100 times (for a 10x10 gameboard)', () => {
    for (let i = 0; i < gameboardComputer.size ** 2; i++) {
      expect(playerComputer.attack()).not.toBe(null);
    }
    expect(() => playerComputer.attack()).toThrow(ERR_MSG);
  });

  test('human can attack only 100 times (for a 10x10 gameboard)', () => {
    for (let i = 0; i < gameboardHuman.size ** 2; i++) {
      expect(playerHuman.attack()).toBe(null);
    }
    expect(() => playerHuman.attack()).toThrow(ERR_MSG);
  });

  test('attacking a coordinate removes it from validMoves', () => {
    const moves = BOARD_SIZE ** 2;
    expect(playerComputer.validMoves.length).toBe(moves);
    const attack = playerComputer.attack();
    expect(playerComputer.validMoves.length).toBe(moves - 1);
    expect(playerComputer.validMoves).not.toContainEqual(attack);
  });
});
