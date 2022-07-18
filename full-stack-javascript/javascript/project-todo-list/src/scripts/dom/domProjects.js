// function imports
import { clearContent, configExpandingMenuBtns, generateTemplate, elements, onCloseModal, closeModalAction, setContentTitle } from './domController.js';
import { createToDoCards, render_toDoModal } from './domToDos.js';
import { save, load } from '../storage.js';

// js objects
import { Project } from '../obj/Project.js';

// html templates
import templateCardProject from '../../html-templates/projectCard.html';
import templateProjectEditor from '../../html-templates/projectEditor.html';


function render_allProjects() {
    clearContent();
    setContentTitle('All Projects');
    configExpandingMenuBtns('add-project-button');

    elements.menuAddProjectBtns.forEach(element => element.addEventListener('click', () => render_project(null)));

    let projects = load('project');
    let cards = document.createElement('div');
    cards.classList.add('project-cards');
    for (let project of projects) {
        //console.log(project);
        let card = generateTemplate(templateCardProject);
        card.querySelector('.title').textContent = project.title;
        card.querySelector('.description').textContent = project.description;
        card.querySelector('.notes').textContent = project.notes;
        card.querySelector('.summary').textContent = ((project.todos.length === 0) ? "No" : project.todos.length) + " todo" + ((project.todos.length >= 1) ? "s" : "");
        card.addEventListener('click', () => render_project(project.uid));
        cards.appendChild(card);
    }
    elements.content.appendChild(cards);
}
function render_project(projectUid) {
    clearContent();
    configExpandingMenuBtns('add-project-button', 'add-todo-to-project-button');
    let projectObj = load('project', projectUid);
    if (projectObj === null) {
        projectObj = new Project(null, null, null);
        save(projectObj);
    }
    setContentTitle('Project: ' + projectObj.title);

    const uid = projectObj.uid;
    console.log('uid is meant to be: ' + uid);
    let content = generateTemplate(templateProjectEditor);
    let btnPanel = content.querySelector('.project-editor-button-panel');
    content.querySelector('#title-field').value = projectObj.title;
    content.querySelector('#desc-field').value = projectObj.description;
    content.querySelector('#notes-field').value = projectObj.notes;
    btnPanel.before(createToDoCards(projectObj.todos,
        () => {console.log('uid is: ' + uid); render_project(captureUid(uid))}
    ));
    elements.content.appendChild(content);

    content.querySelector('#save-button').addEventListener('click', () => save(pull()));
    content.querySelector('#add-button').addEventListener('click', () => render_toDoModal(null, () => render_project(uid), uid));

    function pull() {
        let title = document.querySelector('#title-field').value;
        let description = document.querySelector('#desc-field').value;
        let notes = document.querySelector('#notes-field').value;
        let p = new Project(title, description, notes, uid);
        p.todos = projectObj.todos;
        return p;
    }

    function captureUid(uid) {
        return uid;
    }
}

export { render_allProjects };