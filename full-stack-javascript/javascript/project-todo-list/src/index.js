import './styles/styles.css';
import './styles/todo-modal.css';
import './dom.js';
import { clearStorage, addTestToDosToStorage, displayStorage } from './storage.js';

(function debugPrints() {
    console.groupCollapsed('debug prints');
    clearStorage();
    addTestToDosToStorage(7);
    displayStorage();
    console.groupEnd('debug prints');
})();
