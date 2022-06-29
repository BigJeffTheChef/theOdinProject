const WHITESPACE_ONLY_REGEX = /^\s+$/;

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

    static MIN_PRIORITY = 1;
    static MAX_PRIORITY = 5;

    static PRIORITIES = ['Critical', 'High', 'Medium', 'Low', 'Unimportant'];

    constructor(title, description, dueDate, priority) {
        this.#title = title || 'New task';
        this.#description = description || 'No description added';
        this.#dueDate = dueDate || null;
        this.#priority = priority || null;
        this.#notes = "";
        this.#checklist = [];
    }

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
        return `Title:${this.#title},Description:${this.#description},Due-Date:${this.#dueDate},Priority:${this.#priority}`;
    };

    // toJSON() {
    //     return `{"title":"${this.#title}","description":"${this.#description}","dueDate":"${this.#dueDate}"}`; 
    // };

    toJSON() {
        return { title: this.#title, description: this.#description, dueDate: this.#dueDate };
    };
}

//testing_ToDo();
// testing_ToDoChecklist();

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

export { ToDo };

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