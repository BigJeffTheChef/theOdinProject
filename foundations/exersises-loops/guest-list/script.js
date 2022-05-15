const people = ['Joe', 'Ryan', 'Kieran', 'Phil', 'George', 'Bill', 'Lola', 'Jack'];
const banned = ['Lola', 'Phil', 'Jack'];
const refused = [];
const admitted = [];

let builtLists = buildLists(people, banned);

let pAdmitted = document.querySelector('#admitted');
pAdmitted.textContent = build(builtLists[0])

let pRefused = document.querySelector('#refused');
pRefused.textContent = build(builtLists[1]);

function buildLists(queue, bannedNames) {
    console.group('people');
    let lists = [[],[]];
    for (const name of queue) {
        console.log(name);
        if (bannedNames.includes(name)) {
            lists[0].push(name);
        } else {
            lists[1].push(name);
        }
    }
    return lists;
    console.groupEnd('people');
}

function build(arrayOfNames) {
    let tmp = "";
    for (let i = 0; i < arrayOfNames.length; i++) {
        tmp = tmp + arrayOfNames[i];
        /*
        if 
        */
        if (i === arrayOfNames.length - 2 && arrayOfNames.length >= 2) {
            tmp += " and ";
        } else if (i !== arrayOfNames.length - 1) {
            tmp += ", ";
        } else {
            tmp += ".";
        }
    }
    return tmp;
}