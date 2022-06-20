// BASIC CONSTRUCTOR - WITH PROTOTYPE

console.group('basic constructor - with prototype');

let ex2 = function (attr2) {
    this.attr1 = "example 2";
    this.attr2 = attr2;
};

// THIS METHOD IS ATTACHED TO PROTOTYPE AND IS NOT DUPLICATED IN EACH INSTANCE
ex2.prototype.getAttr2 = function () {
    return this.attr2;
};

let ex2Obj1 = new ex2("dogs");
let ex2Obj2 = new ex2("cats");

console.log(ex2Obj1.getAttr2());
console.log(ex2Obj2.getAttr2());

console.groupEnd('basic constructor - with prototype');