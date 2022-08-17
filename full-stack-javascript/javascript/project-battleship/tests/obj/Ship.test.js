import Ship from '../../src/obj/Ship.js';

let ship2Long, ship3Long, ship4Long, ship5Long;

beforeEach(() => {
  ship2Long = new Ship(2);
  ship3Long = new Ship(3);
  ship4Long = new Ship(4);
  ship5Long = new Ship(5);
});

describe('ship is of expected length', () => {
  test('ship2 has a length of 2', () => {
    expect(ship2Long.length).toBe(2);
  });
  test('ship3 has a length of 3', () => {
    expect(ship3Long.length).toBe(3);
  });
  test('ship4 has a length of 4', () => {
    expect(ship4Long.length).toBe(4);
  });
  test('ship5 has a length of 5', () => {
    expect(ship5Long.length).toBe(5);
  });
});

describe('ship - not hit > hits array contains all falses', () => {
  test('ship2 - with no hits -> [false, false]', () => {
    expect(ship2Long.hits).toEqual([false, false]);
  });
  test('ship3 - with no hits -> [false, false, false]', () => {
    expect(ship3Long.hits).toEqual([false, false, false]);
  });
  test('ship4 - with no hits -> [false, false, false, false]', () => {
    expect(ship4Long.hits).toEqual([false, false, false, false]);
  });
  test('ship5 - with no hits -> [false, false, false, false, false]', () => {
    expect(ship5Long.hits).toEqual([false, false, false, false, false]);
  });
});

describe('ship - hits in valid positions', () => {
  test('ship2 hits', () => {
    ship2Long.hit(0);
    expect(ship2Long.hits).toEqual([true, false]);
    ship2Long.hit(1);
    expect(ship2Long.hits).toEqual([true, true]);
  });

  test('ship3 hits', () => {
    ship3Long.hit(0);
    expect(ship3Long.hits).toEqual([true, false, false]);
    ship3Long.hit(2);
    expect(ship3Long.hits).toEqual([true, false, true]);
  });

  test('ship4 hits', () => {
    ship4Long.hit(0);
    expect(ship4Long.hits).toEqual([true, false, false, false]);
    ship4Long.hit(3);
    expect(ship4Long.hits).toEqual([true, false, false, true]);
  });
  
  test('ship5 hits', () => {
    ship5Long.hit(0);
    expect(ship5Long.hits).toEqual([true, false, false, false, false]);
    ship5Long.hit(4);
    expect(ship5Long.hits).toEqual([true, false, false, false, true]);
  });

});

describe('ship.isSunk() test', () => {
  test('no hits - ship.isSunk() is false', () => {
    expect(ship2Long.isSunk()).toBe(false);
    expect(ship3Long.isSunk()).toBe(false);
    expect(ship4Long.isSunk()).toBe(false);
    expect(ship5Long.isSunk()).toBe(false);
  });

  test('some hits - ship.isSunk() is false',()=>{ 
    // end pos hit
    ship2Long.hit(1);
    expect(ship2Long.isSunk()).toBe(false);
    
    ship3Long.hit(0);
    ship3Long.hit(2);
    expect(ship3Long.isSunk()).toBe(false);

    //start hit and others
    ship4Long.hit(0);
    ship4Long.hit(1);
    ship4Long.hit(2);
    expect(ship4Long.isSunk()).toBe(false);

    //start and end and others
    ship5Long.hit(0);
    ship5Long.hit(1);
    ship5Long.hit(2);
    ship5Long.hit(4);
    expect(ship5Long.isSunk()).toBe(false);
  });

  test('all positions hit - ship.isSunk() is true',()=>{
    ship2Long.hit(0);
    ship2Long.hit(1);
    expect(ship2Long.isSunk()).toBe(true);
    
    ship3Long.hit(0);
    ship3Long.hit(1);
    ship3Long.hit(2);
    expect(ship3Long.isSunk()).toBe(true);

    ship4Long.hit(0);
    ship4Long.hit(1);
    ship4Long.hit(2);
    ship4Long.hit(3);
    expect(ship4Long.isSunk()).toBe(true);

    ship5Long.hit(0);
    ship5Long.hit(1);
    ship5Long.hit(2);
    ship5Long.hit(3);
    ship5Long.hit(4);
    expect(ship5Long.isSunk()).toBe(true);
  });
});


//test('',()=>{});
//expect(actual).toBe(expected);


