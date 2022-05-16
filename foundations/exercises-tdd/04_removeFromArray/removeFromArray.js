const removeFromArray = function(arr, ...elementsToRemove) {
    for (let i = 0; i < arr.length; i++) {
        elementsToRemove.forEach((e) => {
            if (arr[i]===e) {
                arr.splice(i--,1);
            }
        });
        
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
