const palindromes = function (str) {
    const FILTERFUNCT = char => char.match(/[a-z]/i);
    return str.toLowerCase().split('').filter(FILTERFUNCT).join('') 
        === str.toLowerCase().split('').reverse().filter(FILTERFUNCT).join('');
};

// Do not edit below this line
module.exports = palindromes;
