// function imports
import {clearContent, configExpandingMenuBtns, generateTemplate, elements, onCloseModal, closeModalAction, setContentTitle} from './domController.js';
import { createToDoCards, render_toDoModal } from './domToDos.js';
import {save, load} from '../storage.js';

// js objects
import {Project} from '../obj/Project.js';

// html templates
import templateCardProject from '../../html-templates/projectCard.html';
import templateProjectEditor from '../../html-templates/projectEditor.html';


function render_allProjects() {
    clearContent();
    setContentTitle('All Projects');
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
        card.addEventListener('click', () => render_project(project));
        cards.appendChild(card);
    }
    elements.content.appendChild(cards);
}
function render_project(projectObj) {
    // ensure modal doesn't render twice
    clearContent();
    setContentTitle('Project: ' + projectObj.title);
    const uid = projectObj.uid;

    let content = generateTemplate(templateProjectEditor);
    let btnPanel = content.querySelector('.project-editor-button-panel');
    content.querySelector('#title-field').value = projectObj.title;
    content.querySelector('#desc-field').value = projectObj.description;
    content.querySelector('#notes-field').value = projectObj.notes;
    btnPanel.before(createToDoCards(projectObj.todos, () => render_project(projectObj)));
    elements.content.appendChild(content);

    content.querySelector('#save-button').addEventListener('click', () => save(pull(uid)));
    content.querySelector('#add-button').addEventListener('click', () => render_toDoModal())

    function pull() {
        let title = document.querySelector('#title-field').value;
        let description = document.querySelector('#desc-field').value;
        let notes = document.querySelector('#notes-field').value;
        let p = new Project(title, description, notes, uid);
        p.todos = projectObj.todos;
        return p;
        /* PULL TODOS FROM MODAL TOO */
    }
}

export {render_allProjects};