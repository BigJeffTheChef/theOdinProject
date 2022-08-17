import { validateCoords, validateShip } from "../../src/obj/Validate.js";
import Ship from '../../src/obj/Ship.js';

describe('validateCoords', () => {
  test('happy path: returns valid coords as a {x,y} coords object', () => {
    expect(validateCoords(0, 0, 0, 9)).toEqual({x: 0, y : 0});
    expect(validateCoords(5, 6, 0, 9)).toEqual({x: 5, y : 6});
    expect(validateCoords(9, 9, 0, 9)).toEqual({x: 9, y : 9});
    expect(validateCoords(9, 0, 0, 9)).toEqual({x: 9, y : 0});
  });
  
  test('validateCoords throws if any arg omitted', () => {
    expect(() => validateCoords(null, 0, 0, 9)).toThrow('missing parameter xCoord');
    expect(() => validateCoords(0, null, 0, 9)).toThrow('missing parameter yCoord');
    expect(() => validateCoords(0, 0, null, 9)).toThrow('missing parameter min');
    expect(() => validateCoords(0, 0, 0, null)).toThrow('missing parameter max');

    expect(() => validateCoords(undefined, 0, 0, 9)).toThrow('missing parameter xCoord');
    expect(() => validateCoords(0, undefined, 0, 9)).toThrow('missing parameter yCoord');
    expect(() => validateCoords(0, 0, undefined, 9)).toThrow('missing parameter min');
    expect(() => validateCoords(0, 0, 0, undefined)).toThrow('missing parameter max');

    expect(() => validateCoords(0, 0, 0)).toThrow('');
  });
  
  test('validateCoords rejects inappropriate args', () => {
    expect(() => validateCoords(-1, 0, 0, 9)).toThrow('xCoord not accepted must be 0 to 9 but was -1');
    expect(() => validateCoords(0, -1, 0, 9)).toThrow('yCoord not accepted must be 0 to 9 but was -1');
    expect(() => validateCoords(10, 0, 0, 9)).toThrow('xCoord not accepted must be 0 to 9 but was 10');
    expect(() => validateCoords(0, 10, 0, 9)).toThrow('yCoord not accepted must be 0 to 9 but was 10');
  });
});

describe('validateShip', () => {
  test('happy path: returns a valid ship', () => {
    expect(validateShip('patrolboat')).toEqual(false);
  });
});