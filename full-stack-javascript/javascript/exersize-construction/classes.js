console.group('classes');

class Dog {

    constructor(weight, beaut, hunger) {
        this.weight = weight;
        this.beaut = beaut;
        this.hunger = hunger;
    }

    // toggleHunger() {
    //     this.hunger = (this.hunger) ? false : true;
    // }

    getWeight() { return this.weight; }

    getBeaut() { return this.beaut; }

    getHunger() { return this.hunger; }

    setWeight(newWeight) { this.weight = newWeight; }

    setBeaut(newBeaut) { this.beaut = newBeaut; }

    setHunger(newHunger) { this.Hunger = newHunger; }

    toString() { return this.weight + "!!!" + this.beaut; }
}

Dog.prototype.toggleHunger = function() {
    this.hunger = (this.hunger) ? false : true;
}

let dax = new Dog("big", "very", false);
let reg = new Dog("smol", "exceptional", true);

console.log(dax.toString());

console.log(reg.toString());
reg.setWeight("biggening");
console.log(reg.toString());
console.log(reg.getWeight());
console.log("d w: " + dax.weight);
console.log("d h: " + dax.hunger);
dax.toggleHunger();
console.log("d h: " + dax.hunger);
dax.toggleHunger();
console.log("d h: " + dax.hunger);


console.groupEnd('classes');