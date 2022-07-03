import { format } from 'date-fns';

const WHITESPACE_ONLY_REGEX = /^\s+$/;
let uidSeed = 0;

/**
 * ToDo object class
 */
class ToDo {

    // private fields
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;
    #checklist;
    #uid;

    // static fields
    static MIN_PRIORITY = 1;
    static MAX_PRIORITY = 5;
    static PRIORITIES = ['Critical', 'High', 'Medium', 'Low', 'Unimportant'];
    static MAX_CHECKLIST_TEXT_LENGTH = 255;

    /**
     * Base class for all ToDo classes.
     * @param {string} title 
     * @param {string} description 
     * @param {Date} dueDate 
     * @param {number} priority 
     * @param {number|undefined} uid  
     */
    constructor(title, description, dueDate, priority, uid) {
        this.title = title || 'New task';
        this.description = description || 'No description added';
        this.dueDate = dueDate;
        this.priority = priority || null;
        this.notes = "";
        this.#checklist = []; // directly set to empty array
        this.uid = uid || ++uidSeed;
    }

    get checklist() { return this.#checklist };

    get uid() { return this.#uid };
    set uid(newUid) { this.#uid = newUid };

    get notes() { return this.#notes };
    set notes(newNotes) { this.#notes = newNotes };

    get title() { return this.#title };
    /**
     * @param {string} newTitle the new title to set
     * @throws Error if newTitle length is 0 or is only whitespace
     */
    set title(newTitle) {
        if (newTitle.length === 0) throw new Error('ERROR: ToDo title may not be empty');
        if (newTitle.match(WHITESPACE_ONLY_REGEX)) throw new Error('ERROR: ToDo title may not be blank (whitespace only)');
        this.#title = newTitle;
    };

    get description() { return this.#description };
    set description(newDesc) { this.#description = newDesc };

    get dueDate() { return this.#dueDate };
    /**
     * @param {Date} newDueDate the new due date to set
     * @throws Error if newDueDate is not a Date object
     */
    set dueDate(newDueDate) {
        if (!(newDueDate instanceof Date)) {
            throw Error('due date must be a Date');
        }
        this.#dueDate = newDueDate
    };

    get priority() { return this.#priority };
    /**
     * @param {number }newPriority
     * @throws Error if newPriority is less than ToDo.MIN_PRIORITY or greater than ToDo.MAX_PRIORITY.
     */
    set priority(newPriority) {
        if (newPriority < ToDo.MIN_PRIORITY || newPriority > ToDo.MAX_PRIORITY) {
            throw new Error(`Priority must be ${ToDo.MIN_PRIORITY} to ${ToDo.MAX_PRIORITY} (inclusive), but ${newPriority} was specified`);
        }
        this.#priority = newPriority;
    };

    /**
     * Adds a new checklist item. each item is a 2 length array containing a boolean at
     * index 0 and a string at index 1.
     * @param {boolean} complete 
     * @param {string} text 
     * @return true if added successfully, false if not. 
     */
    addToCheckList(complete, text) {
        if (typeof complete === 'boolean' && typeof text === 'string' && text.length <= ToDo.MAX_CHECKLIST_TEXT_LENGTH) {
            this.#checklist.push([complete, text]);
            return true;
        }
        return false;
    }

    /**
     * Removes a Checklist item if its text is equal to parameter text
     * @param {string} text 
     * @returns true if removed successfully, false if not.
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

    /**
     * Call to serialize this ToDo object into JSON
     * @returns 
     */
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


// testing_ToDo();
// testing_ToDoChecklist();
// testing_save_load();

export { ToDo };

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