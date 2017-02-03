var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

var activeButtons = [];

function resetAll(){
	context.clearRect(0,0,canvas.width,canvas.height);
	//click = false;
	activeButtons = [];

}

var scene = {
	start: function(){		
	    sButton = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50, 'Start');
	    activeButtons.push(sButton);
		sButton.clickFunction = function () {
		    gameState("prolog");
		};
		//activeButtons.push(sButton);
	},
	prolog: function(){
		var frame = 0;	
		
		prologButton = new button((canvas.width / 2) - 50, canvas.height - 60, 100, 50, 'Next');
		activeButtons.push(prologButton);
		prologButton.clickFunction = function(){
			if(frame >= 5){
				gameState("fotoWall");
			}else{
				frame ++;
			}
		}
	},
	fotoWall: function(){
				
	},
	interrogation: function(p){
		
		var firstQuestion = questions[p.questions[Math.round(Math.random()* (p.questions.length - 1))]];
		var secondQuestion =  questions[p.questions[Math.round(Math.random()* (p.questions.length - 1))]];
				
		Q1 = new button(5, 335, canvas.width - 10, 50, firstQuestion);
		Q1.clickFunction = function(){
			p.ask(0);
			gameState("interrogation",p);
		};
		Q2 = new button(5, 390, canvas.width - 10, 50, secondQuestion);
		Q2.clickFunction = function(){
			p.ask(1);
			gameState("interrogation",p);
		};
		
		back = new button(5,445, canvas.width / 2 - 5, 50, 'Back');
		back.clickFunction = function(){
			gameState("fotoWall");
		};
		
		evidence = new button(canvas.width / 2 + 5,445, canvas.width / 2 - 10, 50, 'Evidence');
		evidence.clickFunction = function(){
			gameState("evidence",p);
		};
		
		activeButtons.push(Q1,Q2,back,evidence);
	},
	evidence: function(p){		
		E1 = new button(20,20,100,100, 'E1');
		E1.clickFunction = function(){
			console.log("Height: 170 cm");
		}
		
		evidenceBack = new button(canvas.width / 2 - 50, 5, 100, 50, 'Back');
		evidenceBack.clickFunction = function(){
			gameState("interrogation",p);
		}
		
		activeButtons.push(E1,evidenceBack);
	},
	ending: function(){		
		console.log("The End");
	},
}
function gameState(state, person) {
	resetAll(); 
	scene[state](person);
	buttonPack();         //do not uncomment!!

}

//test