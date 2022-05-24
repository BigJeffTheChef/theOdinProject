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
buttonEqual.addEventListener('click', () => displayMain.value=  arithmetic(displayCalc.value.split('')));

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
        let sub = [];
        let begin = false;
        let startIndex, endIndex;
        for (let i = 0; i < equation.length; i++) {
            if (equation[i] === '(') {
                nestedParen++;
                startIndex = i;
                begin = true;
            } else if (equation[i] === ')') {
                nestedParen--;
            }
            if (begin) {
                sub.push(equation[i]);
            }
            if (nestedParen === 0 && begin) {
                begin = false;
                endIndex = i;
                let collapsed = collapseBrackets(equation.slice(startIndex+1,endIndex));
                equation.splice(startIndex, endIndex - startIndex +1, collapsed);
                i = 0;
            }
        }
        parsed =true;
    }
    return equation;
}

function arithmetic(opArray) {

    let result = null;
    let operand = null;
    let operator = null;

    if (opArray.lastIndexOf('(') != -1) {
        opArray = collapseBrackets(opArray);
    }

    opArray.forEach(e => {
        let element = e.toString();
        if (element.match(/\d+/)) {
            if (result === null) {
                result = parseFloat(element);
            } else {
                operand = parseFloat(element);
            }
        } else {
            operator = element;
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

    });
    resultOfCalc = result;
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

