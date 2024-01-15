import {showResult} from '../View/ResultMenuClass.js'

const grid = document.getElementById("grid");
const appleGrid = document.getElementById("invisibleGrid");

var score = document.getElementById("score");
var currentScore = 0;

var interval; //Usato per salvare in variabile la funzione del setInterval
//Flag utilizzati per vedere se la direzione è ancora attiva
var flagRight = true;
var flagLeft = false;
var flagUp = false;
var flagDown = false;

//booleana che blocca tutto se il gioco termina
var gameOver = false;

//sound nemico mangiato
var enemyEaten = new Audio('./assets/eatenEnemy.mp3');
//sound GameOver
var gameOverSound = new Audio('./assets/gameOver.wav');

export function listener(snake, apple, difficolta) {

    document.addEventListener('keydown', (keyPressed) => {

        if(keyPressed.key == "ArrowRight" && !gameOver) {
            if(!flagLeft) {
                flagRight = true;
                flagUp = false;
                flagDown = false;
                clearInterval(interval);
                snakeMovement(snake, "right", apple);
                interval = setInterval(() => {
                    snakeMovement(snake, "right", apple);
                    console.log("sta andandooo");
                }, difficolta);
            }
        }
    
        if(keyPressed.key == "ArrowUp" && !gameOver) {
            if(!flagDown){
                flagUp = true;
                flagLeft = false;
                flagRight = false;
                clearInterval(interval);
                snakeMovement(snake, "up", apple);
                interval = setInterval(() => {
                    snakeMovement(snake, "up", apple);
                    console.log("sta andandooo");
                }, difficolta);
            }
        }
    
        if(keyPressed.key == "ArrowDown" && !gameOver) {
            if(!flagUp){
                flagDown = true;
                flagLeft = false;
                flagRight = false;
                clearInterval(interval);
                snakeMovement(snake, "down", apple);
                interval = setInterval(() => {
                    snakeMovement(snake, "down", apple);
                    console.log("sta andandooo");
                }, difficolta);
            }
        }
    
        if(keyPressed.key == "ArrowLeft" && !gameOver) {
            if(!flagRight){
                flagLeft = true;
                flagUp = false;
                flagDown = false;
                clearInterval(interval);
                snakeMovement(snake, "left", apple);
                interval = setInterval(() => {
                    snakeMovement(snake, "left", apple);
                    console.log("sta andandooo");
                }, difficolta);   
            }
        }
    });

}


function snakeMovement(snake, direction, apple) {

    var newX = 0;
    var newY = 0;
    var expression = true;

    switch (direction) {
        case "left":   
            newX = snake.value[0].x - 1;
            newY = snake.value[0].y;
            expression = newX > 0;
            break;
        case "up":   
            newX = snake.value[0].x;
            newY = snake.value[0].y - 1;
            expression = newY > 0;
            break;
        case "right":   
            newX = snake.value[0].x + 1;
            newY = snake.value[0].y;
            expression = newX < 20;
            break;
        case "down":   
            newX = snake.value[0].x;
            newY = snake.value[0].y + 1;
            expression = newY < 20;
            break;
        default:
            break;
    }

    if(expression) {
        grid.innerHTML = "";

        //Se si colpisce da solo
        for (let i = 0; i < snake.value.length; i++) {
            if(newX == snake.value[i].x && newY == snake.value[i].y) {
                clearInterval(interval);
                gameOver = true;
                gameOverSound.play();
                //chiamata funzione showRisultato
                showResult();
            }
        }

        //Inizializzazione testa
        let newSnakePart = document.createElement("div");

        //Rotazione testa
        if(flagRight){
            newSnakePart.style.transform = "scale(1.5)"
        }
        else if(flagLeft){ 
            newSnakePart.style.transform = "scale(1.5) scaleX(-1)"
        }
        else if(flagUp){ 
            newSnakePart.style.transform = "scale(1.5) rotate(-90deg)"
        }
        else if(flagDown){ 
            newSnakePart.style.transform = "scale(1.5) rotate(90deg)"
        }

        //Creazione testa
        newSnakePart.style.gridRowStart = newY;
        newSnakePart.style.gridColumnStart = newX;
        newSnakePart.classList.add("snakeHead");

        snake.value.unshift({x: newX, y: newY});
        snake.value.pop();

        //Se mangia mela
        if(newX == apple.xCoo && newY == apple.yCoo) {
            enemyEaten.play();
            apple.spawnRandom(appleGrid, snake.value);
            snake.stretchSnake();
            score.innerHTML = "";
            currentScore += 10;
            score.innerHTML = currentScore;
        }

        grid.appendChild(newSnakePart);

        //crazione corpo
        for (let i = 1; i < snake.value.length; i++) {
            let bodyPart = document.createElement("div");

            bodyPart.style.gridRowStart = snake.value[i].y;
            bodyPart.style.gridColumnStart = snake.value[i].x;
            bodyPart.classList.add("snake");

            grid.appendChild(bodyPart); 
        }

        console.log(snake.value);
    }
    else {
        clearInterval(interval);
        gameOver = true;
        gameOverSound.play();
        //chiamata funzione showRisultato
        showResult();
    }

}