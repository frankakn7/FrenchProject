var sCanvas = document.getElementById("startCanvas");
var sContext = sCanvas.getContext("2d");
sContext.font = '30px Arial';
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';


//game flow
var start = document.getElementById("Start");
var inGame = document.getElementById("InGame");

function gameState(state) {
    InGame.style.display = 'none';
    start.style.display = 'none';

    state.style.display = 'inline-block';
}