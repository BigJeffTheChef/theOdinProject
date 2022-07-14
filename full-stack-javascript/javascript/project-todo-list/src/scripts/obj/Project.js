import {Todo} from './ToDo.js';

let uidSeed = 0;

class Project {
    
    #uid;

    #title;
    #description;
    #notes;
    #todos;
    

    /**
     * 
     * @param {string} description 
     * @param {string} notes 
     */
    constructor(title, description, notes, uid) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.#todos = [];
        this.#uid = uid || ++uidSeed;
    }

    set title(newTitle) {this.#title = newTitle};
    get title() {return this.#title};

    set todos(toDoArray) { this.#todos = toDoArray };
    get todos() {return this.#todos};

    set description(newDescription) {this.#description = newDescription};
    get description() {return this.#description};

    set notes(newNotes) {this.#notes = newNotes};
    get notes() {return this.#notes};

    get uid() {return this.#uid};

    addTodo(toDoObj) {
        this.#todos.push(toDoObj);
    }

    removeTodo(toDoObj) {
        this.#todos.splice(this.#todos.findIndex((o) => o.uid == toDoObj.uid), 1);
    }

    toString() {
        let str = `Desc: ${this.#description}\n\nNotes: ${this.#notes}\n\nToDos:`;
        for (let todo of this.#todos) {
            str += "\n" + todo.toString();
        }
        return str;
    }

    toJSON() {
        let toDoUids = this.#todos.map((element) => element.uid);
        console.log('todo uids in project');
        //console.log(toDoUids);
        return {
            title: this.#title,
            description: this.#description,
            notes: this.#notes,
            toDoUids : toDoUids,
        }
    }
}

export {Project, uidSeed};