export class SnakeClass {

    value = [];   //Head iniziale

    constructor (array) {
        this.value = array;
        for (let i = 0; i < array.length; i++) {
            let startSnakePart = document.createElement("div");
            startSnakePart.style.gridRowStart = array[i].y;
            startSnakePart.style.gridColumnStart = array[i].x;
            if(i === 0) {
                startSnakePart.classList.add("snakeHead");
            }
            else {
                startSnakePart.classList.add("snake");
            }
            document.getElementById("grid").appendChild(startSnakePart);  //Appende nuova parte
        }
    }

    stretchSnake () {

        let newX = this.value[this.value.length-1].x;
        let newY = this.value[this.value.length-1].y;

        this.value.push({x: newX, y: newY});

        console.log(this.value);
    }
}