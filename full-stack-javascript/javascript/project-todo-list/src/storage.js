import { ToDo } from './ToDo.js';
import { Project } from './Project.js';
//import {json} from './localStorageStructure.json';
const jsonStructure = require('./localStorageStructure.json');
const jsonExample = require('./localStorageExample.json');

/**
 * 
 * @param {ToDo | Project} objToSave 
 * @throws LocalStorageError if localStorage not accessible, or ParameterError if parameter is not a ToDo or Project object.
 */
function save(objToSave) {

    if (!localStorageAvailable()) throw new LocalStorageError('save', 'Local storage is not available! - save action not complete');

    if (objToSave instanceof ToDo) saveToDo(objToSave);

    else if (objToSave instanceof Project) saveProject(objToSave);

    else throw new ParameterError('objToSave', 'parameter must be a ToDo object or a Project object but was not');


    function saveToDo(toDoObj) {
        // console.log(toDoObj);

        // console.log(storage);

        let loadedTodo;
        try {
            // attempt to load todos object from localStorage
            loadedTodo = JSON.parse(getStorage().todos);
            // console.log(loaded);
        } catch (err) {
            // if parse fails then set to empty object
            loadedTodo = {};
        }

        loadedTodo[toDoObj.uid] = toDoObj;
        // console.log(loaded[toDoObj.uid]);
        // console.log(JSON.stringify(loaded));
        getStorage().setItem('todos', JSON.stringify(loadedTodo));
        //console.log(getStorage().getItem('todos'));
        // console.log(jsonExample.todos["1"]);
        // getStorage().['todos'][objToSave.uid].setItem(JSON.stringify(toDoObj));
    }
    function saveProject(projectObj) {
        let loadedProject;

        try {
            // attempt to load todos object from localStorage
            loadedProject = JSON.parse(getStorage().projects);
            // console.log(loaded);
        } catch (err) {
            // if parse fails then set to empty object
            loadedProject = {};
        }

        for (let todo of projectObj.todos) {
            saveToDo(todo);
        }

        loadedProject[projectObj.uid] = JSON.stringify(projectObj);

        getStorage().setItem('projects', JSON.stringify(loadedProject));

        //localStorage.projects[projectObj.uid] = JSON.stringify(projectObj);
    }
}

/**
 * Multi-use
 * @param {string} toLoad "todo" or "project"
 * @param {number} uid uid of ToDo or Project object
 * @return ToDo[] or Project[] if uid is specifed, ToDo or Project if not.
 * @throws LocalStorageError if local storage not accessible.
 */
function load(toLoad, uid = null) {

    if (!localStorageAvailable()) throw new LocalStorageError('load', 'Local storage is not available! - load action not complete');

    if (toLoad === 'todo') {
        if (uid === null) return loadToDos();
        return loadTodo(uid);
    }
    if (toLoad === 'project') {
        if (uid === null) return loadProjects();
        return loadProject(uid);
    }

    function loadProject(projectUid) {
        throw 'loadSingleProject() not implemented - specified uid was ' + projectUid;
    }
    function loadProjects() {
        let loadedProjects = JSON.parse(getStorage().getItem('projects'));
        //console.log(loadedProjects);
        let projectObjs = [];
        for (let projectUID in loadedProjects) {
            //console.log("projectUID: " + projectUID);

            let obj = JSON.parse(loadedProjects[projectUID]);
            //console.log(obj);

            let project = new Project(obj.title, obj.description, obj.notes, projectUID);
            //console.log(project);

            let todoUIDs = obj.toDoUids;
            //console.log("todo uids:" + todoUIDs);

            let todos = [];
            for (let tuid of todoUIDs) {
                //console.log("a tuid: " + tuid);
                let t = loadTodo(tuid);
                project.addTodo(t);
            }
            projectObjs.push(project);
        }

        // let data = jsonStructure;
        // console.log(data);
        return projectObjs;
    }
    function loadTodo(toDoUid) {
        //console.log("attempting to load todo with uid: " + toDoUid);

        let loadedTodosAll = getStorage().getItem('todos');
        //console.log(loadedTodosAll);

        let loadedTodo = JSON.parse(loadedTodosAll)[toDoUid];
        //console.log(loadedTodo);

        // let obj = JSON.parse(JSON.parse(loadedTodosAll)[toDoUid]);
        // //console.log(obj);

        let todo = new ToDo(loadedTodo.title, loadedTodo.description, new Date(loadedTodo.dueDate), loadedTodo.priority, loadedTodo.uid);

        for (let item of loadedTodo.checklist) {
            todo.addToCheckList(item[0],item[1]);
            console.log(item);
        }

        //console.log(todo.toString());

        return todo;


    }
    function loadToDos() {
        let loadedTodosJson = getStorage().getItem('todos');
        //console.log(loadedTodosJson);

        let parsedTodos = JSON.parse(loadedTodosJson);
        //console.log(parsedTodos);

        let builtTodos = [];
        for (let keyUid in parsedTodos) {
            //console.log(typeof keyUid);
            // let obj = parsedTodos[keyUid];
            // //console.log(u);
            // let todo = new ToDo(obj.title, obj.description, new Date(obj.dueDate), obj.priority, obj.uid);
            // for (let item of obj.checklist) {
            //     todo.addToCheckList(item[0], item[1]);
            // }
            //console.log(todo);
            builtTodos.push(loadTodo(keyUid));
        }
        //console.log(builtTodos);
        return builtTodos;
    }
}

/**
 * Checks if localStorage is accessible.
 * @returns a boolean representing if localStorage is accessible.
 */
function localStorageAvailable() {
    var storage;
    try {
        storage = getStorage();
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
 * Retrieve json from storage source - currently localStorage
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
    // console.group('displaying storage');
    // let s = Array.from(loadToDos()) || [];
    // for (let i = 0; i < s.length; i++) {
    //     console.log(s[i]);
    // }
    // console.groupEnd('displaying storage');
}


class LocalStorageError extends Error {
    constructor(action, message) {
        super(`${action} : ${message}`);
        this.name = 'LocalStorageError';
    }
}

class ParameterError extends Error {
    constructor(parameterName, message) {
        super(`${parameterName} : ${message}`);
        this.name = `ParameterError`;
    }
}

export { clearStorage, displayStorage, save, load, LocalStorageError, ParameterError };
