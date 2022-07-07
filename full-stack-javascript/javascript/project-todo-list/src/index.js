import './styles/styles.css';
import './styles/todo-modal.css';
import './domController.js';
import { clearStorage, addTestToDosToStorage, addTestProjectToStorage, displayStorage, save} from './storage.js';
import { Project } from './Project';
import { ToDo } from './ToDo';
// import './storage.js';

(function debugPrints() {
    console.group('debug prints');
    clearStorage();
    // addTestToDosToStorage(7);
    let tProj = new Project("ptitle", "pdesc", "pnotes", 4444);
    tProj.addTodo(new ToDo("ttitle1", "tdesc1", new Date(1,1,1), 1, 1111));
    tProj.addTodo(new ToDo("ttitle2", "tdesc2", new Date(2,2,2), 2, 2222));
    save(tProj);
    console.log(window['localStorage']);
    console.groupEnd('debug prints');
})();


// (function generateTestToDos() {
//     console.groupCollapsed('debug prints');
//     clearStorage();
//     displayStorage();
//     addTestProjectToStorage();
    
//     console.groupEnd('debug prints');
// })();