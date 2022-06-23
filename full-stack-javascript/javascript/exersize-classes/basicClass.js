class Person {
    #title;
    #forname;
    #dob;

    constructor(title, forname, dob) {
        this.forname = forname;
        this.title = title;
        this.dob = dob;
    }

    get forname() { return this._forname; }
    set forname(value) { this._forname = value; }

    greet() { return `Hi, I'm ${this.title}. ${this.name}, I was born on ${this.dob}.`; }
}

let p1 = new Person('Mr', 'Joe', '01/07/89');
console.log(p1.greet());
console.log(p1.forname);
p1.forname = "dog";
console.log(p1.forname);