import Gameboard from './GameboardObj.js';

const gameboard = new Gameboard(10);
gameboard.place('patrolboat', 'h', 0,0);
gameboard.receiveAnAttack(0,0);
gameboard.receiveAnAttack(1,0);
gameboard.place('submarine', 'v', 0,1);
gameboard.receiveAnAttack(0,1);
gameboard.receiveAnAttack(0,2);
gameboard.receiveAnAttack(0,3);
gameboard.allSunk();