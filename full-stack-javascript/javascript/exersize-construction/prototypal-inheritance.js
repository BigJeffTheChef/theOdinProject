console.group('prototypal inheritance');

function PersonEx(name) {
    this.name = name;
}

const personProto = {
    greet() {
        return `Hi, my name is ${this.name}`;
    }
}

PersonEx.prototype = personProto;
PersonEx.prototype.constructor = PersonEx;

let p = new PersonEx("person 1");

console.log(p.name);
console.log(p.greet());

function TeacherEx(name, subject) {
    let teacherEx = Object.create(PersonEx.prototype);
    teacherEx.name = name;
    teacherEx.subject = subject;
    return teacherEx;
}

let t = new TeacherEx("John", "Biology");

console.log(t.greet());
console.log(t.name);
console.log(t.subject);


function ProfEx(name, subject, tenure) {
    this.name = name;
    this.subject = subject;
    this.tenure = tenure;
}

ProfEx.prototype = Object.create(PersonEx.prototype);
ProfEx.prototype.hasTenure = function() {
    return this.tenure;
}
ProfEx.prototype.constructor = ProfEx;

let pr = new ProfEx("Jeff", "Comp Sci", true);
console.log(pr.greet());
console.log(pr.hasTenure());

console.groupEnd('prototypal inheritance');