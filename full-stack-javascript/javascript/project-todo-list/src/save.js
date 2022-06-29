function localStorageAvailable() {
    var storage;
    try {
        storage = window['localStorage'];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

// console.log(`local storage availabe: ${localStorageAvailable()}`)

function saveToDo(toDoObj) {
    if(localStorageAvailable()) {
        window['localStorage'].setItem()
    }
}

(function loadToDos() {
    if(localStorageAvailable()) {
        let storedToDos = window['localStorage'];
        console.log(storedToDos);
        // console.log(storedToDos[0]);
        // console.log(storedToDos[1]);
        // console.log(storedToDos[2]);
        Storage;
        for (let i = 0; i < storedToDos.length; i++) {
            console.log(storedToDos.getItem(storedToDos.key(i)));
        }
    }
})();

export {localStorageAvailable};