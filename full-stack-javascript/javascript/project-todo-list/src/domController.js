import { ToDo } from './ToDo.js';
import { format } from 'date-fns';
import { save, load } from './storage.js';

// html templates
import templateModalToDo_container from './html-templates/toDoModal.html';
import templateModalToDo_list from './html-templates/toDoModal_list.html';

import templateModalProject_container from './html-templates/projectModal.html';

import templateCardToDo from './html-templates/toDoCard.html';
import templateCardProject from './html-templates/projectCard.html';
import { Project } from './Project.js';

let elements = {
    menuBtn: document.querySelector('button.hamburger'),
    themeBtn: document.querySelector('.change-theme'),
    header: document.querySelector('.header'),
    nav: document.querySelector('.nav'),
    content: document.querySelector('.content'),
    showAllTodosBtns: document.querySelectorAll('.button-show-todos'),
    showAllProjectsBtns: document.querySelectorAll('.button-show-projects'),
    menuExpandingBtns: document.querySelectorAll('.menu-expanding-button'),
};

// page initialisation
(function initialize() {

    setThemeChangeEvent();
    setMenuButtonEvent();
    setMenuPosition();
    render_welcome();

    // document.querySelector('#button-show-todos').addEventListener('click', () => renderToDoList());
    for (let btn of elements.showAllTodosBtns) {
        btn.addEventListener('click', render_allTodos);
    }

    for (let btn of elements.showAllProjectsBtns) {
        btn.addEventListener('click', render_allProjects);
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
})();

function render_welcome() {
    clearContent();
    let tempWelcome = document.createElement('div');
    tempWelcome.textContent = "Welcome!";
    elements.content.appendChild(tempWelcome);
}

function render_allTodos() {
    clearContent();
    configExpandingMenuBtns('add-todo-button');
    

    let todoCards = document.createElement('div');
    todoCards.classList.add('todo-cards');

    let loadedTodos = load('todo');
    let loadedProjects = load('project');
    for (let todo of loadedTodos) {
        let card = generateTemplate(templateCardToDo);
        card.querySelector('.title').textContent = todo.title;
        //card.querySelector('.description').textContent = (todo.description.length < 170) ? todo.description : todo.description.substring(0, 170) + '...';
        card.querySelector('.description').textContent = todo.description;
        card.querySelector('.summary').textContent = (todo.checklist.length === 0 ? 'No' : todo.checklist.length) + ' checklist item' + (todo.checklist.length !== 1 ? 's' : '');
        let containingProject = (loadedProjects.find(p => p.todos.filter(t => t.uid === todo.uid).length > 0));
        card.querySelector('.project-info>span:last-child').textContent = containingProject !== undefined ? containingProject.title : 'Not in any project';
        card.querySelector('.bottom-cell>div:first-child>span:last-child').textContent = format(todo.dueDate, 'do LLLL y');
        card.querySelector('.bottom-cell>div:last-child>span:last-child').textContent = todo.priority;
        //console.log(card.outerHTML);
        card.addEventListener('click', () => render_toDoModal(todo));

        todoCards.appendChild(card);
    }

    elements.content.appendChild(todoCards);
};

/**
 * Renders the ToDo modal to allow editing of a ToDo object.
 * @param {ToDo} toDoObj 
 */
function render_toDoModal(toDoObj) {
    // ensure modal doesn't render twice
    if (document.body.classList.contains('modal-active')) closeModalAction();
    const currentUid = toDoObj.uid;
    // setup modal
    document.body.classList.add('modal-active');
    let modal = generateTemplate(templateModalToDo_container);
    console.log(toDoObj);
    modal.querySelector('#title-field').value = toDoObj.title;
    modal.querySelector('#desc-field').value = toDoObj.description;
    modal.querySelector('#notes-field').value = toDoObj.notes;
    modal.querySelector('#due-date-field').value = format(toDoObj.dueDate, 'yyyy-MM-dd');
    modal.querySelector('#priority-field').value = toDoObj.priority;
    renderChecklist_view(toDoObj);
    modal.querySelector('#add-todo-button').addEventListener('click', event => onAddNewChecklistItem(event));
    modal.querySelector('#save-todo-button').addEventListener('click', () => onSave(currentUid));
    // append modal to body
    document.body.appendChild(modal);
    document.querySelector('.modal-wrapper').addEventListener('click', event => {
        onCloseModal(event);
        render_allTodos();
    });

    // HELPER FUNCTIONS
    function renderChecklist_view(toDoObj) {
        let checklist = toDoObj.checklist;
        let checklistSection = modal.querySelector('.checklist-section');
        if (checklist.length > 0) {
            for (let i = 0; i < checklist.length; i++) {
                let checklistItem = generateTemplate(templateModalToDo_list);
                checklistItem.querySelector('.complete-field').value = checklist[i][0];
                checklistItem.querySelector('.checklist-text').value = checklist[i][1];
                checklistSection.appendChild(checklistItem);
            }
        } else {
            let p = document.createElement('p');
            p.textContent = 'No Checklist Items';
            checklistSection.appendChild(p);
        }
    }
    function onSave(currentUid) {
        let t = pullTodo(currentUid);
        save(t);
    }
    function onAddNewChecklistItem(event) {
        let completeValue = modal.querySelector('.checklist-new-item .complete-field').value == "true";
        let textField = modal.querySelector('.checklist-new-item .checklist-text');
        try {
            toDoObj.addToCheckList(completeValue, textField.value);
            onCloseModal(event);
            save(toDoObj);
            render_allTodos();
            render_toDoModal(toDoObj);
        } catch (error) {
            textField.setCustomValidity(error.message);
            textField.reportValidity();
        }
    }
    function pullTodo(currentUid) {
        let title = modal.querySelector('#title-field').value;
        let description = modal.querySelector('#desc-field').value;
        let dueDate = new Date(modal.querySelector('#due-date-field').value);
        let priority = modal.querySelector('#priority-field').value;
        let t = new ToDo(title, description, dueDate, priority, currentUid);
        t.notes = modal.querySelector('#notes-field').value;
        for (let node of modal.querySelectorAll('.checklist-list-item')) {
            let complete = node.querySelector('.complete-field') === 'true';
            let text = node.querySelector('.checklist-text').value;
            t.addToCheckList(complete, text);
        }
        return t;
    }
};

function render_allProjects() {
    clearContent();
    configExpandingMenuBtns('add-project-button');
    let projects = load('project');
    let cards = document.createElement('div');
    cards.classList.add('project-cards');
    for (let project of projects) {
        console.log(project);
        let card = generateTemplate(templateCardProject);
        card.querySelector('.title').textContent = project.title;
        card.querySelector('.description').textContent = project.description;
        card.querySelector('.notes').textContent = project.notes;
        card.querySelector('.summary').textContent = ((project.todos.length === 0) ? "No" : project.todos.length) + " todo" + ((project.todos.length >= 1) ? "s" : "");
        card.addEventListener('click', () => render_projectModal(project));
        cards.appendChild(card);
    }
    elements.content.appendChild(cards);
}
function render_projectModal(projectObj) {
    // ensure modal doesn't render twice
    if (document.body.classList.contains('modal-active')) closeModalAction();
    const currentUid = projectObj.uid;
    // setup modal
    document.body.classList.add('modal-active');

    let modal = generateTemplate(templateModalProject_container);

    modal.querySelector('#title-field').value = projectObj.title;
    modal.querySelector('#desc-field').value = projectObj.description;
    modal.querySelector('#notes-field').value = projectObj.notes;

    let cardContainer = modal.querySelector('.todo-cards');
    for (let todo of projectObj.todos) {
        let card = generateTemplate(templateCardToDo);
        card.querySelector('.title').value = todo.title;
        card.querySelector('.description').value = todo.description;
        //card.querySelector(.)
    }

    document.body.appendChild(modal);

    document.querySelector('.modal-wrapper').addEventListener('click', event => {
        onCloseModal(event);
        render_allProjects();
    });

    function pull(projectUid) {
        let title = document.querySelector('#title-field').value;
        let description = document.querySelector('#desc-field').value;
        let notes = document.querySelector('#notes-field').value;
        let p = new Project(title, description, notes, projectUid);
        /* PULL TODOS FROM MODAL TOO */
    }
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

function onCloseModal(event) {
    if (event.target.closest('#modal-form') === null) closeModalAction();
}

function configExpandingMenuBtns(selector) {
    for (let expandingBtn of elements.menuExpandingBtns) {
        if (expandingBtn.classList.contains(selector)) {
            expandingBtn.classList.add('active');
        } else {
            expandingBtn.classList.remove('active');
        }
    }
}
