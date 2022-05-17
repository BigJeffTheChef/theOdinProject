const findTheOldest = function(arr) {
    let oldestAge = 0;
    let oldestObj;
    arr.forEach(e => {
        let a = calcAge(e);
        if (a > oldestAge) {
            oldestAge = a;
            oldestObj = e;
        }
    });
    return oldestObj;
};

function calcAge(personObj) {
    let death = (personObj.hasOwnProperty('yearOfDeath')) ? personObj.yearOfDeath: new Date(Date.now()).getFullYear();
    return death - personObj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
