var canvas = document.getElementById("startCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

function changeCanvas(canv){
	canvas = document.getElementById(canv);
	context = canvas.getContext("2d");
	context.font = '30px Arial';
	context.clearRect(0,0,canvas.width,canvas.height);
}

function resetAll(){
	click = false;
	sButton = 0;
	P1 = 0;
	P2 = 0;
	P3 = 0;
	Q1 = 0;
	Q2 = 0;
	E1 = 0;
}

var scene = {
	start: function(){
		changeCanvas("startCanvas");
		resetAll();
		
		var sButton = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50, 'Start'); 
		sButton.clickFunction = function(){	
			gameState("fotoWall");
		};
		
		initPack = function() {
        	sButton.onButton(mouseX, mouseY, click);
        	click = false;
    	}
    	listen();	
	},
	fotoWall: function(){
		changeCanvas("fotoCanvas");
		resetAll();
		
		P1 = new button(33, 200, 100, 300, false);
		P2 = new button(232, 200, 100, 300, false);
		P3 = new button(367, 200, 100, 300, false);
		
		P1.clickFunction = P2.clickFunction = P3.clickFunction = function(){
			gameState("interrogation");
		}
		
		initPack = function(){
			P1.onButton(mouseX, mouseY, click);
			P2.onButton(mouseX, mouseY, click);
			P3.onButton(mouseX, mouseY, click);
			click = false;
		}
		
		listen();
	},
	interrogation: function(){
		changeCanvas("gameCanvas");
		resetAll();
		
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
		
		listen();
	},
	evidence: function(){
		changeCanvas("evidenceCanvas");
		resetAll();
		
		E1 = new button(20,20,100,100, 'E1');
		E1.clickFunction = function(){
			console.log("Height: 170 cm");
		}
		
		initPack = function(){
			E1.onButton(mouseX,mouseY,click);
			click = false;
		}
		listen();
	},
	ending: function(){
		changeCanvas("endCanvas");
		resetAll();
		
		initPack = function(){
			return 0;
			click = false;
		}
		listen();
	},
}

//game flow
var start = document.getElementById("Start");
var fotoWall = document.getElementById("fotoWall");
var interrogation = document.getElementById("Interrogation");
var evidence = document.getElementById("Evidence");
var ending = document.getElementById("Ending");

function gameState(state) {
	start.style.display = 'none';
	fotoWall.style.display = 'none';
    interrogation.style.display = 'none';
    evidence.style.display = 'none';
    ending.style.display = 'none';
    
	var stateScene = window[state];
    stateScene.style.display = 'inline-block';
	
	scene[state]();
}