import './styles/styles.css';
import './scripts/dom/domController.js';
import { clearStorage, save, load, } from './scripts/storage.js';
import { Project } from './scripts/obj/Project.js';
import { ToDo } from './scripts/obj/ToDo.js';
// import './storage.js';



buildTestData();

// set uid seeds
let todos = load('todo');
let highest = todos.reduce((p, el) => {
    if (p <= el.uid) return p+1;
}, 0);
console.log("highest: " + highest)

function buildTestData() {
    clearStorage();
    // addTestToDosToStorage(7);
    let tProj = new Project("ptitle1", "pdesc1", "pnotes1", 5555);
    let t1 = new ToDo("ttitle1a", "tdesc1a", new Date(1,1,1), 1, 1111);
    let t2 = new ToDo("ttitle1b", "tdesc1b", new Date(1,1,1), 1, 1112);
    t1.addToCheckList(true, "text checklist item");
    t2.addToCheckList(false, "text checklist item");
    t2.addToCheckList(true, "text checklist item");
    tProj.addTodo(t1);
    tProj.addTodo(t2);
    tProj.addTodo(new ToDo("ttitle2", "tdesc2", new Date(2,2,2), 2, 2222));

    let tProj2 = new Project("ptitle2", "pdesc2", "pnotes2", 6666);
    tProj2.addTodo(new ToDo("ttitle3", "tdesc3", new Date(3,3,3), 3, 3333));
    tProj2.addTodo(new ToDo("ttitle4", "tdesc4", new Date(4,4,4), 4, 4444));
    save(tProj);
    save(tProj2);

    let loneT = new ToDo("not in any project", "description - this one isnt in a project ".repeat(70), new Date(5,5,5), 5);
    loneT.notes = "test notes";
    save(loneT);

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