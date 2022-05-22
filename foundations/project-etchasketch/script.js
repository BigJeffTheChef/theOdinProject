// constants
const DEFAULT_SQUARES = 16;
const MAX_SQUARES = 100;
let currentSize;

// capture nodes
const grid = document.querySelector('#view');
const sizeButton = document.querySelector('.change-size');
const clearButton = document.querySelector('.clear');
const selectionTextBox = document.querySelector('.selection.text');


// render default 16x16
let squares = [];
buildGrid(DEFAULT_SQUARES);

// set button events
sizeButton.addEventListener('click', (e) => buildGrid(selectionTextBox.value));
clearButton.addEventListener('click', (e) => {
    buildGrid(currentSize);
    selectionTextBox.value = `Cleared! Set back to ${currentSize}.`;
});

function buildGrid(size) {

    let squaresPerSide = parseInt(size);

    // validate squares per side
    if (isNaN(squaresPerSide)) {
        selectionTextBox.value = `Invalid size, setting to ${DEFAULT_SQUARES}.`;
        squaresPerSide = DEFAULT_SQUARES;
    } else if (squaresPerSide > MAX_SQUARES || squaresPerSide < 0) {
        selectionTextBox.value = `${squaresPerSide} is outside allowable range (0-${MAX_SQUARES}), setting to ${MAX_SQUARES}.`;
        squaresPerSide = MAX_SQUARES;
    } else {
        selectionTextBox.value = squaresPerSide;
    }

    currentSize = squaresPerSide;

    // remove old squares
    for (const element of squares) {
        grid.removeChild(element);
    }

    squares = [];
    for (let i = 0; i < squaresPerSide ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        let size = `${100 * (1 / squaresPerSide)}%`;
        square.style['width'] = size;
        square.style['height'] = size;
        square.style['background'] = 'rgba(0,0,0,0)';
        square.addEventListener('mouseover', () => {
            adjustOpacity(square);
        });

        squares.push(square);
        grid.appendChild(square);
    }
}

function adjustOpacity(square) {
    if (square.style['background-color'].startsWith("rgba(0, 0, 0")) { // rgba(0, 0, 0, 1.0) is parsed to rgb(0, 0, 0) at least in firefox 22/05/2022
        const oldOpacity = square.style['background-color'].match(/[0-9].[0-9]|[0-9]/gm)[3];
        const adjustedOpacity = (parseFloat(oldOpacity) + 0.1 < 1) ? parseFloat(oldOpacity) + 0.1 : 1.0;
        const newOpacity = `rgba(0,0,0,${adjustedOpacity})`;
        square.style['background-color'] = newOpacity;
    }
}


