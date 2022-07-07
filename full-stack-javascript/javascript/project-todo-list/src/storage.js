import { ToDo } from './ToDo.js';
import { Project } from './Project.js';
//import {json} from './localStorageStructure.json';
const jsonStructure = require('./localStorageStructure.json');
const jsonExample = require('./localStorageExample.json');


/* 

    OLD SAVE /LOADS

*/

/**
 *  search local storage to todo uid
 *      if found, overwrite that element
 *      else create a new element
 * @param {ToDo} toDoObj ToDo object instance 
 */
function saveToDo(toDoObj) {

    if (localStorageAvailable()) {
        let stringified = JSON.stringify(toDoObj);
        window['localStorage'].setItem(toDoObj.uid, stringified);
        // console.log(`obg with uid = ${toDoObj.uid} added:`);
        // console.log(stringified);
    }
}

/**
 * Load JSON from localStorage and parse into an array of ToDo objects
 * @returns {array} Array of toDo objects
 */
function loadToDos() {
    // if (localStorageAvailable()) {
    //     let s = getStorage();
    //     // console.log(s);
    //     let loaded = [];
    //     for (let i = 1; i <= s.length; i++) {
    //         // console.log(`i: ${i} - s.key(i): ${s.key(i)}`);
    //         let retrieved = JSON.parse(s.getItem(i));
    //         // console.log(retrieved);
    //         let todo = new ToDo(retrieved.title, retrieved.description, new Date(retrieved.dueDate), retrieved.priority, retrieved.uid);
    //         for (let i = 0; i < retrieved.checklist.length; i++) {
    //             todo.addToCheckList(retrieved.checklist[i][0], retrieved.checklist[i][1]);
    //         }
    //         loaded.push(todo);
    //     }
    //     return loaded;
    // }
};


/* 

    NEW SAVE /LOADS

*/

/**
 * 
 * @param {ToDo | Project} objToSave 
 * @throws Error if objToSave parameter is not a ToDo or Project object.
 */
function save(objToSave) {
    /*
    LOCAL STORAGE SAVE STRUCTURE:
    Projects :  [{uid, title, desc, notes, uids of todos}]
    ToDos :     "ToDo uid" : "Stringified ToDo objects"
    */
    if (localStorageAvailable()) {
        let storage = getStorage();

        // if storage does not contain required arrays, create them
        //if (storage['todos'] === undefined || storage['projects'] === undefined) {
        // storage.setItem('todos', "[]");
        // storage.setItem('projects', "[]");
        // storage.setItem('todos', "[]");
        // storage.setItem('projects', "[]");
        //}

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

            let storage = getStorage();
            // console.log(storage);

            let loaded;
            try {
                // attempt to load todos object from localStorage
                loaded = JSON.parse(storage.todos);
                // console.log(loaded);
            } catch (err) {
                // if parse fails then set to empty object
                loaded = {};
            }

            loaded[toDoObj.uid] = JSON.stringify(toDoObj);
            // console.log(loaded[toDoObj.uid]);
            // console.log(JSON.stringify(loaded));
            getStorage().setItem('todos', JSON.stringify(loaded));
            console.log(getStorage().getItem('todos'));
            // console.log(jsonExample.todos["1"]);
            // window['localStorage'].['todos'][objToSave.uid].setItem(JSON.stringify(toDoObj));
        }

        function sProject(projectObj) {
            let loaded;
            try {
                // attempt to load todos object from localStorage
                loaded = JSON.parse(storage.projects);
                // console.log(loaded);
            } catch (err) {
                // if parse fails then set to empty object
                loaded = {};
            }
            
            for (let todo of projectObj.todos) {
                sTodo(todo);
            }

            loaded[projectObj.uid] = JSON.stringify(projectObj);

            getStorage().setItem('projects', JSON.stringify(loaded));

            //localStorage.projects[projectObj.uid] = JSON.stringify(projectObj);
        }
    } else {
        console.log("Local storage is not available!");
    }
}

function load() {
    let data = jsonStructure;
    console.log(data);
}

function localStorageAvailable() {
    var storage;
    try {
        storage = window['localStorage'];
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
 * Alias function for retrieving localStorage
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
export { saveToDo, loadToDos, clearStorage, addTestToDosToStorage, addTestProjectToStorage, displayStorage, save };
