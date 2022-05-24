let operations = [];
let operationComplete = false;
let resultOfCalc = 0;

// capture nodes
const buttonsNumpad = document.querySelectorAll('.numBtn');
const buttonsOperations = document.querySelectorAll('.opBtn');

const buttonClear = document.querySelector('.clearBtn');
const buttonEqual = document.querySelector('.equalBtn');

const displayMain = document.querySelector('.display');
const displayCalc = document.querySelector('.current-calc');

// add event listers to nodes
buttonClear.addEventListener('click', () => clear());
buttonsNumpad.forEach(btn => btn.addEventListener('click', () => clickNumber(btn)));
buttonsOperations.forEach(btn => btn.addEventListener('click', () => clickOperation(btn)));

// functions

// 
function clickNumber(btn) {
    if (operationComplete) {
        displayMain.value = btn.textContent;
        clearArr(operations);
        displayCalc.value = operations;
        operationComplete = false;
    } else {
        displayMain.value = displayMain.value + btn.textContent;
    }
    console.log('display now shows: ' + displayMain.value);
}

function clickOperation(btn) {
    const operator = btn.textContent;
    if (operationComplete) operationComplete = false;
    if (operations[operations.length-1] === '=') {
        clearArr(operations);
    }
    operations.push(displayMain.value);
    operations.push(operator);
    displayCalc.value = operations.join(' ');
    if (operator === '=') {
        displayMain.value = computeResult(operations);
    } else {
        displayMain.value = '';
    }
}

function computeResult(opArray) {
    let result = null;
    let operand = null;
    let operator = null;
    opArray.forEach(element => {
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

