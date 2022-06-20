/**
 * player factory
 * @param {Number} number 
 * @param {String} name 
 * @returns player object
 */
 let player = (number, name, symbol) => {
    let obj = {};
    obj.number = number;
    obj.name = name;
    obj.symbol = symbol;
    return obj;
}

const BOARD_SIZE = 3;
const PLAYERS = 2;

const btnRedisplay = document.querySelector('#display-board');
btnRedisplay.addEventListener('click', () => displayBoard(board));

/**
 * board module - generates 2d array for board
 */
let board = (function(boardSize) {
    let b = [];
    for (let i = 0; i < boardSize; i++) {
        let row = [];
        for (let j = 0; j < boardSize; j++) {
            row.push(null);
        }
        b.push(row);
    }
    return b;
})(BOARD_SIZE);

// /**
//  * players module - generates both players
//  */
// let players = (function(playersCount) {
//     let p = [];
//     for (let i = 0; i < playersCount; i++) {
//         p.push(player(i+1,`player ${i+1}`));
//     }
//     return p;
// })(PLAYERS);

let p1 = player(1,"Alice", "X");
let p2 = player(2,"Bob", "O");

let players = [p1, p2];

let currentPlayer = players[0];

function switchPlayer() {
    currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
}


/**
 * display board function
 * @param {2d array} gameBoard a 2d array of players pieces 
 */
function displayBoard(gameBoard) {
    const boardDiv = document.querySelector('#board');

    // delete old nodes
    for (let i = boardDiv.childNodes.length - 1; i >= 0; i--) {
        boardDiv.removeChild(boardDiv.childNodes[i]);
    }
    // repopulate with new nodes
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            console.group('create cell');
            let cellContents = gameBoard[i][j];
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('board-cell');
            cellDiv.dataset.indexRow = i;
            cellDiv.dataset.indexCol = j;
            console.log(`i: ${i} j:${j}`);
            if (cellContents == null) {
                console.log('adding empty');
                cellDiv.classList.add("empty");
                cellDiv.addEventListener('click', () => {
                    console.log(gameBoard[i][j]);
                    if (gameBoard[i][j] === null) {
                        gameBoard[i][j] = currentPlayer;
                        console.log("setting textContent of cell to " + currentPlayer.symbol)
                        cellDiv.classList.remove("empty");
                        cellDiv.textContent = currentPlayer.symbol;
                        switchPlayer();
                        checkWinner(i,j);
                    }
                });
            } else {
                console.log('adding symbol');
                cellDiv.classList.remove("empty");
                cellDiv.textContent = cellContents.symbol;
            }
            
            boardDiv.appendChild(cellDiv);
            console.groupEnd('create cell');
        }
    }
}

function checkWinner(row, col) {

}

function clickSquare(row, col) {
    console.log(row + " " + col);
    console.log(currentPlayer);
    board[row][col] = currentPlayer.symbol;
    switchPlayer();
    cell = currentPlayer;

    displayBoard(board);
}

// initial board display
displayBoard(board);