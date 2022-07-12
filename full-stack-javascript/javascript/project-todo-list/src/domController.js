import { ToDo } from './ToDo.js';
import { format } from 'date-fns';
import { save, load } from './storage.js';
import modalTemplate_container from './html-templates/toDoModal.html';
import modalTemplate_list from './html-templates/toDoModal_list.html';
import todoCardTemplate from './html-templates/toDoCard.html';
import projectCardTemplate from './html-templates/projectCard.html';

let selectors = {
    buttons: {
        menu: 'button.hamburger',
        theme: '.change-theme',
        showTodos: '.burger-show-all',
        showProjects: '.burger-show-projects',
    },
    elements: {
        header: '.header',
        nav: '.nav',
        content: '.content',
        todoCards: '.todo-cards',
    },

};

let elementsObj = {
    buttons: {
        menu: document.querySelector(selectors.buttons.menu),
        theme: document.querySelector(selectors.buttons.theme),
        showTodos: document.querySelectorAll(selectors.buttons.showTodos),
        showProjects: document.querySelectorAll(selectors.buttons.showProjects),
    },
    containers: {
        header: document.querySelector(selectors.elements.header),
        nav: document.querySelector(selectors.elements.nav),
        content: document.querySelector(selectors.elements.content),
    },
};

let elements = (function () {
    //buttons
    let menuBtn = document.querySelector(selectors.buttons.menu);
    let themeBtn = document.querySelector(selectors.buttons.theme);
    let showAllTodosBtns = document.querySelectorAll(selectors.buttons.showTodos);
    let showAllProjectsBtns = document.querySelectorAll(selectors.buttons.showProjects);

    // containers
    let header = document.querySelector(selectors.elements.header);
    let nav = document.querySelector(selectors.elements.nav);
    let content = document.querySelector(selectors.elements.content);

    return {
        menuBtn,
        themeBtn,
        header,
        nav,
        content,
        showAllTodosBtns,
        showAllProjectsBtns
    }
})();



// page initialisation
(function initialize() {

    setThemeChangeEvent();
    setMenuButtonEvent();
    setMenuPosition();
    render_welcome();

    // document.querySelector('#burger-show-all').addEventListener('click', () => renderToDoList());
    for (let btn of elementsObj.buttons.showTodos) {
        btn.addEventListener('click', render_allTodos);
    }

    for (let btn of elementsObj.buttons.showProjects) {
        btn.addEventListener('click', render_allProjects);
    }

    function setMenuPosition() {
        elementsObj.containers.nav.style['top'] = (elementsObj.containers.header.offsetHeight - 2) + 'px';
        elementsObj.containers.nav.style['left'] = '10px';
        setTimeout(() => {
            elementsObj.containers.nav.classList.remove('hidden');
        }, 200)
    }

    function setMenuButtonEvent() {
        elementsObj.buttons.menu.addEventListener('click', () => {
            const showSelector = 'nav-open';
            if (elementsObj.containers.nav.classList.contains(showSelector)) {
                elementsObj.containers.nav.classList.remove(showSelector);
            } else {
                elementsObj.containers.nav.classList.add(showSelector);
            }
        });
    }

    function setThemeChangeEvent() {
        elementsObj.buttons.theme.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });
    }
})();

function render_welcome() {
    clearContent();
    let tempWelcome = document.createElement('div');
    tempWelcome.textContent = "Welcome!";
    elementsObj.containers.content.appendChild(tempWelcome);
}

function render_allTodos() {
    clearContent();
    //oldRender();

    let todoCards = document.createElement('div');
    todoCards.classList.add(selectors.elements.todoCards);

    let loadedTodos = load('todo');
    let loadedProjects = load('project');
    for (let todo of loadedTodos) {
        // let template = document.createElement('template');
        // template.innerHTML = todoCardTemplate;
        // let card = template.content.firstElementChild;
        let card = generateTemplate(todoCardTemplate);


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

    elementsObj.containers.content.appendChild(todoCards);



    function oldRender() {
        let todoCards = document.createElement('div');
        todoCards.classList.add(selectors.elements.todoCards);

        let todoObjs = load("todo");
        for (let i = 0; i < todoObjs.length; i++) {
            todoCards.appendChild(createCard(todoObjs[i]));
        }

        elementsObj.containers.content.appendChild(todoCards);

        function createCard(toDoObj) {
            let card = document.createElement('div');
            card.classList.add('todo-card');

            // title 
            titleCell('title', toDoObj.title);

            // description
            descCell('description', toDoObj.description);

            // checklist
            checklistCell(toDoObj.checklist);

            // bottom cell -> due date and priority
            dateAndPriorityCell(toDoObj.dueDate, toDoObj.priority);

            card.addEventListener('click', () => render_toDoModal(toDoObj));

            return card;

            /**
             * Create a simple cell with a specified css class applied
             * @param {string} cellClass css class to apply to cell
             * @param {string} cellContent content to place in cell
             * @returns created cellDiv
             */
            function titleCell(cellClass, cellContent) {
                let cellDiv = document.createElement('div');
                cellDiv.classList.add(cellClass)
                cellDiv.textContent = cellContent;
                card.appendChild(cellDiv);
            }


            /**
             * Create a simple cell with a specified css class applied
             * @param {string} cellClass css class to apply to cell
             * @param {string} cellContent content to place in cell
             * @returns created cellDiv
             */
            function descCell(cellClass, cellContent) {
                let cellDiv = document.createElement('div');
                cellDiv.classList.add(cellClass);
                const MAX_CHARS = 170;
                cellDiv.textContent = (cellContent.length < MAX_CHARS) ? cellContent : cellContent.substring(0, MAX_CHARS) + "...";
                card.appendChild(cellDiv);
            }

            /**
             * Create the checklist cell
             * @param {array} checklist a 2d array, with each 'row' being a checklist item. 
             * 'column' index 0 is a boolean representing if the item is complete and 
             * 'column' index 1 is the text of the item
             */
            function checklistCell(checklist) {
                let checklistDiv = document.createElement('div');
                checklistDiv.classList.add('checklist');

                let checklistSummaryDiv = document.createElement('div');
                checklistSummaryDiv.classList.add('summary');
                checklistSummaryDiv.textContent = checklist.length + " checklist items";

                checklistDiv.appendChild(checklistSummaryDiv);
                card.appendChild(checklistDiv);
            }

            /**
             * Create the bottom cell which houses both the due date and the priority of this
             * ToDo.
             * @param {string} date 
             * @param {number} priority 
             */
            function dateAndPriorityCell(date, priority) {
                // dueDate
                let bottomCell = document.createElement('div');
                bottomCell.classList.add('bottom-cell');
                bottomCell.appendChild(footerCells('Due', format(date, 'dd/MM/yyyy')));

                // priority
                bottomCell.appendChild(footerCells('Priority', priority));
                card.appendChild(bottomCell);

                function footerCells(label, value) {
                    let cellDiv = document.createElement('div');
                    let cellLabel = document.createElement('span');
                    cellLabel.textContent = label + ': ';
                    let cellValue = document.createElement('span');
                    cellValue.textContent = value;
                    cellDiv.appendChild(cellLabel);
                    cellDiv.appendChild(cellValue);
                    return cellDiv;
                }
            };
        }
    }
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
    let modal = generateTemplate(modalTemplate_container);
    modal.querySelector('#title-field').value = toDoObj.title;
    modal.querySelector('#desc-field').value = toDoObj.description;
    modal.querySelector('#due-date-field').value = format(toDoObj.dueDate, 'yyyy-MM-dd');
    modal.querySelector('#priority-field').value = toDoObj.priority;
    renderChecklist_view(toDoObj);
    modal.querySelector('#add-todo-button').addEventListener('click', event => onAddNewItem(event));
    modal.querySelector('#save-todo-button').addEventListener('click', () => onSave(currentUid));
    // append modal to body
    document.body.appendChild(modal);
    document.querySelector('.modal-wrapper').addEventListener('click', event => onCloseModal(event));

    // HELPER FUNCTIONS
    function renderChecklist_view(toDoObj) {
        let checklist = toDoObj.checklist;
        let checklistSection = modal.querySelector('.checklist-section');
        if (checklist.length > 0) {
            for (let i = 0; i < checklist.length; i++) {
                let checklistItem = generateTemplate(modalTemplate_list);
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
    function onAddNewItem(event) {
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
    function onCloseModal(event) {
        if (event.target.closest('#modal-form') === null) closeModalAction();
    }
    function closeModalAction() {
        let modalSelector = '.modal-wrapper';
        let modal = document.querySelector(modalSelector);
        document.body.removeChild(modal);
        document.body.classList.remove('modal-active');
    }
    function pullTodo(currentUid) {
        let title = modal.querySelector('#title-field').value;
        let description = modal.querySelector('#desc-field').value;
        let dueDate = new Date(modal.querySelector('#due-date-field').value);
        let priority = modal.querySelector('#priority-field').value;
        let t = new ToDo(title, description, dueDate, priority, currentUid);
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
    let projects = load('project');
    let cards = document.createElement('div');
    cards.classList.add('project-cards');
    for (let project of projects) {
        console.log(project);
        let card = generateTemplate(projectCardTemplate);
        card.querySelector('.title').textContent = project.title;
        card.querySelector('.description').textContent = project.description;
        card.querySelector('.notes').textContent = project.notes;
        card.querySelector('.summary').textContent = ((project.todos.length === 0) ? "No" : project.todos.length) + " todo" + (project.todos.left >= 1) ? "s" : "";
        card.addEventListener('click', render_projectModal)
        cards.appendChild(card);
    }
    elementsObj.containers.content.appendChild(cards);
}
function render_projectModal() {
    // ensure modal doesn't render twice
    if (document.body.classList.contains('modal-active')) closeModalAction('.modal-wrapper');
    const currentUid = toDoObj.uid;
    // setup modal
    document.body.classList.add('modal-active');

    function closeModalAction(modalClassSelector) {
        let modalSelector = '.modal-wrapper';
        let modal = document.querySelector(modalSelector);
        document.body.removeChild(modal);
        document.body.classList.remove('modal-active');
    }
}
/**
 * clear all child nodes from the 'content' div - resetting it to empty.
 */
function clearContent() {
    for (let i = elementsObj.containers.content.childNodes.length - 1; i >= 0; i--) {
        elementsObj.containers.content.removeChild(elementsObj.containers.content.childNodes[i]);
    }
}

function generateTemplate(htmlTemplate) {
    let template = document.createElement('template');
    template.innerHTML = htmlTemplate;
    return template.content.firstElementChild;
}

