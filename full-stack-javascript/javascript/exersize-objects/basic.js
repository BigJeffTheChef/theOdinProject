console.group('basic');
// // define function in constructor

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function () {
//         return title + " by " + author + ", " + pages + " pages, " + ((read) ? "read" : "not read");
//     }
// }
// let book = new Book("Lord of the Rings", "Tolkein", "1000", true);

// console.log(book.info());

// // definte functions on prototype

// function BookWithProto(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// BookWithProto.prototype.info = function () {
//     return this.title + " by " + this.author + ", " + this.pages + " pages, " + ((this.read) ? "read" : "not read");
// }

// let book2 = new BookWithProto("dogs", "a dog", "6", false);

// console.log(book2.info());

// // inherit prototype with Object.create

// function BookChild() {
// }

// BookChild.prototype = Object.create(BookWithProto.prototype);

// let book3 = new BookChild("abcdefg", "xyz", 50, true);

// console.log(book3.info());

function Media(title, year, author) {
    this.title = title;
    this.year = year;
    this.author = author;
}
Media.prototype.info = function () {
    return this.title + "," + this.year + "," + this.author;
}

let media = new Media("media title", 1910, "media author", 150);

console.log(media.info());
function Book(title, year, author, pages) {
    this.title = title;
    this.year = year;
    this.author = author;
    this.pages = pages;
}

Book.prototype = Object.create(Media.prototype)//new Media(title, year, author);
Book.prototype.info = function () {
    return this.title + "," + this.year + "," + this.author;
}
let book = new Book("a title", 1980, "an author");
console.log(book.info());

console.groupEnd('basic');