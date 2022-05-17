const getTheTitles = function(arrOfObj) {
    let returnArr =[];
    arrOfObj.forEach(o => returnArr.push(o.title));
    return returnArr;
};

// Do not edit below this line
module.exports = getTheTitles;
