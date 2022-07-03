import {ToDo} from './ToDo.js';

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
    if (localStorageAvailable()) {
        let s = getStorage();
        // console.log(s);
        let loaded = [];
        for (let i = 1; i <= s.length; i++) {
            // console.log(`i: ${i} - s.key(i): ${s.key(i)}`);
            let retrieved = JSON.parse(s.getItem(i));
            // console.log(retrieved);
            let todo = new ToDo(retrieved.title, retrieved.description, new Date(retrieved.dueDate), retrieved.priority, retrieved.uid);
            for (let i = 0; i < retrieved.checklist.length; i++) {
                todo.addToCheckList(retrieved.checklist[i][0], retrieved.checklist[i][1]);
            }
            loaded.push(todo);
        }
        return loaded;
    }
};

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

/**
 * Add a specified number of test ToDo objects to localStorage
 * 
 * @param {number} numToAdd 
 */
function addTestToDosToStorage(numToAdd = 7) {
    let checklistCounter = 3;
    for (let i = 0; i < numToAdd; i++) {
        let num = i + 1;
        let title = 'test title ' + num;
        let desc = (i % 2 === 0) ? ('test description ' + num).repeat(20) : 'test description ' + num;
        let date = new Date(num, i, num);
        let priority = (num >= 1 && num <= 5) ? num : 1;
        let t = new ToDo(title, desc, date, priority);
        for (let j = 0; j < checklistCounter; j++) {
            let rand = Math.floor((Math.random() * 100));
            t.addToCheckList(true, rand + " test checklist item" + (j + 1));
        }
        saveToDo(t);
    }
    console.log(`${numToAdd} test ToDo objects added to storage!`);
}

export {saveToDo, loadToDos, clearStorage, addTestToDosToStorage, displayStorage};
