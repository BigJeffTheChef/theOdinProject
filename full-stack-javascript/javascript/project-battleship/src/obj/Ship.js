class Ship {
  #length;
  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = [];
    for (let i = 0; i < length; i++) {
      this.#hits.push(false);
    }
  }

  /**
   * Set the length of the ship (in board squares).
   * @param {number} length
   */
  set length(length) {
    this.#length = length;
  }

  get length() { return this.#length; }

  get hits() { return this.#hits; }

  /**
   * Hit this ship at position
   * @param {number} position 
   */
  hit(position) {
    if (position < 0 || position >= this.#length) {
      throw new Error(`incorrect position specified to hit. must be between 0 and ${this.#length - 1} but was ${position}`);
    }
    this.#hits[position] = true;
  }

  isSunk() {
    for (const hit of this.#hits) {
      if (!hit) return false;
    }
    return true;
  }

  
  toString() {
    return `ship length: [${this.length}], hits: [${this.#hits.toString()}]`;
  }
}

// function Ship(length) {
//   this.length = length;
//   this.hits = new Array(length).fill(false);
// };

// Ship.prototype.isSunk = function() {
//   return this.hits.reduce((prev, cur) => (prev) ? cur === true : prev, true);
// };

// Ship.prototype.hit = function (position) {
//   this.hits[position] = true;
// };

export default Ship;
