console.group('objects');

// EXERSIZE 1
console.group('ex1');
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

console.log(`pockets.pen should be 3: ${pockets.pen}`);
console.log(`bed.glasses should be 1: ${bed.glasses}`);

console.groupEnd('ex1');

//EXERSIZE 2
console.group('ex2');

let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

console.groupEnd('ex2');

console.groupEnd('objects');