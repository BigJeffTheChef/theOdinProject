// function imports
import {clearContent, configExpandingMenuBtns, generateTemplate, elements, onCloseModal, closeModalAction} from './domController.js';
import { createToDoCards } from './domToDos.js';
import {save, load} from '../storage.js';

// js objects
import {Project} from '../obj/Project.js';

// html templates
import templateCardProject from '../../html-templates/projectCard.html';
import templateModalProject_container from '../../html-templates/projectModal.html';
import templateCardToDo from '../../html-templates/toDoCard.html';


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

    modal.querySelector('#modal-form').appendChild(createToDoCards(projectObj.todos));
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

export {render_allProjects};