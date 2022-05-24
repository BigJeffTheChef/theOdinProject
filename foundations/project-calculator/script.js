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
buttonEqual.addEventListener('click', () => displayMain.value = arithmetic(displayCalc.value.split('').filter(element => element !== ' ')));

// functions

// 
function clickButton(btn) {
    displayCalc.value = displayCalc.value + btn.textContent;
}

function collapseBrackets(equation) {
    // if no brackets, return simple arithmetic on equation
    if (equation.findIndex(element => element === '(') === -1) {
        return arithmetic(equation);
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

function collapseAddSub(equation) {
    let result = null;
    let operand = null;
    let operator = null

    let equationStr = equation.join('');
    const FIND_OPERATORS_REGEX = /[+]|[-]/;
    const FIND_NUMBERS_REGEX = /\d*\.?\d+/;
    for (let i = 0; i < equation.length; i++) {
        if (equation[i].toString().match(FIND_OPERATORS_REGEX) != null) {
            console.log('found an operator: ' + equation[i]);
            operator = equation[i];
        } else {
            let num = equationStr.substring(i, equationStr.length).match(FIND_NUMBERS_REGEX)[0];
            i += num.toString().length -1;
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
            }
            operator = null;
        }
        operand = null;
    }
    clearArr(equation);
    equation.push(result.toString());
    return equation;
}

function arithmetic(equation) {

    let result = null;
    let operand = null;
    let operator = null;

    // recursively solve bracketed sub-problems to enforce order of operations
    if (equation.lastIndexOf('(') != -1) {
        equation = collapseBrackets(equation);
    }

    //equation = collapseMultiDiv(equation);
    //equation = collapseAddSub(equation);

    let equationStr = equation.join('');
    const FIND_OPERATORS_REGEX = /[+]|[-]|[*]|[\/]|[\^]/;
    const FIND_NUMBERS_REGEX = /\d*\.?\d+/;
    for (let i = 0; i < equation.length; i++) {
        if (equation[i].toString().match(FIND_OPERATORS_REGEX) != null) {
            console.log('found an operator: ' + equation[i]);
            operator = equation[i];
        } else {
            let num = equationStr.substring(i, equationStr.length).match(FIND_NUMBERS_REGEX)[0];
            i += num.toString().length -1;
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

