import { ToDo } from './ToDo.js';
import { Project } from './Project.js';
//import {json} from './localStorageStructure.json';
const jsonStructure = require('./localStorageStructure.json');
const jsonExample = require('./localStorageExample.json');

/**
 * 
 * @param {ToDo | Project} objToSave 
 * @throws Error if objToSave parameter is not a ToDo or Project object.
 */
function save(objToSave) {
    if (localStorageAvailable()) {

        if (objToSave instanceof ToDo) {
            // save ToDo
            sTodo(objToSave);
        } else if (objToSave instanceof Project) {
            // save Project
            sProject(objToSave);
        } else {
            console.log('save function parameter "objToSave" must be a ToDo object or a Project object but was not');
        }

        function sTodo(toDoObj) {
            // console.log(toDoObj);

            // console.log(storage);

            let loadedTodo;
            try {
                // attempt to load todos object from localStorage
                loadedTodo = JSON.parse(getStorage().todos);
                // console.log(loaded);
            } catch (err) {
                // if parse fails then set to empty object
                loadedTodo = {};
            }

            loadedTodo[toDoObj.uid] = toDoObj;
            // console.log(loaded[toDoObj.uid]);
            // console.log(JSON.stringify(loaded));
            getStorage().setItem('todos', JSON.stringify(loadedTodo));
            //console.log(getStorage().getItem('todos'));
            // console.log(jsonExample.todos["1"]);
            // getStorage().['todos'][objToSave.uid].setItem(JSON.stringify(toDoObj));
        }

        function sProject(projectObj) {
            let loadedProject;
            
            try {
                // attempt to load todos object from localStorage
                loadedProject = JSON.parse(getStorage().projects);
                // console.log(loaded);
            } catch (err) {
                // if parse fails then set to empty object
                loadedProject = {};
            }
            
            for (let todo of projectObj.todos) {
                sTodo(todo);
            }

            loadedProject[projectObj.uid] = JSON.stringify(projectObj);

            getStorage().setItem('projects', JSON.stringify(loadedProject));

            //localStorage.projects[projectObj.uid] = JSON.stringify(projectObj);
        }
    } else {
        console.log("Local storage is not available!");
    }
}

function loadProjects() {
    let loadedProjects = JSON.parse(getStorage().getItem('projects'));
    console.log(loadedProjects);
    let projectObjs = [];
    for (let projectUID in loadedProjects) {
        //console.log("projectUID: " + projectUID);

        let obj = JSON.parse(loadedProjects[projectUID]);
        //console.log(obj);

        let project = new Project(obj.title, obj.description, obj.notes, projectUID);
        //console.log(project);

        let todoUIDs = obj.toDoUids;
        //console.log("todo uids:" + todoUIDs);

        let todos = [];
        for (let tuid of todoUIDs) {
            //console.log("a tuid: " + tuid);
            let t = loadTodo(tuid);
            project.addTodo(t);
        }
        projectObjs.push(project);
    }
    
    // let data = jsonStructure;
    // console.log(data);
    return projectObjs;
}

function loadTodo(toDoUid) {
    //console.log("attempting to load todo with uid: " + toDoUid);
    
    let loadedTodosAll = getStorage().getItem('todos');
    //console.log(loadedTodosAll);

    let loadedTodo = JSON.parse(loadedTodosAll)[toDoUid];
    //console.log(loadedTodo);

    // let obj = JSON.parse(JSON.parse(loadedTodosAll)[toDoUid]);
    // //console.log(obj);

    let todo = new ToDo(loadedTodo.title, loadedTodo.description, new Date(loadedTodo.dueDate), loadedTodo.priority, loadedTodo.uid);
    //console.log(todo.toString());

    return todo;


}

function loadToDos() {
    let r = getStorage().getItem('todos');
    console.log(r);

    let x = JSON.parse(r);
    console.log(x);

    let todos = [];
    for (let i in x) {
        
        let u = x[i];
        //console.log(u);
        let t  = new ToDo(u.title, u.description, new Date(u.dueDate), u.priority, u.uid);
        console.log(t);
        todos.push(t);
    }

    return todos;
}


function localStorageAvailable() {
    var storage;
    try {
        storage = getStorage();
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return false;
    }
}

/**
 * Retrieve json from storage source - currently localStorage
 * @returns a Storage object (array-like object of key:value pairs)
 */
function getStorage() {
    return window['localStorage'];
}

/**
 * Clear localStorage
 */
function clearStorage() {
    console.log('localStorage cleared!')
    getStorage().clear();
}

/**
 * Print to console all ToDo objects in localStorage
 */
function displayStorage() {
    // console.group('displaying storage');
    // let s = Array.from(loadToDos()) || [];
    // for (let i = 0; i < s.length; i++) {
    //     console.log(s[i]);
    // }
    // console.groupEnd('displaying storage');
}

/**
 * Generates a specified number of ToDo objects and returns them in an array.
 * @param {number} numToGenerate number of ToDo objects to generate, defaults to 7.
 * @returns an array of ToDo objects.
 */
function generateToDos(numToGenerate = 7) {
    let todos = [
        new ToDo("Test ToDo 1", "Test Description 1", new Date(1980, 0, 1), 1),
        new ToDo("Test ToDo 2", "Test Description 2", new Date(1985, 0, 12), 2),
        new ToDo("Test ToDo 3", "Test Description 3", new Date(1990, 0, 18), 3),
        new ToDo("Test ToDo 4", "Test Description 4", new Date(1995, 0, 19), 4),
        new ToDo("Test ToDo 5", "Test Description 5", new Date(2000, 0, 21), 5),
        new ToDo("Test ToDo 6", "Test Description 6", new Date(2005, 0, 29), 1),
        new ToDo("Test ToDo 7", "Test Description 7", new Date(2022, 0, 10), 2),
        new ToDo("Test ToDo 8", "Test Description 8", new Date(2022, 2, 12), 3),
        new ToDo("Test ToDo 9", "Test Description 9", new Date(2022, 11, 21), 4),
    ];
    let checklistsToAdd = 1;
    let checklistComplete = true;
    for (let t of todos) {
        for (let i = 0; i < checklistsToAdd; i++) {
            checklistComplete = (checklistComplete) ? false : true;
            t.addToCheckList(checklistComplete, "abcde ".repeat(checklistsToAdd));
        }
        checklistsToAdd++;
    }
    return todos;
}

/**
 * Add a specified number of test ToDo objects to localStorage
 * 
 * @param {number} numToAdd 
 */
function addTestToDosToStorage(numToAdd = 7) {
    let todos = generateToDos();
    for (let todo of todos) {
        saveToDo(todo);
    }
    console.log(`${todos.length} test ToDo objects added to storage!`);
}


function addTestProjectToStorage(numOfProjects = 1) {
    for (let i = 0; i < numOfProjects; i++) {
        let project = new Project("Test Project", "notes for test project");
        let todos = generateToDos();
        project.todos = todos;
        console.log(project.toString());
    }

}
export { clearStorage, addTestToDosToStorage, addTestProjectToStorage, displayStorage, save, loadProjects, loadTodo, loadToDos };
