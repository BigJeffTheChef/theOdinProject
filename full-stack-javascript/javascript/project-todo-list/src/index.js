import './styles/styles.css';
import './styles/todo-modal.css';
import './domController.js';
import { clearStorage, addTestToDosToStorage, addTestProjectToStorage ,displayStorage } from './storage.js';

// (function debugPrints() {
//     console.groupCollapsed('debug prints');
//     clearStorage();
//     addTestToDosToStorage(7);
//     displayStorage();
//     console.groupEnd('debug prints');
// })();

(function generateTestToDos() {
    console.groupCollapsed('debug prints');
    clearStorage();
    addTestToDosToStorage(7);
    displayStorage();
    addTestProjectToStorage();
    
    console.groupEnd('debug prints');
})();