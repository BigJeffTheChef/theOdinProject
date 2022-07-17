// js objects
import { ToDo } from '../obj/ToDo.js';
import { Project } from '../obj/Project.js';
import { save, load } from '../storage.js';

// dom scripts
import { render_allProjects } from './domProjects.js';
import { render_allTodos, render_toDoModal } from './domToDos.js';

// html templates
import templateModalToDo_container from '../../html-templates/toDoModal.html';
import templateModalToDo_list from '../../html-templates/toDoModal_list.html';
import templateCardToDo from '../../html-templates/toDoCard.html';

// elements object
let elements = {
    menuBtn: document.querySelector('button.hamburger'),
    themeBtn: document.querySelector('.change-theme'),
    header: document.querySelector('.header'),
    nav: document.querySelector('.nav'),
    content: document.querySelector('.content'),
    showAllTodosBtns: document.querySelectorAll('.button-show-todos'),
    showAllProjectsBtns: document.querySelectorAll('.button-show-projects'),
    menuExpandingBtns: document.querySelectorAll('.menu-expanding-button'),
    menuAddToDoBtns: document.querySelectorAll('.menu-expanding-button.add-todo-button'),
    menuAddProjectBtns: document.querySelectorAll('.menu-expanding-button.add-project-button')
};

/*

    DOM INITIALISATION

 */
setThemeChangeEvent();
setMenuButtonEvent();
setMenuPosition();
render_welcome();

for (let btn of elements.showAllTodosBtns) {
    btn.addEventListener('click', render_allTodos);
}

for (let btn of elements.showAllProjectsBtns) {
    btn.addEventListener('click', render_allProjects);
}

for (let btn of elements.menuAddToDoBtns) {
    btn.addEventListener('click', () => render_toDoModal(null, render_allTodos));
}

function setMenuPosition() {
    elements.nav.style['top'] = (elements.header.offsetHeight - 2) + 'px';
    elements.nav.style['left'] = '10px';
    setTimeout(() => {
        elements.nav.classList.remove('hidden');
    }, 200)
}

function setMenuButtonEvent() {
    elements.menuBtn.addEventListener('click', () => {
        const showSelector = 'nav-open';
        if (elements.nav.classList.contains(showSelector)) {
            elements.nav.classList.remove(showSelector);
        } else {
            elements.nav.classList.add(showSelector);
        }
    });
}

function setThemeChangeEvent() {
    elements.themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
}

function render_welcome() {
    clearContent();
    setContentTitle('Welcome to TooDoo!');
    let welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = "Welcome!";
    elements.content.appendChild(welcomeDiv);
}

/**
 * clear all child nodes from the 'content' div - resetting it to empty.
 */
function clearContent() {
    for (let i = elements.content.childNodes.length - 1; i >= 0; i--) {
        elements.content.removeChild(elements.content.childNodes[i]);
    }
}

function generateTemplate(htmlTemplate) {
    let template = document.createElement('template');
    template.innerHTML = htmlTemplate;
    return template.content.firstElementChild;
}

function closeModalAction() {
    let modalSelector = '.modal-wrapper';
    let modal = document.querySelector(modalSelector);
    document.body.removeChild(modal);
    document.body.classList.remove('modal-active');
}

function onCloseModal(event, onCloseEvent) {
    if (event.target.closest('#modal-form') === null) {
        closeModalAction();
        if (onCloseEvent !== undefined) onCloseEvent();
    }
}

function configExpandingMenuBtns(...selectors) {
    for (let btn of elements.menuExpandingBtns) {

        let makeActive = selectors.reduce(
            (selectorFound, selector) => {
                if (btn.classList.contains(selector)) return true;
                else return selectorFound;
            },
            false
        );

        if (makeActive) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

function setContentTitle(newTitle) {
    document.querySelector('.content-title').textContent = newTitle;
}

export { clearContent, configExpandingMenuBtns, generateTemplate, elements, onCloseModal, closeModalAction, setContentTitle };