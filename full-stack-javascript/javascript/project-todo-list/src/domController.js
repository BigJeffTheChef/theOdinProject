import { ToDo } from './ToDo.js';
import { format } from 'date-fns';
import { saveToDo, loadToDos } from './storage.js';
import modalTemplate_container from './html-templates/toDoModal.html';
import modalTemplate_new from './html-templates/toDoModal_new.html';
import modalTemplate_list from './html-templates/toDoModal_list.html';


// elements obj via IIFE - faster as DOM queried only once? maybe...
let elements = (function () {
    let menuBtn = document.querySelector('button.hamburger');
    let themeBtn = document.querySelector('.change-theme');
    let body = document.querySelector('body');
    let header = document.querySelector('.header');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.content')
    return {
        menuBtn,
        themeBtn,
        body,
        header,
        nav,
        content,
    }
})();

// page initialisation
(function initialize() {

    // setNavWidthVar();
    // setMenuButtonEvent();

    setThemeChangeEvent();
    setMenuButtonEvent();
    setMenuPosition();

    document.querySelector('#burger-show-all').addEventListener('click', () => renderToDoList());

    renderWelcome();

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
            elements.body.classList.toggle('dark');
        });
    }
})();

function renderWelcome() {
    clearContent();
    let tempWelcome = document.createElement('div');
    tempWelcome.textContent = "Welcome!";
    elements.content.appendChild(tempWelcome);
}

function renderToDoList() {
    clearContent();
    /*
    <div class="todo-cards">
                <div class="todo-card">
                    <div>Title: </div>
                    <span></span>
                    <div>Description: </div>
                    <span></span>
                    <div>Due Date: </div>
                    <span></span>
                    <div>Priority: </div>
                    <span></span>
                    <div>Checklist: </div>
                    <span></span>
                    <div>uid:</div>
                    <span></span>
                </div>
            </div>
    */
    let todoCards = document.createElement('div');
    todoCards.classList.add('todo-cards');

    let todoObjs = loadToDos();
    for (let i = 0; i < todoObjs.length; i++) {
        todoCards.appendChild(createCard(todoObjs[i]));
    }

    elements.content.appendChild(todoCards);

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

        card.addEventListener('click', () => renderToDoModal(toDoObj));

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
            checklistSummaryDiv.classList.add('checklist-summary');
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
};

/**
 * Renders the ToDo modal to allow editing of a ToDo object.
 * @param {ToDo} toDoObj 
 */
function renderToDoModal(toDoObj) {
    let modalTemplate = document.createElement('template');
    modalTemplate.innerHTML = modalTemplate_container;

    let modalContent = modalTemplate.content.firstElementChild;
    // console.log(content.innerHTML);
    modalContent.querySelector('#title-field').value = toDoObj.title;
    modalContent.querySelector('#desc-field').value = toDoObj.description;
    modalContent.querySelector('#due-date-field').value = format(toDoObj.dueDate, 'yyyy-MM-dd');
    modalContent.querySelector('#priority-field').value = toDoObj.priority;


    renderCheckList(toDoObj.checklist);
    renderChecklistAdd();


    function renderCheckList(checklist) {
        //TODO_EDITOR_CHECKLIST_TEMPLATE
        let checklistSection = modalContent.querySelector('.checklist-section');

        for (let i = 0; i < checklist.length; i++) {
            let clistTemplate = document.createElement('template');
            clistTemplate.innerHTML = modalTemplate_list;
            let clistContent = clistTemplate.content.firstElementChild;

            clistContent.querySelector('.complete-field').value = checklist[i][0];
            clistContent.querySelector('.checklist-text').value = checklist[i][1];

            checklistSection.appendChild(clistContent);
        }
    }

    function renderChecklistAdd() {
        let checklistSection = modalContent.querySelector('.checklist-section.new-item');

        let newListItemTemplate = document.createElement('template');
        newListItemTemplate.innerHTML = modalTemplate_new;

        let newListItemContent = newListItemTemplate.content.firstElementChild;
        checklistSection.appendChild(newListItemContent);
    }

    modalTemplate.content.querySelector('.todo-editor-modal').addEventListener('click', (event) => {
        if (event.target.matches('.todo-editor-modal')) { document.body.removeChild(modalContent) };
    });
    document.body.appendChild(modalContent);
};

/**
 * clear all child nodes from the 'content' div.
 */
function clearContent() {
    for (let i = elements.content.childNodes.length - 1; i >= 0; i--) {
        elements.content.removeChild(elements.content.childNodes[i]);
    }
}

