var canvas = document.getElementById("gameCanvas");
var context = sCanvas.getContext("2d");

//game flow
var start = document.getElementById("Start");
var inGame = document.getElementById("InGame");

function gameState(state) {
    InGame.style.display = 'none';
    start.style.display = 'none';

    state.style.display = 'inline-block';
}