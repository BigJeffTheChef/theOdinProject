console.log('hello');
let operations = [];
let operationComplete = false;
let resultOfCalc = 0;

// capture nodes
const buttonsNumpad = document.querySelectorAll('.numBtn');
const buttonsOperations = document.querySelectorAll('.opBtn');
const buttonClear = document.querySelector('.clearBtn');
const buttonEqual = document.querySelector('#equalBtn');

const displayMain = document.querySelector('.display');
const displayCalc = document.querySelector('.current-calc');

// add event listers to nodes
buttonClear.addEventListener('click', () => clear());
buttonsNumpad.forEach(btn => btn.addEventListener('click', () => clickButton(btn)));
buttonsOperations.forEach(btn => btn.addEventListener('click', () => clickButton(btn)));
buttonEqual.addEventListener('click', () => displayMain.value = solve(displayCalc.value));

// functions

// 
function clickButton(btn) {
    displayCalc.value = displayCalc.value + btn.textContent;
}

function collapseBrackets(equation) {
    // if no brackets, return simple arithmetic on equation
    if (equation.findIndex(element => element === '(') === -1) {
        return solve(equation);
    }

    // if there are brackets, recursively solve each bracket, then return the simple arithmetic
    let parsed = false;
    while (!parsed) {
        let nestedParen = 0;
        let begin = false; // denotes a bracketed expression has been found and is being collapsed
        let startIndex, endIndex;
        for (let i = 0; i < equation.length; i++) {
            if (equation[i] === '(') {
                nestedParen++;
                startIndex = i;
                begin = true;
            } else if (equation[i] === ')') {
                nestedParen--;
            }
            if (nestedParen === 0 && begin) {
                begin = false;
                endIndex = i;
                let collapsed = collapseBrackets(equation.slice(startIndex + 1, endIndex));
                equation.splice(startIndex, endIndex - startIndex + 1, ...collapsed.toString().split(''));
                i = 0;
            }
        }
        parsed = true;
    }
    return equation;
}

function collapseMultiplications(equation) {

    const FIND_OPERATORS_REGEX = /[*]/;
    const FIND_NUMBERS_REGEX = /\d*\.?\d+/;

    // collapse multiplications

    console.log('equation is: ' + equation);
    let index = equation.findIndex((element) => element === '*');
    while (index != -1) {
        console.log('index is: ' + index);
        let startIndex, endIndex;
        for (let i = index-1; i >= -1; i--) {
            if (i === -1) {
                startIndex = 0;
                break;
            } else if (equation[i].match(FIND_NUMBERS_REGEX) === null) {
                startIndex = i;
                break;
            }
        }
        for (let i = index+1; i <= equation.length; i++) {
            if (i === equation.length) {
                endIndex = equation.length -1;
                break;
            } else if (equation[i].match(FIND_NUMBERS_REGEX) === null) {
                endIndex = i;
                break;
            }
        }
        let slice = equation.slice(startIndex, endIndex+1);
        let result = arithmetic(slice.join('')); // currently causes stack overflow
        equation.splice(startIndex, endIndex-startIndex+1, result);
        index = equation.findIndex((element) => element === '*');
    }

    return equation;
}

function collapse(equation, operator) {
    
    //'/['+operator+']/'
    const FIND_OPERATORS_REGEX = new RegExp('['+operator+']');
    const FIND_NUMBERS_REGEX = /\d*\.?\d+/;

    // establish base case
    if (equation.join('').match(FIND_OPERATORS_REGEX) === null) {
        return equation;
    }

    console.log('equation is: ' + equation);
    let index = equation.findIndex((element) => element === '*');
    while (index != -1) {
        console.log('index is: ' + index);
        let startIndex, endIndex;
        for (let i = index-1; i >= -1; i--) {
            if (i === -1) {
                startIndex = 0;
                break;
            } else if (equation[i].match(FIND_NUMBERS_REGEX) === null) {
                startIndex = i;
                break;
            }
        }
        for (let i = index+1; i <= equation.length; i++) {
            if (i === equation.length) {
                endIndex = equation.length;
                break;
            } else if (equation[i].match(FIND_NUMBERS_REGEX) === null) {
                endIndex = i;
                break;
            }
        }
        let slice = equation.slice(startIndex, endIndex);
        let result = arithmetic(slice.join('')); // currently causes stack overflow
        equation.splice(startIndex, endIndex-startIndex, ...result.toString().split(''));
        index = equation.findIndex((element) => element === '*');
    }

    return collapse(equation, operator);
}

function solve(equation) {
    // remove whitespace & conver to array of characters
    equation = equation.split('').filter(element => element !== ' ');

    let result = null;
    let operand = null;
    let operator = null;

    // recursively solve bracketed sub-problems to enforce order of operations
    if (equation.lastIndexOf('(') != -1) {
        equation = collapseBrackets(equation);
    }

    if (equation.lastIndexOf('*') != -1) {
        equation = collapse(equation, '*');
    }

    if (equation.lastIndexOf('/') != -1) {
        //equation = collapseDivision(equation);
    }
    
    if (equation.lastIndexOf('+') != -1) {
        //equation = collapseAddition(equation);
    }

    if (equation.lastIndexOf('+') != -1) {
        //equation = collapseSubtraction(equation);
    }

    return equation.join('');
}

function arithmetic(equation) {

    // function checkValidChars(equationArr) {
    //     const VALID_CHARS = '0123456789+-*/^()';
    //     for (let element of equationArr) {
    //         console.log(VALID_CHARS.findIndex((e) => e === element));
    //     }
    // }

    let result = null;
    let operand = null;
    let operator = null;

    let equationStr = equation;
    equation = equation.split('');
    
    const FIND_OPERATORS_REGEX = /[+]|[-]|[*]|[\/]|[\^]/;
    const FIND_NUMBERS_REGEX = /\d*\.?\d+/;
    for (let i = 0; i < equation.length; i++) {
        if (equation[i].toString().match(FIND_OPERATORS_REGEX) != null) {
            console.log('found an operator: ' + equation[i]);
            operator = equation[i];
        } else {
            let num = equationStr.substring(i, equationStr.length).match(FIND_NUMBERS_REGEX)[0];
            i += num.toString().length - 1;
            console.log('found a number: ' + num);
            if (result === null) {
                result = parseFloat(num);
            } else {
                operand = parseFloat(num);
            }
        }

        if (operand != null || operator === '=') {
            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    if (operand === 0) {
                        result = 'cannot divide by zero';
                    } else {
                        result /= operand;
                    }
                    break;
                case '^':
                    result = result ** operand;
                    break;
                case '=':
                    console.log('operation complete, result is ' + result);
                    operationComplete = true;
            }
            operator = null;
        }
        operand = null;
    }
    return result;
}

function clear() {
    displayMain.value = ''
    displayCalc.value = '';
    clearArr(operations);
}

function clearArr(arr) {
    while (arr.length) {
        arr.pop();
    }
}

