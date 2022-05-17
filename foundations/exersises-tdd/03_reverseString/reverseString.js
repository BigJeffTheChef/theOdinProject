const reverseString = function(strToRev) {
    let arr = strToRev.split('');
    let returnStr = '';
    for (let i = arr.length -1; i >= 0;i--) {
        returnStr += arr[i];
    }
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
