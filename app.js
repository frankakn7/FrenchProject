var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

function resetAll(){
	context.clearRect(0,0,canvas.width,canvas.height);
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
		resetAll();
		
		var sButton = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50, 'Start'); 
		sButton.clickFunction = function(){	
			gameState("fotoWall");
		};
		
		buttonPack = function() {
        	sButton.onButton(mouseX, mouseY, click);
        	click = false;
    	}
    	//listen();	
	},
	fotoWall: function(){
		resetAll();
		
		P1 = new button(33, 200, 100, 300, false);
		P2 = new button(232, 200, 100, 300, false);
		P3 = new button(367, 200, 100, 300, false);
		
		P1.clickFunction = P2.clickFunction = P3.clickFunction = function(){
			gameState("interrogation");
		}
		
		buttonPack = function(){
			P1.onButton(mouseX, mouseY, click);
			P2.onButton(mouseX, mouseY, click);
			P3.onButton(mouseX, mouseY, click);
			click = false;
		}
		
		//listen();
	},
	interrogation: function(){
		resetAll();
		
		Q1 = new button(5, 390, 490, 50, 'Q1');
		Q1.clickFunction = function(){
			gameState("ending");
		};
		Q2 = new button(5, 445, 490, 50, 'Q2');
		Q2.clickFunction = function(){
			console.log("2");
		};
		
		buttonPack = function(){
			Q1.onButton(mouseX, mouseY, click);
			Q2.onButton(mouseX, mouseY, click);
			click = false;
		}
		
		//listen();
	},
	evidence: function(){
		resetAll();
		
		E1 = new button(20,20,100,100, 'E1');
		E1.clickFunction = function(){
			console.log("Height: 170 cm");
		}
		
		buttonPack = function(){
			E1.onButton(mouseX,mouseY,click);
			click = false;
		}
		//listen();
	},
	ending: function(){
		resetAll();
		
		buttonPack = function(){
			return 0;
			click = false;
		}
		//listen();
	},
}
function gameState(state) {
	scene[state]();
	buttonPack();
}