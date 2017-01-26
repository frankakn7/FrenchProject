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
    lock: false,
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
        context.clearRect(0, 0, 500, 500);
        canv = canvas;
        P1.draw();
        P2.draw();
        P3.draw();

        Q1.draw();
        Q2.draw();
    } else if (state === end) {
        eContext.clearRect(0, 0, 500, 500);
        canv = eCanvas;
        Q3.draw();
    }
    listen();
}