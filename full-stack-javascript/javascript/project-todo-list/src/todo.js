class ToDo {
    #title;
    #description;
    #dueDate;
    #priority;

    static MIN_PRIORITY = 1;
    static MAX_PRIORITY = 5;

    static PRIORITIES = ['Critical', 'High', 'Medium', 'Low', 'Unimportant'];

    constructor(title) {
        this._title = title || 'New task';
        this._description = 'No description added';
        this._dueDate = null;
        this._priority = null;
    }

    get title() { return this._title };
    set title(newTitle) {
        if (newTitle.length === 0) throw 'ERROR: ToDo title may not be empty';
        if (newTitle.match(/^\s+$/)) throw 'ERROR: ToDo title may not be blank (whitespace only)';
        this._title = newTitle
    };

    get description() { return this._description };
    set description(newDesc) { this._description = newDesc };

    get dueDate() { return this._dueDate };
    set dueDate(newDueDate) { this._dueDate = newDueDate };

    get priority() { return this._priority };
    set priority(newPriority) { this._priority = newPriority };

    toString() {
        return 'Title:       ' + '\n' + this._title + '\n\n' +
            'Description: ' + '\n' + this._description + '\n\n' +
            'Due Date:    ' + '\n' + this._dueDate + '\n\n' +
            'Priority:    ' + '\n' + this._priority
    };
}

// console.group('object testing');
// let testObj = new ToDo('test title');
// console.log(testObj.toString());
// let testObj2 = new ToDo('test title 2');
// console.log(testObj2.toString());
// let testObj3 = new ToDo();
// console.log(testObj3.toString());
// testObj3.title = "dogs n stuff";
// console.log(testObj3.toString());
// console.log(ToDo.MAX_PRIORITY);
// console.log(testObj3);
// console.log(testObj3.constructor.PRIORITIES);   // can access static properties
// // from instance constructor
// console.log(testObj3.title);
// try {
//     testObj3.title = "     ";
// } catch (err) {
//     console.log(err);
// }
// console.log(testObj3.title);
// console.groupEnd('object testing');
