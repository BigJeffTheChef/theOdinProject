import { ToDo } from "./ToDo";

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

export {testing_ToDo, testing_ToDoChecklist, testing_save_load};