// Declarations
const BOARD_SIZE = 3;
const PLAYERS = 2;

let gameOver = false;
let players = [];

let board = createBoard(BOARD_SIZE);

/*

    INTRODUCTION

*/

const btnPlay = document.querySelector('.player-name-accept');
btnPlay.addEventListener('click', processIntro);

function processIntro(event) {
    const p1Name = document.querySelector('#player1-name').value;
    const p2Name = document.querySelector('#player2-name').value;
    let p1Accept = validateName(p1Name);
    let p2Accept = validateName(p2Name);
    if (p1Accept && p2Accept) {
        const container = document.querySelector('.container-intro');
        container.classList.add('hidden');
        setTimeout(() => {
            document.querySelector('body').removeChild(container);
            prepareGame(p1Name, p2Name);
        }, 500);

    }
}

function validateName(nameToValidate) {
    if (nameToValidate && typeof nameToValidate !== 'string') {
        return false;
    }
    const REGEX = /^[A-Za-z]+$/;
    if (nameToValidate && nameToValidate.match(REGEX)) {
        return true;
    }
    return false;
}

function prepareGame(p1Name, p2Name) {
    console.log(`p1: ${p1Name} p2: ${p2Name}`);
    players = [new Player(1, p1Name, "X"), new Player(2, p2Name, "O")];
    console.log(players);
    currentPlayer = players[0];
    const containerBoard = document.createElement('div');
    const insideContainer = document.createElement('div');
    const body = document.querySelector('body');
    containerBoard.classList.add("container-board");
    insideContainer.id = "board";
    containerBoard.appendChild(insideContainer);
    body.appendChild(containerBoard);
    displayBoard(board);
}

/*

    THE GAME

*/

// /**
//  * player factory
//  * @param {Number} number 
//  * @param {String} name 
//  * @returns player object
//  */
// let player = (number, name, symbol) => {
//     let obj = {};
//     obj.number = number;
//     obj.name = name;
//     obj.symbol = symbol;

//     const getName = () => obj.name;
//     const setName = (newName) => obj.name = newName;

//     const getNumber = () => obj.number;
//     const setNumber = (newNumber) => obj.number = newNumber;

//     const getSymbol = () => obj.symbol;
//     const setSymbol = (newSymbol) => obj.symbol = newSymbol;

//     return {
//         // name
//         getName, setName,
//         // number
//         getNumber, setNumber,
//         // symbol
//         getSymbol, setSymbol
//     };
// }

function Player(number, name, symbol) {
    this.number = number;
    this.name = name;
    this.symbol = symbol;
    Object.assign(this, playerMethods);
}

const playerMethods = {
    getName() { return this.name},
    setName(newName) {this.name = newName},

    getNumber() {return this.number},
    setNumber(newNumber) { this.number = batNumber},

    getSymbol() {return this.symbol},
    setSymbol(newSymbol) {this.symbol = newSymbol},
}

function createBoard(size) {
    const boardObj = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(null);
        }
        boardObj.push(row);
    }
    return boardObj;
}

function switchPlayer() {
    let currentNum = currentPlayer.getNumber();
    let p1Num = players[0].getNumber();
    //currentPlayer = (currentPlayer.getNumber() === players[0].getNumber()) ? players[1] : players[0];
    if (currentNum === p1Num) {
        currentPlayer = players[1];
    } else {
        currentPlayer = players[0];
    }
}

/**
 * Builds the board div element and adds appropriate event handlers
 * @param {2d array} gameBoard a 2d array of players pieces 
 */
function displayBoard(gameBoard) {
    const boardDiv = document.querySelector('#board');

    // delete old nodes
    for (let i = boardDiv.childNodes.length - 1; i >= 0; i--) {
        boardDiv.removeChild(boardDiv.childNodes[i]);
    }
    // repopulate with new nodes
    let winFound = false;
    for (let i = 0; i < gameBoard.length && !winFound; i++) {
        for (let j = 0; j < gameBoard[i].length && !winFound; j++) {
            let cellContents = gameBoard[i][j];
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('board-cell');
            cellDiv.dataset.indexRow = i;
            cellDiv.dataset.indexCol = j;
            if (cellContents == null) {
                cellDiv.classList.add("empty");
                cellDiv.addEventListener('click', () => clickSquare(gameBoard, boardDiv, cellDiv, i, j));
            } else {
                cellDiv.classList.remove("empty");
                cellDiv.textContent = cellContents.getSymbol();
            }
            boardDiv.appendChild(cellDiv);
        }
    }
}

const clickSquare = function (gameBoard, boardDiv, cellDiv, i, j) {
    if (!gameOver) {
        if (gameBoard[i][j] === null) {
            gameBoard[i][j] = currentPlayer;
            console.log(gameBoard[i][j].getName());
            cellDiv.classList.remove("empty");
            cellDiv.textContent = currentPlayer.getSymbol();
            checkWinner(gameBoard, boardDiv, i, j);
            switchPlayer();
        }
    }
}


function checkWinner(gameBoard, boardDiv, row, col) {
    // check row

    function discernWinningNode(row, col) {
        return (BOARD_SIZE * row) + (col + 1) - 1;
    }

    let winFound = false;
    let winningCoords = [];

    if (!winFound) checkLinear("row");
    if (!winFound) checkLinear("column");
    // if (!winFound) checkDiagonal("TL-BR");
    // if (!winFound) checkDiagonal("BL-TR");

    function checkLinear(direction) {
        if (direction !== 'row' && direction !== 'column') {
            return;
        }
        let check = 0;
        for (let i = 0; i < BOARD_SIZE; i++) {
            let position = (direction === 'row') ? gameBoard[row][i] : gameBoard[i][col];
            if (position !== null && position.getNumber() === currentPlayer.getNumber()) {
                check++;
                winningCoords.push(discernWinningNode((direction === 'row') ? row : i, (direction === 'row') ? i : col));
            }
        }
        if (check === BOARD_SIZE) {
            winFound = true;
        } else {
            winningCoords = [];
        }
    }

    function checkDiagonal(direction) {
        if (direction !== 'TL-BR' && direction !== 'BL-TR') {
            return;
        }
        let dr, dc;
        dr = row;
        dc = col;
        while (dr > 0 && dc > 0) {
            dr--;
            dc--;
        }
        let diag1Check = 0;
        for (let i = dr, j = dc; i < BOARD_SIZE && j < BOARD_SIZE; i++, j++) {
            if (gameBoard[i][j] !== null && gameBoard[i][j].getNumber() === currentPlayer.getNumber()) {
                diag1Check++;
                winningCoords.push(discernWinningNode(i, j));
            }
        }
        if (diag1Check === BOARD_SIZE) {
            winFound = true;
        } else {
            winningCoords = [];
        }
    }

    // check diag 1 (Top Left > Bottom Right)
    if (!winFound) {
        let dr, dc;
        dr = row;
        dc = col;
        while (dr > 0 && dc > 0) {
            dr--;
            dc--;
        }
        let diag1Check = 0;
        for (let i = dr, j = dc; i < BOARD_SIZE && j < BOARD_SIZE; i++, j++) {
            if (gameBoard[i][j] !== null && gameBoard[i][j].getNumber() === currentPlayer.getNumber()) {
                diag1Check++;
                winningCoords.push(discernWinningNode(i, j));
            }
        }
        if (diag1Check === BOARD_SIZE) {
            winFound = true;
        } else {
            winningCoords = [];
        }
    }


    // check diag 2 (Bottom left > Top Right)
    if (!winFound) {
        dr = row;
        dc = col;
        while (dr < BOARD_SIZE - 1 && dc > 0) {
            dr++;
            dc--;
        }
        let diag2Check = 0;
        for (let i = dr, j = dc; i >= 0 && j < BOARD_SIZE; i--, j++) {
            if (gameBoard[i][j] !== null && gameBoard[i][j].getNumber() === currentPlayer.getNumber()) {
                diag2Check++;
                winningCoords.push(discernWinningNode(i, j));
            }
        }
        if (diag2Check === BOARD_SIZE) {
            winFound = true;
        } else {
            winningCoords = [];
        }
    }

    if (winFound) {
        console.log(winningCoords);
        gameOver = true;
        for (let i = 0; i < boardDiv.childNodes.length; i++) {
            const node = boardDiv.childNodes[i];
            node.classList.remove('empty');
            node.classList.add('game-over');
            // if (node.textContent !== currentPlayer.getSymbol()) {
            //     node.textContent = "";
            // }
            if (winningCoords.includes(i)) {
                node.classList.add('winning-cell');
            } else {
                node.classList.add('win-found');
                node.textContent = "";
            }
        }
    } else {
        let spaceLeft = false;
        for (let i = 0; i < boardDiv.childNodes.length && !spaceLeft; i++) {
            if (boardDiv.childNodes[i].textContent === "") {
                spaceLeft = true;
            }
        }
        if (!spaceLeft) {
            gameOver = true;
            for (let i = 0; i < boardDiv.childNodes.length && !spaceLeft; i++) {
                const node = boardDiv.childNodes[i];
                node.classList.remove('empty');
                node.classList.add('draw-found');
                console.dir(node);
            }
        }
    }
    if (gameOver) {
        const declareGameOver = document.createElement('div');
        declareGameOver.classList.add('game-declared-over');
        if (winFound) {
            declareGameOver.textContent = currentPlayer.getName() + " wins!";
        } else {
            declareGameOver.textContent = "Draw!";
        }
        document.querySelector('#board').appendChild(declareGameOver);
    }
}

