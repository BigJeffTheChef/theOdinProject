import { ToDo } from "./ToDo";

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
        // return e instanceof DOMException && (
        //     // everything except Firefox
        //     e.code === 22 ||
        //     // Firefox
        //     e.code === 1014 ||
        //     // test name field too, because code might not be present
        //     // everything except Firefox
        //     e.name === 'QuotaExceededError' ||
        //     // Firefox
        //     e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        //     // acknowledge QuotaExceededError only if there's something already stored
        //     (storage && storage.length !== 0);
        return false;
    }
}

// console.log(`local storage availabe: ${localStorageAvailable()}`)

/**
 *  search local storage to todo uid
 *      if found, overwrite that element
 *      else create a new element
 * @param {*} toDoObj 
 */
function saveToDo(toDoObj) {
    let s = getStorage();
    if (localStorageAvailable()) {
        let strang = JSON.stringify(toDoObj);
        s.setItem(toDoObj.uid, strang);
        console.log(`obg with uid = ${toDoObj.uid} added:`);
        console.log(strang);
    }
}

function loadToDos() {
    if (localStorageAvailable()) {
        let s = getStorage();
        console.log(s);
        // console.log(storedToDos[0]);
        // console.log(storedToDos[1]);
        // console.log(storedToDos[2]);
        Storage;
        for (let i = 0; i < s.length; i++) {
            let ret = JSON.parse(s.getItem(s.key(i)));
            console.log(ret);
            let newT1 = new ToDo(ret.title, ret.description, ret.dueDate, ret.priority, ret.uid);
            console.log(newT1);
        }
    }
};

function getStorage() {
    return window['localStorage'];
}

// getStorage().clear();
// let x = new ToDo("test this saved 1", "test desc 1", "01/01/01", 1);
// let y = new ToDo("test this saved 2", "test desc 2", "02/02/02", 2);
// saveToDo(x);
// saveToDo(y);
// console.log("retrieved: " + getStorage().getItem(x.uid));
// console.log("retrieved: " + getStorage().getItem(y.uid));
// loadToDos();

export { saveToDo, loadToDos };