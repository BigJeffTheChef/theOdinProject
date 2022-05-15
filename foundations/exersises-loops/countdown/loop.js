function loopWithOutput(loops=10) {
    const TERMINATION = 0;
    for (let i = loops; i >= TERMINATION; i--) {
        const div = document.querySelector('#output');
        const p = document.createElement('p');
        if (i === loops) {
            p.textContent = 'Countdown ' + i;
        } else if (i === TERMINATION) {
            p.textContent = 'Blast off!';
        } else {
            p.textContent = i;
        }
        
        div.appendChild(p);
    }
}

loopWithOutput(10);