const caesar = function(str, shift) {
    let arr = str.split('');
    let adjustedArr = [];
    arr.forEach(element => {
        let intValue = element.charCodeAt(0);
        let adjustor = 0;
        if (intValue >= 65 && intValue <= 90) {
            /*lowcase*/
            adjustor = 65;
        } else if (intValue >= 97 && intValue <= 122) {
            /*uppercase*/
            adjustor = 97;
        }
        adjustedArr.push(isChar(element) ? String.fromCharCode(intValue +shift) : element);
    });
    return adjustedArr.join('');
};

function isChar(char) {
    if (char.length !== 1) {
        return false;
    }
    let intValue = char.charCodeAt(0);
    if (intValue >= 65 && intValue <= 90 || intValue >= 97 && intValue <= 122) {
        return true;
    }
}

// Do not edit below this line
module.exports = caesar;
