var canvas = document.getElementById("startCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

var scene = {
	InGame: function(){
		Q1 = new button(5, 390, 490, 50, 'Q1');
		Q1.clickFunction = function(){
			gameState(Ending,"endCanvas");
		};
		Q2 = new button(5, 445, 490, 50, 'Q2');
		Q2.clickFunction = function(){
			console.log("2");
		};
		
		function initPack(){
			Q1.onButton(mouseX, mouseY, click);
			Q2.onButton(mouseX, mouseY, click);
			click = false;
		}
	}
}

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
	
	scene.;
	
    listen();
    
    sButton = 0;
    scene = 2;
    
    //console.log(scene.state);
}