
export function showResult() {

    //VISUALIZZA MENU FINALE

    //LISTENER SUL TASTO DI RESTART

    console.log("showResult");
    
    const popupGameOver = document.getElementById('finalPopup');
    const resetButton = document.getElementById('restartButton');

    popupGameOver.style.display = "block";

    resetButton.addEventListener('click', () => {
        window.location.reload();
    })

}