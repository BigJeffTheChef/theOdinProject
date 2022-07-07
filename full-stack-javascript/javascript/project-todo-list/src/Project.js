import {Todo} from './ToDo.js';

class Project {
    #todos
    #description
    #notes;

    /**
     * 
     * @param {string} description 
     * @param {string} notes 
     */
    constructor(description, notes) {
        this.description = description;
        this.notes = notes;
        this.#todos = [];
    }

    set todos(toDoArray) { this.#todos = toDoArray };
    get todos() {return this.#todos};

    set description(newDescription) {this.#description = newDescription};
    get description() {return this.#description};

    set notes(newNotes) {this.#notes = newNotes};
    get notes() {return this.#notes};

    addTodo(toDoObj) {
        this.#todos.push(toDoObj);
    }

    removeTodo(toDoObj) {
        this.#todos.splice(this.#todos.findIndex((o) => o.uid = toDoObj.uid), 1);
    }

    toString() {
        let str = `Desc: ${this.#description}\n\nNotes: ${this.#notes}\n\nToDos:`;
        for (let todo of this.#todos) {
            str += "\n" + todo.toString();
        }
        return str;
    }
}

export {Project};