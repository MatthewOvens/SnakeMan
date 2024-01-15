export class AppleClass {

    xCoo;
    yCoo;

    constructor(x, y) {  //Forse non serve perchè random
        this.xCoo = x;
        this.yCoo = y;
    }

    spawnRandom(appleGrid, snakeArray) {

        appleGrid.innerHTML = "";

        //Generazione casuale mela

        //Per evitare di far spawnare la mela sopra il serpente
        do {
            this.xCoo = Math.floor(Math.random() * 19) + 1; 
            this.yCoo = Math.floor(Math.random() * 19) + 1;
        }    //Ritorna true se esiste un elemento dell'array snake che abbia le stesse coordinate della mela
        while (snakeArray.some((element) => { 
            return (element.x == this.xCoo && element.y == this.yCoo);
        }))

        var apple = document.createElement("div");
        apple.style.gridRowStart = this.yCoo;
        apple.style.gridColumnStart = this.xCoo;
        apple.classList.add("apple");

        appleGrid.appendChild(apple);
    }
    
}