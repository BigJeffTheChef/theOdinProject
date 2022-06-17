const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(bookObj) {
    if (bookObj instanceof Book) {
        myLibrary.push(bookObj);
    }
}

function displayBooks() {
    for (let book of myLibrary) {
        console.log(book);
    }
}

console.log('hi');

const addBookBtn = document.querySelector('#add-book-button');
const addBookModal = document.querySelector('.add-book-modal')
const modalUnderlay = document.querySelector('.modal-underlay');
const closeModalBtn = document.querySelector('#close-modal');
addBookBtn.addEventListener('click', () => modalToggle());
closeModalBtn.addEventListener('click', () => modalToggle());

function modalToggle() {
    addBookModal.classList.toggle('hidden');
    modalUnderlay.classList.toggle('hidden');
}
