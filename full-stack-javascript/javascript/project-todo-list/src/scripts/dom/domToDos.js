// function imports
import {
    clearContent, 
    configExpandingMenuBtns, 
    generateTemplate, 
    elements,
    onCloseModal, 
    closeModalAction
} from './domController.js';
import {save, load} from '../storage.js';

// js objects
import { ToDo } from '../obj/ToDo.js';

// node modules
import {format} from 'date-fns'

// html templates
import templateModalToDo_container from '../../html-templates/toDoModal.html';
import templateModalToDo_list from '../../html-templates/toDoModal_list.html';
import templateCardToDo from '../../html-templates/toDoCard.html';

function render_allTodos() {
    clearContent();
    configExpandingMenuBtns('add-todo-button');
    let loadedTodos = load('todo');
    elements.content.appendChild(createToDoCards(loadedTodos, render_allTodos));
};

/**
 * Renders the ToDo modal to allow editing of a ToDo object.
 * @param {ToDo} toDoObj 
 */
function render_toDoModal(toDoObj, onCloseEvent) {
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
    modal.querySelector('#save-button').addEventListener('click', () => onSave(currentUid));
    // append modal to body
    document.body.appendChild(modal);
    document.querySelector('.modal-wrapper').addEventListener('click', event => {
        onCloseModal(event);
        onCloseEvent();
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
            render_allTodos();
            render_toDoModal(toDoObj, render_allTodos);
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

function createToDoCards(todos, onCloseEvent) {
    let todoCards = document.createElement('div');
    todoCards.classList.add('todo-cards');
    let loadedProjects = load('project');
    for (let todo of todos) {
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
        card.addEventListener('click', () => render_toDoModal(todo, onCloseEvent));

        todoCards.appendChild(card);
    }
    return todoCards;
}

export {render_allTodos, createToDoCards};