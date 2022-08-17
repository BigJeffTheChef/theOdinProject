import Player from '../../src/obj/Player.js';

let player, computer;
beforeEach(() => {
  player = new Player(false);
  computer = new Player(true);
});

describe('players can be AI or non AI', () => {
  test('player is appropriate type', () => {
    expect(player.isAI).toBe(false);
    expect(computer.isAI).toBe(true);
  });
});

describe('Player moves', () => {

  describe('basic responses by parameters required', () => {
    test('playable player requires attack coords', () => {
      expect(() => player.attack(0, 0)).not.toThrow(Error);
      expect(() => player.attack()).toThrow('playable player requires coordinates but none were provided');
    });

    test('AI player random requires coords not be provided', () => {
      expect(() => computer.attack(0, 0)).toThrow('AI player cannot take attack coordinates');
      expect(() => computer.attack()).not.toThrow(Error);
    });
  });

  describe('AI random move never selects same square', () => {
    test('when prompted to take 100 moves, AI player tries every square once', () => {
      for (let i = 0; i < 100; i++) computer.attack();
      expect(computer.attacks.length).toBe(100);
    });
  });
});