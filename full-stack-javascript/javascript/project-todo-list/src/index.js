import './styles/styles.css';
import './scripts/dom/domController.js';
import { clearStorage, save, load, deleteFromStorage } from './scripts/storage.js';
import { Project } from './scripts/obj/Project.js';
import { ToDo } from './scripts/obj/ToDo.js';

let loaded = {};

(function initialise() {
    clearStorage();
    buildTestData();
    let todos = load('todo');
    let projects = load('project');
    setUIDs(todos, projects);
    // let t = new ToDo(null, null, null, null);
    // console.log(t);
})();

function setUIDs(todos, projects) {
    ToDo.updateUidSeed(determinedNewUidSeed(todos));
    console.log("TUID seed: " + ToDo.getUidSeed());

    Project.updateUidSeed(determinedNewUidSeed(projects));
    console.log("PUID seed: " + Project.getUidSeed());

    function determinedNewUidSeed(objects) {
        let highest = objects.reduce((p, el) => {
            if (p <= el.uid) return el.uid + 1;
        }, 0);
        return highest;
    }
};

function buildTestData() {
    // addTestToDosToStorage(7);
    let tProj = new Project("ptitle1", "pdesc1", "pnotes1", 5555);
    let t1 = new ToDo("ttitle1a", "tdesc1a", new Date(1, 1, 1), 1, "some notes", 1111);
    let t2 = new ToDo("ttitle1b", "tdesc1b", new Date(1, 1, 1), 1, "some notes", 1112);
    t1.addToCheckList(true, "text checklist item");
    t2.addToCheckList(false, "text checklist item");
    t2.addToCheckList(true, "text checklist item");
    tProj.addTodo(t1);
    tProj.addTodo(t2);
    tProj.addTodo(new ToDo("ttitle2", "tdesc2", new Date(2, 2, 2), 2, "some notes", 2222));

    let tProj2 = new Project("ptitle2", "pdesc2", "pnotes2", 6666);
    tProj2.addTodo(new ToDo("ttitle3", "tdesc3", new Date(3, 3, 3), 3, "some notes", 3333));
    tProj2.addTodo(new ToDo("ttitle4", "tdesc4", new Date(4, 4, 4), 4, "some notes", 4444));
    save(tProj);
    save(tProj2);

    let loneT = new ToDo("not in any project", "description - this one isnt in a project ".repeat(10), new Date(5, 5, 5), 5, "some notes", 1337);
    save(loneT);

    //deleteFromStorage('todo', t2.uid);
    //console.log(load('todo'));

    //let whatever = load("project");
    //console.log(whatever);


    //console.log(window['localStorage']);

    //console.log(load("todo"));
}