var canvas = document.getElementById("startCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

var scene = 1;

//game flow
var start = document.getElementById("Start");
var inGame = document.getElementById("InGame");
var Ending = document.getElementById("Ending");

function gameState(state,canv) {
    InGame.style.display = 'none';
    start.style.display = 'none';
    Ending.style.display = 'none';

    state.style.display = 'inline-block';
	
	canvas = document.getElementById(canv);
	context = canvas.getContext("2d");
	context.font = '30px Arial';
	
    listen();
    
    sButton = 0;
    scene = 2;
    
    
}