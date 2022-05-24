const findTheOldest = function(objArr) {
    return objArr.reduce((oldestPerson, person) => {
        if (getAge(person) > getAge(oldestPerson)) return person;
        else return oldestPerson;

        function getAge(p) {
            const birth = p.hasOwnProperty('yearOfBirth') ? p.yearOfBirth : new Date().getFullYear();
            const death = p.hasOwnProperty('yearOfDeath') ? p.yearOfDeath : new Date().getFullYear();
            return death - birth;
        }
        
    },{});
};



// Do not edit below this line
module.exports = findTheOldest;
