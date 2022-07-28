class Ship {
  _length;
  _hits;

  constructor(length) {
    this.length = length;
    this.hits = this.length;
  }

  /**
   * @param {number} length
   */
  set length(length) {
    this._length = length;
  }

  get length() { return this._length; }

  /**
   * @param {number} length
   */
  set hits(length) {
    this._hits = [];
    for (let i = 0; i < length; i++) {
      this._hits.push(false);
    }
  }

  get hits() { return this._hits; }

  hit(position) {
    if (position < 0 || position >= this._length) {
      throw new Error(`incorrect position specified to hit. must be between 0 and ${this.length - 1} but was ${position}`);
    }
    this._hits[position] = true;
  }

  //   isSunk() {
  //     for (const hit of this.hits) {
  //       if (!hit) return false; 
  //     }
  //     return true;
  //   }
}

export default Ship;
