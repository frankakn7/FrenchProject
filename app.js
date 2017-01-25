var sCanvas = document.getElementById("startCanvas");
var sContext = sCanvas.getContext("2d");
sContext.font = '30px Arial';
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';
var eCanvas = document.getElementById("endCanvas");
var eContext = eCanvas.getContext("2d");
eContext.font = '30px Arial';

var canv = sCanvas;

//game flow
var start = document.getElementById("Start");
var inGame = document.getElementById("InGame");
var end = document.getElementById("end");

function gameState(state) {
    InGame.style.display = 'none';
    start.style.display = 'none';
    end.style.display = 'none';

    state.style.display = 'inline-block';

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