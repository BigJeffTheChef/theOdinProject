const WHITESPACE_ONLY_REGEX = /^\s+$/;
let uidSeed = 0;
/**
 * Base class for all ToDo classes.
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
        this.#title = title || 'New task';
        this.#description = description || 'No description added';
        this.#dueDate = dueDate || null;
        this.#priority = priority || null;
        this.#notes = "";
        this.#checklist = [];
        this.#uid = uid || ++uidSeed;
    }

    get uid() { return this.#uid };

    get notes() { return this.#notes };
    set notes(newNotes) { this.#notes = newNotes };

    get title() { return this._title };
    set title(newTitle) {
        if (newTitle.length === 0) throw 'ERROR: ToDo title may not be empty';
        if (newTitle.match(WHITESPACE_ONLY_REGEX)) throw 'ERROR: ToDo title may not be blank (whitespace only)';
        this._title = newTitle
    };

    get description() { return this.#description };
    set description(newDesc) { this.#description = newDesc };

    get dueDate() { return this.#dueDate };
    set dueDate(newDueDate) { this.#dueDate = newDueDate };

    get priority() { return this.#priority };
    set priority(newPriority) {
        if (newPriority < MIN_PRIORITY || newPriority > MAX_PRIORITY) {
            throw `Priority must be ${MIN_PRIORITY} to ${MAX_PRIORITY} (inclusive), but ${newPriority} was specified`;
        }
        this.#priority = newPriority;
    };

    toString() {
        return `Title:${this.#title}\nDescription:${this.#description}\nDue-Date:${this.#dueDate}\nPriority:${this.#priority}\nuid:${this.#uid}`;
    };

    // toJSON() {
    //     return `{"title":"${this.#title}","description":"${this.#description}","dueDate":"${this.#dueDate}"}`; 
    // };

    toJSON() {
        return { title: this.#title, description: this.#description, dueDate: this.#dueDate,priority: this.#priority, uid: this.#uid };
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
        let loaded = [];
        Storage;
        for (let i = 0; i < s.length; i++) {
            let retrieved = JSON.parse(s.getItem(s.key(i)));
            let todo = new ToDo(retrieved.title, retrieved.description, retrieved.dueDate, retrieved.priority, retrieved.uid);
            loaded.push(todo);
        }
        return loaded;
    }
};

function getStorage() {
    return window['localStorage'];
}

function clearStorage() {
    console.log('cleared local storage');
    getStorage().clear();
}

function displayStorage() {
    let s = loadToDos();
    for (let i =0 ; i< s.length; i++) {
        console.log(s[i]);
    }
}


// testing_ToDo();
// testing_ToDoChecklist();
//testing_save_load();
//clearStorage();
displayStorage();

function testing_save_load() {
    console.group('testing load and save');

    getStorage().clear();
    console.group('creating ToDos');
    let x = new ToDo("test this saved 1", "test desc 1", "01/01/01", 1);
    let y = new ToDo("test this saved 2", "test desc 2", "02/02/02", 2);
    console.log(x);
    console.log(y);
    console.groupEnd('creating ToDos');

    console.group('saving ToDos');
    saveToDo(x);
    saveToDo(y);
    console.groupEnd('saving ToDos');

    console.group('loading ToDos');
    console.log("retrieved: " + getStorage().getItem(x.uid));
    console.log("retrieved: " + getStorage().getItem(y.uid));
    console.log(loadToDos());
    console.groupEnd('loading ToDos');

    console.groupEnd('testing load and save');
}

function testing_ToDo() {
    console.group('ToDo testing');

    let testObj = new ToDo('test title');
    console.log(testObj.toString());
    let testObj2 = new ToDo('test title 2');
    console.log(testObj2.toString());
    let testObj3 = new ToDo();
    console.log(testObj3.toString());
    testObj3.title = "dogs n stuff";
    console.log(testObj3.toString());
    console.log(ToDo.MAX_PRIORITY);
    console.log(testObj3);
    console.log(testObj3.constructor.PRIORITIES);   // can access static properties
    // from instance constructor
    console.log(testObj3.title);
    try {
        testObj3.title = "     ";
    } catch (err) {
        console.log(err);
    }
    console.log(testObj3.title);
    console.groupEnd('ToDo testing');
}

function testing_ToDoChecklist() {
    console.group('ToDoChecklist testing');
    let c1 = new ToDoCheckList('test checklist', 'test description', 'some day', 1);

    console.log(c1.toString());
    const item1 = 'a new list item';
    c1.addItem(item1, false);

    console.log(c1.toString());

    c1.addItem('another new list item', true);
    console.log(c1.toString());

    try {
        c1.addItem('', true);
    } catch (err) {
        console.log("empty item str: " + err);
    }

    try {
        c1.addItem('    \n', true);
    } catch (err) {
        console.log("whitespace only item str 1: " + err);
    }

    try {
        c1.addItem('                      ', true);
    } catch (err) {
        console.log("whitespace only item str 2: " + err);
    }

    try {
        c1.addItem('x', 'yo');
    } catch (err) {
        console.log("non-boolean complete 1: " + err);
    }

    try {
        c1.addItem('x', null);
    } catch (err) {
        console.log("non-boolean complete 2: " + err);
    }

    try {
        c1.addItem('x', undefined);
    } catch (err) {
        console.log("non-boolean complete 3: " + err);
    }

    console.log(c1.removeItem(item1));
    console.log(c1.removeItem('an item not in list'));
    console.groupEnd('ToDoChecklist testing');
}

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