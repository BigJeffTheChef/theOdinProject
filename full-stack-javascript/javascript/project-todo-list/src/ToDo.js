import { testing_save_load, testing_ToDo, testing_ToDoChecklist } from "./ToDo_Testing";
import { format } from 'date-fns';

const WHITESPACE_ONLY_REGEX = /^\s+$/;
let uidSeed = 0;

// function toDo(title, description, dueDate, priority, uid) {
//         this._title = title || 'New task';
//         this._description = description || 'No description added';
//         this._dueDate = dueDate || null;
//         this._priority = priority || null;
//         this._notes = "";
//         this._checklist = [];
//         this._uid = uid || ++uidSeed;
// }

// function toDoMixin() {
//     function getTitle() {return this._title};
//     function setTitle(newTitle) {
//         if (newTitle.length === 0) throw 'ERROR: ToDo title may not be empty';
//         if (newTitle.match(WHITESPACE_ONLY_REGEX)) throw 'ERROR: ToDo title may not be blank (whitespace only)';
//         this._title = newTitle
//     };
// }

/**
 * Base class for all ToDo classes.
 * @param {string} title 
 * @param {string} description 
 * @param {date} dueDate 
 * @param {number} priority 
 * @param {number} uid  
 */
class ToDo {
    // private fields/ properties
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;
    #checklist;
    #uid;

    static MIN_PRIORITY = 1;
    static MAX_PRIORITY = 5;

    static PRIORITIES = ['Critical', 'High', 'Medium', 'Low', 'Unimportant'];

    constructor(title, description, dueDate, priority, uid) {
        this.title = title || 'New task';
        this.description = description || 'No description added';
        this.dueDate = dueDate;
        this.priority = priority || null;
        this.notes = "";
        this.#checklist = [];
        this.uid = uid || ++uidSeed;
    }

    get checklist() { return this.#checklist };

    get uid() { return this.#uid };
    set uid(newUid) {this.#uid = newUid};

    get notes() { return this.#notes };
    set notes(newNotes) { this.#notes = newNotes };

    get title() { return this.#title };
    set title(newTitle) {
        if (newTitle.length === 0) throw 'ERROR: ToDo title may not be empty';
        if (newTitle.match(WHITESPACE_ONLY_REGEX)) throw 'ERROR: ToDo title may not be blank (whitespace only)';
        this.#title = newTitle
    };

    get description() { return this.#description };
    set description(newDesc) { this.#description = newDesc };

    get dueDate() { return this.#dueDate };
    set dueDate(newDueDate) {
        if (!(newDueDate instanceof Date)) {
            throw Error('due date must be a Date');
        }
        this.#dueDate = newDueDate
    };

    get priority() { return this.#priority };
    set priority(newPriority) {
        if (newPriority < ToDo.MIN_PRIORITY || newPriority > ToDo.MAX_PRIORITY) {
            throw `Priority must be ${ToDo.MIN_PRIORITY} to ${ToDo.MAX_PRIORITY} (inclusive), but ${newPriority} was specified`;
        }
        this.#priority = newPriority;
    };

    /**
     * Adds a new checklist item. each item is a 2 length array containing a boolean at
     * index 0 and a string at index 1.
     * @param {boolean} complete 
     * @param {string} text 
     */
    addToCheckList(complete, text) {
        if (typeof complete === 'boolean' && typeof text === 'string') {
            this.#checklist.push([complete, text]);
        }
    }

    /**
     * Removes a Checklist item if its text is equal to parameter text
     * @param {string} text 
     * @returns a boolean, representing if the item was found and removed
     */
    removeFromCheckList(text) {
        for (let i = 0; i < this.#checklist.length && !removed; i++) {
            if (this.#checklist[i][1] === text) {
                this.#checklist.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    toString() {
        return `Title:${this.#title}\nDescription:${this.#description}\nDue-Date:${this.#dueDate}\nPriority:${this.#priority}\nuid:${this.#uid}`;
    };

    toJSON() {
        return {
            title: this.#title,
            description: this.#description,
            dueDate: this.#dueDate,
            priority: this.#priority,
            checklist: this.#checklist,
            uid: this.#uid
        };
    };
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

//
//
//  localStorage Utility functions
//
//

/**
 * Alias function for retrieving localStorage
 * @returns 
 */
function getStorage() {
    return window['localStorage'];
}

/**
 * Clear localStorage
 */
function clearStorage() {
    console.log('cleared local storage');
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
function addTestToDosToStorage(numToAdd = 2) {
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
}


// testing_ToDo();
// testing_ToDoChecklist();
// testing_save_load();
clearStorage();
addTestToDosToStorage(7);
// displayStorage();


export { ToDo, saveToDo, loadToDos };

// /**
//  * Extension of ToDo class, to include a checklist of items to do.
//  */
// class ToDoCheckList extends ToDo {

//     #checklist;

//     /**
//      * 
//      * @param {string} title 
//      * @param {string} description 
//      * @param {date} dueDate 
//      * @param {number} priority 
//      */
//     constructor(title, description, dueDate, priority) {
//         super(title, description, dueDate, priority);
//         this.#checklist = [];
//     }

//     get checklist() { return this._checklist }

//     /**
//      * Remove a checklist item
//      * @param {string} item 
//      * @returns true if found (and removed), false if not found (and not removed).
//      */
//     removeItem(item) {
//         const index = this.#checklist.indexOf(item);
//         if (index !== -1) {
//             this.#checklist.splice(index, 1);
//             return true;
//         }
//         return false;
//     }

//     /**
//      * 
//      * @param {string} item 
//      * @param {boolean} complete 
//      * @throws if item is not a string or complete is not a boolean
//      */
//     addItem(item, complete) {
//         validateItem(item);
//         validateComplete(complete);
//         this.#checklist.push([item, complete]);

//         function validateItem(item) {
//             if (typeof item !== 'string') {
//                 throw 'item parameter must be a String';
//             }
//             if (item.length === 0 || item.match(WHITESPACE_ONLY_REGEX)) {
//                 throw 'item may not be empty/ blank or only whitespace';
//             }
//         }

//         function validateComplete(complete) {
//             let completeIsBoolean = typeof complete === 'boolean';
//             if (!completeIsBoolean) {
//                 throw 'complete parameter must be a Boolean';
//             }
//         }
//     }

//     /**
//      * @returns A String representation of this ToDoChecklist object
//      */
//     toString() {
//         let str = super.toString();
//         if (this.#checklist.length > 0) {
//             str += '\nChecklist:\n'
//         }
//         for (let listItem of this.#checklist) {
//             str += listItem[0] + ' (Complete? ' + listItem[1] + ')\n';
//         }
//         return str;
//     }

// }