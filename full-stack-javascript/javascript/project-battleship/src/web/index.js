import './styles.css';
import Gameboard from '../obj/Gameboard.js';
import Player from '../obj/Player.js';
import Ship from '../obj/Ship.js';
import buildBoardElement from './boardBuilder.js';

(function initialize() {
  const boardHuman = new Gameboard();
  const boardComputer = new Gameboard();

  // place a couple of test ships
  boardHuman.placeShip('patrol boat', 0, 0, true);
  boardHuman.receiveAttack(0, 0);
  boardComputer.placeShip('carrier', 4, 5, false);

  const playerHuman = new Player(true, boardHuman);
  const playerComputer = new Player(false, boardComputer);

  const container = document.body.querySelector('.board-container');
  container.appendChild(buildBoardElement(boardHuman, 'playerBoard'));
  container.appendChild(buildBoardElement(boardComputer, 'computerBoard'));
}());
