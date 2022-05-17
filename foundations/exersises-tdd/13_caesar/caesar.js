const caesar = function (str, shift) {
    /* /[A-Z]/i */
    while (shift < 0 || shift > 26) {
        if (shift < 0) {
            shift += 26
        } else {
            shift -= 26;
        }
    }
    const chars = str.split('');
    const transformed = [];
    chars.forEach(char => {
        transformed.push(transformChar(char));
    });
    return transformed.join('');

    function transformChar(c) {
        let adjustor = 0;
        let intValue = c.charCodeAt(0);
        if (c.match(/[A-Z]/)) {
            intValue += shift;
            if (intValue < 65) {
                adjustor += 26;
            } else if (intValue > 90) {
                adjustor = -26;
            }
        } else if (c.match(/[a-z]/)) {
            intValue += shift;
            if (intValue < 97) {
                adjustor = 26;
            } else if (intValue > 122) {
                adjustor = -26;
            }
        }
        intValue += adjustor;
        c = String.fromCharCode(intValue);
        return c;
    }
};

// Do not edit below this line
module.exports = caesar;
