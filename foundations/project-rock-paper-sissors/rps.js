const ROCK = 'rock';
const PAPER = 'paper';
const SISSORS = 'sissors';
const WIN = 'You win!';
const LOSE = 'You lose!';
const DRAW = 'It\'s a draw!';

function simulateChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;

    switch (compChoice) {
        case 1:
            return ROCK;
            break;
        case 2:
            return PAPER;
            break;
        case 3:
            return SISSORS;
            break;
        default:
            return 'invalid computer choice';
    }
}

function playRound(playerChoice, computerChoice) {
    const player = playerChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();


    if (player === ROCK) {
        if (computer === ROCK) {
            return DRAW;
        } else if (computer === PAPER) {
            return LOSE;
        } else {
            return WIN;
        }
    } else if (player === PAPER) {
        if (computer === ROCK) {
            return WIN;
        } else if (computer === PAPER) {
            return DRAW;
        } else {
            return LOSE;
        }
    } else {
        if (computer === ROCK) {
            return LOSE;
        } else if (computer === PAPER) {
            return WIN;
        } else {
            return DRAW;
        }
    }
}

console.group('Test Print');
console.log(playRound(ROCK, PAPER));
console.log(playRound(ROCK, SISSORS));
console.log(playRound(ROCK, ROCK));
console.groupEnd();

function game(bestOf = 5) {
    if (bestOf % 2 !== 1) {
        console.log('cannot have best of even number');
        return;
    }
    let scores = [0,0]; /*player index 0, computer index 1*/
    const winningScore = Math.ceil(bestOf / 2);
    console.log('Best of ' + bestOf + ', so winning score will be: ' + winningScore)
    for (let i = 1; scores[0] < winningScore && scores[1] < winningScore; i++) {
        console.group('round ' + i);
        let pChoice = simulateChoice();
        let cChoice = simulateChoice();
        let result = playRound(pChoice, cChoice);
        console.log('p=' + pChoice + ' , c=' + cChoice);
        if (result === WIN) {
            scores[0]++;
            console.log('player score incremented');
        } else if (result === LOSE) {
            scores[1]++;
            console.log('computer score incremented');
        } else {
            console.log('draw, no score change');
        }
        console.log('player score is: ' + scores[0]);
        console.log('computer score is: ' + scores[1]);
        console.groupEnd('round ' + i);
    }
    if (scores[0] > scores[1]) {
        console.log('player wins!');
    } else {
        console.log('computer wins!');
    }
    
}