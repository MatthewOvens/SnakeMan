import {SnakeClass} from '../Model/SnakeClass.js'
//import {snakeMovement} from '../Controller/MovementClass.js'
import {AppleClass} from '../Model/AppleClass.js'
import {listener} from '../Controller/MovementClass.js'

export function setGame(difficolta) {

    const invisibleGrid = document.getElementById("invisibleGrid");

    var snake = new SnakeClass([{x: 5, y: 10}, {x: 4, y: 10}, {x: 3, y: 10}]);

    //Spawn della mela iniziale
    var apple = new AppleClass();
    apple.spawnRandom(invisibleGrid, snake.value);

    //Chiamata funzione di listening dei tasti
    listener(snake, apple, difficolta);
}