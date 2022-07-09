import './styles/styles.css';
import './styles/todo-modal.css';
import './domController.js';
import { clearStorage, addTestToDosToStorage, addTestProjectToStorage, displayStorage, save, load, getStorage} from './storage.js';
import { Project } from './Project';
import { ToDo } from './ToDo';
// import './storage.js';

(function debugPrints() {
    console.group('debug prints');
    console.log(window['localStorage']);
    //buildTestData();
    console.groupEnd('debug prints');
})();

function buildTestData() {
            clearStorage();
    // addTestToDosToStorage(7);
    let tProj = new Project("ptitle1", "pdesc1", "pnotes1", 5555);
    let t1 = new ToDo("ttitle1", "tdesc1", new Date(1,1,1), 1, 1111);
    t1.addToCheckList(true, "text checklist item");
    tProj.addTodo(t1);
    tProj.addTodo(new ToDo("ttitle2", "tdesc2", new Date(2,2,2), 2, 2222));

    let tProj2 = new Project("ptitle2", "pdesc2", "pnotes2", 6666);
    tProj2.addTodo(new ToDo("ttitle3", "tdesc3", new Date(3,3,3), 3, 3333));
    tProj2.addTodo(new ToDo("ttitle4", "tdesc4", new Date(4,4,4), 4, 4444));
    save(tProj);
    save(tProj2);

    let whatever = load("project");
    console.log(whatever);


    console.log(window['localStorage']);

    console.log(load("todo"));
}

// (function generateTestToDos() {
//     console.groupCollapsed('debug prints');
//     clearStorage();
//     displayStorage();
//     addTestProjectToStorage();
    
//     console.groupEnd('debug prints');
// })();