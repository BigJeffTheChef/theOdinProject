/*
BASIC CONSTRUCTOR - NO PROTOTYPE
*/

console.group('basic constructor - no prototype');

let ex1 = function (attr2) {
    this.attr1 = "example 1";
    this.attr2 = attr2;

    // THIS METHOD IS DUPLICATED IN EACH INSTANCE
    this.getAttr2 = function () {
        return this.attr2;
    };
}

let ex1Obj1 = new ex1("dogs");
let ex1Obj2 = new ex1("cats");

console.log(ex1Obj1.getAttr2());
console.log(ex1Obj2.getAttr2());

console.groupEnd('basic constructor - no prototype');