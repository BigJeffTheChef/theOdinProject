import './styles.css';
import buildBoards from './dom-scripts/build-board';

const boards = buildBoards();
console.dir(boards);
document.body.appendChild(boards);
