const library = [];

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
    fieldRead.value = "";
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

    let bookCardHighlight = document.createElement('div');
    let bookCardBody = document.createElement('div');
    
    let bookCardTitle = document.createElement('p');
    let bookCardAuthor = document.createElement('p');
    let bookCardPages = document.createElement('p');
    let bookCardRemove = document.createElement('button');

    bookCard.classList.add('book-card');
    bookCardHighlight.classList.add('book-card-highlight');
    bookCardHighlight.classList.add((bookObj.read) ? "read" : "unread");
    bookCardBody.classList.add('book-card-body');
    bookCardTitle.textContent = bookObj.title;
    bookCardTitle.id = "card-title";
    bookCardAuthor.textContent = bookObj.author;
    bookCardAuthor.id = "card-author";
    bookCardPages.textContent = bookObj.pages;
    bookCardPages.id = "card-pages";
    bookCardRemove.textContent = "X";
    bookCardRemove.id = "card-remove";
    bookCardRemove.addEventListener('click', () => {
        library.splice(index, 1);
        displayBooks();
    });

    bookCardBody.append(bookCardTitle, bookCardAuthor, bookCardPages, bookCardRemove);
    bookCard.append(bookCardHighlight, bookCardBody);
    bookCard.setAttribute("data-index", index);
    return bookCard;
}

function displayBooks() {
    // remove old bookCards
    for (let i = bookCards.childNodes.length - 1; i >= 0;i--) {
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






