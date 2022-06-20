const btnPlay = document.querySelector('.player-name-accept');
btnPlay.addEventListener('click', processIntro);
let playerNames;

function processIntro(event) {
    const p1Name =  document.querySelector('#player1-name').value;
    const p2Name =  document.querySelector('#player2-name').value;
    let p1Accept = validateName(p1Name);
    let p2Accept = validateName(p2Name);
    if (p1Accept && p2Accept) {
        document.querySelector('.container-intro').classList.add('hidden');
        window.p1Name = p1Name;
        window.p2Name = p2Name;
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
