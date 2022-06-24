import './styles.css';
import { generateHTML } from './createHTML.js';
import { createHomeTab } from './tabHome.js';
import { createMenuTab } from './tabMenu.js';
import { createHoursTab } from './tabHours.js';


const body = generateHTML();
let navBtns = body.querySelectorAll('.nav-button');
for (let i = 0; i < navBtns.length; i++) {
    let btn = navBtns[i];
    switch (btn.textContent) {
        case 'home':
            btn.addEventListener('click', createHomeTab);
            break;
        case 'menu':
            btn.addEventListener('click', createMenuTab);
            break;
        case 'hours':
            btn.addEventListener('click', createHoursTab);
            break;
    }
}
document.body.appendChild(body);
createHomeTab();

