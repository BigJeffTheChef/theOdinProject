const library = [new Book("Test Book 1", "Test Author1", 100, true),
new Book("Test Book 2", "Test Author 2", 1500, false)];

// Page: Controls
const addBookModalBtn = document.querySelectorAll('.add-book-button');
addBookModalBtn.forEach(b => b.addEventListener('click', showModal));

// Modal: Add Book
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('#close-modal-button');
const addToLibraryBtn = document.querySelector('#add-to-library');

// Modal: Input Fields
const fieldTitle = document.querySelector('#title');
const fieldAuthor = document.querySelector('#author');
const fieldPages = document.querySelector('#pages');
const fieldRead = document.querySelector('#read');

// Modal: Events
closeModalBtn.addEventListener('click', () => hideModal());
addToLibraryBtn.addEventListener('click', () => addToLibrary());

// Modal: Functions
function showModal() {
    fieldTitle.value = "";
    fieldAuthor.value = "";
    fieldPages.value = "";
    fieldRead.checked = false;
    modalContainer.classList.remove("hidden");
}

function hideModal() {
    modalContainer.classList.add('hidden');
    displayBooks();
}

function addToLibrary() {
    const book = new Book(fieldTitle.value, fieldAuthor.value, fieldPages.value, fieldRead.checked);
    library.push(book);
    hideModal();
}

// Book Cards
const bookCards = document.querySelector('.book-cards');

// Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createCard(bookObj, index) {
    let bookCard = document.createElement('div');

    let bookCardReadHighlight = document.createElement('div');
    let bookCardBody = document.createElement('div');

    let bookCardTitle = document.createElement('p');
    let bookCardAuthor = document.createElement('p');
    let bookCardPages = document.createElement('p');

    let bookCardRemove = document.createElement('button');
    let bookCardReadToggle = document.createElement('button');

    bookCard.classList.add('book-card');
    bookCardReadHighlight.classList.add('book-card-highlight');
    bookCardReadHighlight.classList.add((bookObj.read) ? "read" : "unread");
    bookCardBody.classList.add('book-card-body');

    bookCardTitle.textContent = bookObj.title;
    bookCardTitle.classList.add("card-title");

    bookCardAuthor.textContent = bookObj.author;
    bookCardAuthor.classList.add("card-author");

    bookCardPages.textContent = bookObj.pages + " pages";
    bookCardPages.classList.add("card-pages");

    bookCardRemove.textContent = "X";
    bookCardRemove.classList.add("card-remove");
    bookCardRemove.setAttribute("title", "Delete book");
    bookCardRemove.addEventListener('click', () => {
        library.splice(index, 1);
        displayBooks();
    });

    bookCardReadToggle.classList.add('card-read-toggle');
    bookCardReadToggle.textContent = "T";
    bookCardReadToggle.setAttribute("title", "Toggle read");
    bookCardReadToggle.addEventListener('click', () => {
        library[index].read = (library[index].read) ? false : true;
        displayBooks();
    });

    bookCardBody.append(bookCardTitle,
        bookCardAuthor,
        bookCardPages,
        bookCardRemove,
        bookCardReadToggle);
    bookCard.append(bookCardReadHighlight, bookCardBody);
    bookCard.setAttribute("data-index", index);
    return bookCard;
}

function displayBooks() {
    // remove old bookCards
    for (let i = bookCards.childNodes.length - 1; i >= 0; i--) {
        bookCards.removeChild(bookCards.childNodes[i]);
    }

    // build new cards from library
    for (let i = 0; i < library.length; i++) {
        let card = createCard(library[i], i);
        // card.setAttribute("data-index", i);
        console.log("data-index: " + card.getAttribute("data-index"));
        bookCards.appendChild(card);
    }
}

// initial display of any books in library
displayBooks();






