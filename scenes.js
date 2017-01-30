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
	gButton = 0;
	iButton = 0;
	Q1 = 0;
	Q2 = 0;
	back = 0;
	evidence = 0;
	E1 = 0;
}

var scene = {
	start: function(){		
		var sButton = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50, 'Start'); 
		sButton.clickFunction = function(){	
			gameState("prolog");
		};
		
		buttonPack = function() {
        	sButton.onButton(mouseX, mouseY, click);
        	click = false;
    	}
	},
	prolog: function(){
		var frame = 0;
		
		buttonPack = function(){
			if(frame >= 6){
				gameState("fotoWall");
			}
			
			if(	mouseX >= 0 && mouseX <= 0 + canvas.width &&
				mouseY >= 0 && mouseY <= 0 + canvas.height && push){
				frame ++;	
				context.fillStyle = 'black';
				context.fillRect(0,0,100 * frame,100 * frame);
			}
		}	
	},
	fotoWall: function(){
		P1 = new button(75, 200, 100, 300, false);
		P2 = new button(325, 200, 100, 300, false);
		P3 = new button(575, 200, 100, 300, false);
		
		P1.clickFunction = P2.clickFunction = P3.clickFunction = function(){
			context.clearRect(gButton.x,gButton.y,gButton.width,gButton.height);
			context.clearRect(iButton.x,iButton.y,iButton.width,iButton.height);
			gButton = 0;
			iButton = 0;
			
			gButton = new button(this.x + this.width / 2 - 110, this.y - 60, 100,50, "Guilty");
			gButton.clickFunction = function(){
				gameState("ending");
			}
			iButton = new button(this.x + this.width / 2 + 10, this.y - 60, 100,50, "inter");
			iButton.clickFunction = function(){
				gameState("interrogation");
			}
			
			buttonPack = function(){
				P1.onButton(mouseX, mouseY, click);
				P2.onButton(mouseX, mouseY, click);
				P3.onButton(mouseX, mouseY, click);
				gButton.onButton(mouseX, mouseY, click);
				iButton.onButton(mouseX, mouseY, click);
				click = false;
			}
		}
		
		buttonPack = function(){
			P1.onButton(mouseX, mouseY, click);
			P2.onButton(mouseX, mouseY, click);
			P3.onButton(mouseX, mouseY, click);
			click = false;
		}
	},
	interrogation: function(){		
		Q1 = new button(5, 335, canvas.width - 10, 50, 'Q1');
		Q1.clickFunction = function(){
			gameState("interrogation");
		};
		Q2 = new button(5, 390, canvas.width - 10, 50, 'Q2');
		Q2.clickFunction = function(){
			gameState("interrogation");
		};
		
		back = new button(5,445, canvas.width / 2 - 5, 50, 'Back');
		back.clickFunction = function(){
			gameState("fotoWall");
		};
		
		evidence = new button(canvas.width / 2 + 5,445, canvas.width / 2 - 10, 50, 'Evidence');
		evidence.clickFunction = function(){
			gameState("evidence");
		};
		
		buttonPack = function(){
			Q1.onButton(mouseX, mouseY, click);
			Q2.onButton(mouseX, mouseY, click);
			back.onButton(mouseX, mouseY, click);
			evidence.onButton(mouseX, mouseY, click);
			click = false;
		};
	},
	evidence: function(){		
		E1 = new button(20,20,100,100, 'E1');
		E1.clickFunction = function(){
			console.log("Height: 170 cm");
		}
		
		evidenceBack = new button(canvas.width / 2 - 50, 5, 100, 50, 'Back');
		evidenceBack.clickFunction = function(){
			gameState("interrogation");
		}
		
		buttonPack = function(){
			E1.onButton(mouseX,mouseY,click);
			evidenceBack.onButton(mouseX,mouseY,click);
			click = false;
		}
	},
	ending: function(){		
		buttonPack = function(){
			return 0;
			click = false;
		}
	},
}
function gameState(state) {
	resetAll();
	scene[state]();
	buttonPack();
}