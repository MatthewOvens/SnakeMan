import {setGame} from './Game.js'

    var buttonEasy = document.getElementById("easy");
    var buttonNormal = document.getElementById("normal");
    var buttonHard = document.getElementById("hard");
    var buttonStart = document.getElementById("startGame");

    const popup = document.getElementById("popupClass");

    var difficolta;

    var load = true;

    //Visualizza popup per inserimento nome giocatore
    popup.style.display = "block";

    //Instanziazione oggetti suono
    var buttonSound = new Audio('./assets/buttonClick.wav');
    var startGameSound = new Audio('./assets/startGameSound.ogg');
    var menuMusic = new Audio('./assets/menuTheme.mp3');


    document.getElementById('enterDiffContent').addEventListener("click", function () {
        if(load) {
            menuMusic.volume = 0.2;
            menuMusic.play();
            load = false;
        }
    })

    buttonEasy.addEventListener("click",()=>{
        buttonSound.play();
        difficolta = 150;
        buttonEasy.classList.remove("button");
        buttonEasy.classList.add("buttonSelected");
        buttonNormal.classList.remove("buttonSelected");
        buttonHard.classList.remove("buttonSelected");
    })
    buttonNormal.addEventListener("click",()=>{
        buttonSound.play();
        difficolta = 100;
        buttonEasy.classList.remove("buttonSelected");
        buttonNormal.classList.remove("button");
        buttonNormal.classList.add("buttonSelected");
        buttonHard.classList.remove("buttonSelected");
    })
    buttonHard.addEventListener("click",()=>{
        buttonSound.play();
        difficolta = 50;
        buttonEasy.classList.remove("buttonSelected");
        buttonNormal.classList.remove("buttonSelected");
        buttonHard.classList.remove("button");
        buttonHard.classList.add("buttonSelected");
    })
    buttonStart.addEventListener("click",()=>{
        if(difficolta == 50 || difficolta == 100 || difficolta == 150) {
            startGameSound.play();
            menuMusic.pause();
            popup.style.display = "none";
            console.log(difficolta);
            setGame(difficolta);
        }
        else {
            console.log("SCEGLI LA DIFFICOLTA' PER PRIMA COSA, GRAZIE");
        }
    });



