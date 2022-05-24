const fibonacci = function(numOfSeq) {
    if (numOfSeq < 0) return 'OOPS';
    if (numOfSeq <= 2) {
        return 1;
    }
    return fibonacci(numOfSeq -2) + fibonacci(numOfSeq - 1);
};

// Do not edit below this line
module.exports = fibonacci;
