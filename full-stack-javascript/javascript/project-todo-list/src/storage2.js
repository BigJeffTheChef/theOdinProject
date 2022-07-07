import {ToDo} from './ToDo.js';
import {Project} from './Project.js';
const json = require('./localStorageStructure.json');

/**
 * 
 * @param {ToDo | Project} data 
 */
 function save(data) {
    /*
    LOCAL STORAGE SAVE STRUCTURE:
    Projects :  ["project uid" : {uid, title, desc, notes, uids of todos},  ]
    ToDos :     "ToDo uid" : "Stringified ToDo objects",
    */
    if (data instanceof ToDo) {
        sTodo(data);
    } else if (data instanceof Project) {
        sProject(data);
    }

    function sTodo(toDoObj) {
        
    }

    function sProject(projectObj) {

    }
}

function load() {
    let data = json;
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
    let s = loadToDos();
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}