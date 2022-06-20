console.group('Inheritance with factories');

console.group('personFactory');

const personFactory = (name, age) => {
    const greet = () => `hello ${name}!`;
    return { name, age, greet }; // Object shorthand same as return { name: name, age: age, greet: greet }
};

const jeff = personFactory("jeff", 34);

console.log(jeff.name);
console.log(jeff.age);
console.log(jeff.greet());

console.groupEnd('personFactory');

console.group('animal');

const animal = (size, beaut) => {
    const makeNoise = () => 'an... an?';
    this.size = size;
    this.beaut = beaut;
    return {makeNoise, size, beaut};
}

const doge = (size, beaut, snoot, noise) => {
    const an = animal(size, beaut);
    this.size = an.size;
    this.beaut = an.beaut;
    this.snoot = snoot;
    this.makeNoise = () => `loud ${noise} noises`;
    return {size, beaut, snoot, makeNoise};
}

const a = doge("massive", "beautly", true, "bork");
console.log("make a noise: " + a.makeNoise());

console.groupEnd('animal');

console.groupEnd('Inheritance with factories');