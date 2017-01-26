var canvas = document.getElementById("startCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

function changeCanvas(canv){
	canvas = document.getElementById(canv);
	context = canvas.getContext("2d");
	context.font = '30px Arial';
	context.clearRect(0,0,canvas.width,canvas.height);
}

var scene = {
	inGame: function(){
		changeCanvas("gameCanvas");
		
		Q1 = new button(5, 390, 490, 50, 'Q1');
		Q1.clickFunction = function(){
			gameState("ending");
		};
		Q2 = new button(5, 445, 490, 50, 'Q2');
		Q2.clickFunction = function(){
			console.log("2");
		};
		
		initPack = function(){
			Q1.onButton(mouseX, mouseY, click);
			Q2.onButton(mouseX, mouseY, click);
			click = false;
		}
		sButton = 0;
		listen();
	},
	ending: function(){
		changeCanvas("endCanvas");
		
		Q1 = 0;
		Q2 = 0;
		
		initPack = function(){
			return 0;
		}
	}
}

//game flow
var start = document.getElementById("Start");
var inGame = document.getElementById("InGame");
var ending = document.getElementById("Ending");

function gameState(state) {
    inGame.style.display = 'none';
    start.style.display = 'none';
    ending.style.display = 'none';
    
	var stateScene = window[state];
    stateScene.style.display = 'inline-block';
	
	scene[state]();
    
    //console.log(scene.state);
}