const drawBoard = document.querySelector('#view');
buildGrid(16);

function buildGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide**2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style['width'] = `${100*(1/16)}%`;
        square.style['height'] = `${100*(1/16)}%`;
        console.log(`${100*(1/16)}%`);
        square.addEventListener('mouseover', () => {
            square.classList.add('drawn');
        });
        drawBoard.appendChild(square);
    }
}


