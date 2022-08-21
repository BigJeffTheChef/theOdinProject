/* eslint-disable no-undef */
import Gameboard from '../../src/obj/Gameboard.js';
import Player from '../../src/obj/Player.js';

let playerHuman, playerComputer;
let gameboard;

beforeEach(() => {
  gameboard = new Gameboard(10);
  playerHuman = new Player(true, gameboard.size);
  playerComputer = new Player(false, gameboard.size);
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
    expect(playerComputer.validMoves.length).toBe(100);
  });
});

describe('attack method', () => {
  test('computer can attack only 100 times (for a 10x10 gameboard)', () => {
    for (let x = 0; x < gameboard.size ** 2; x++) {
      playerComputer.attack(gameboard);
    }
    expect(() => playerComputer.attack(gameboard)).toThrow('no valid moves remaining');
  });

  test('human can attack only 100 times (for a 10x10 gameboard)', () => {
    for (let x = 0; x < gameboard.size; x++) {
      for (let y = 0; y < gameboard.size; y++) {
        playerHuman.attack(gameboard, x, y);
      }
    }
    expect(() => playerHuman.attack(gameboard, 0, 0)).toThrow('no valid moves remaining');
  });

  test('attacking a coordinate removes it from validMoves', () => {
    expect(playerHuman.validMoves).toContainEqual({ x: 5, y: 5 });
    playerHuman.attack(gameboard, 5, 5);
    expect(playerHuman.validMoves).not.toContainEqual({ x: 5, y: 5 });
  });
});
