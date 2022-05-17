const palindromes = function (str) {
    str = str.toLowerCase();
    let charArr = str.split('');
    for (let i = 0; i < charArr.length; i++) {
        if (!charArr[i].match(/[a-z]/i)) {
            charArr.splice(i--,1);
        }
    }
    let forward = charArr.join('');
    let backward = charArr.reverse().join('');
    if (forward === backward) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
