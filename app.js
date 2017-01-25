var sCanvas = document.getElementById("startCanvas");
var sContext = sCanvas.getContext("2d");
sContext.font = '30px Arial';
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';
var eCanvas = document.getElementById("endCanvas");
var eContext = eCanvas.getContext("2d");
eContext.font = '30px Arial';

var view = {
    x: 0,
    y: 0,
}

var canv = sCanvas;

//game flow
var start = document.getElementById("start");
var inGame = document.getElementById("inGame");
var end = document.getElementById("end");

var gState = start;
function gameState(state) {
    inGame.style.display = 'none';
    start.style.display = 'none';
    end.style.display = 'none';

    state.style.display = 'inline-block';
    gState = state;

    if (state === inGame) {
        canv = canvas;
    } else if (state === end) {
        canv = eCanvas;
        Q3.draw();
    }
    listen();

    context.fillStyle = 'red';
    context.fillRect(canvas.width / 2 - 125, 10, 250, 450);
}