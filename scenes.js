var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

var activeButtons = [];

function resetAll(){
	context.clearRect(0,0,canvas.width,canvas.height);
	click = false;
	activeButtons = [];

}

var scene = {
	start: function(){		
	    sButton = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50, 'Start');
		sButton.clickFunction = function () {
		    gameState("prolog");
		};
		activeButtons.push(sButton);
	},
	prolog: function(){
		var frame = 0;	
		
		prologButton = new button((canvas.width / 2) - 50, canvas.height - 60, 100, 50, 'Next');
		prologButton.clickFunction = function(){
			if(frame >= 5){
				gameState("fotoWall");
			}else{
				frame ++;
			}
		}
		activeButtons.push(prologButton);
	},
	fotoWall: function(){
		gButton = 0;
		iButton = 0;
		
		P1 = new button(75, 200, 100, 300, false, person1);
		P2 = new button(325, 200, 100, 300, false, person2);
		P3 = new button(575, 200, 100, 300, false, person3);
		
		P1.clickFunction = P2.clickFunction = P3.clickFunction = function(){
			if(gButton != 0 && iButton != 0){	
				context.clearRect(gButton.x,gButton.y,gButton.width,gButton.height);
				context.clearRect(iButton.x,iButton.y,iButton.width,iButton.height);
			
				var index = activeButtons.indexOf(gButton);
				activeButtons.splice(index,1);
				index = activeButtons.indexOf(iButton);
				activeButtons.splice(index,1);
			}
	
			var that = this;
			
			gButton = new button(this.x + this.width / 2 - 110, this.y - 60, 100,50, "Guilty");
			gButton.clickFunction = function(){
				gameState("ending");
			}
			iButton = new button(this.x + this.width / 2 + 10, this.y - 60, 100,50, "inter");
			iButton.clickFunction = function(){
				gameState("interrogation", that.person);
			}
			activeButtons.push(gButton,iButton);
			click = false;
			buttonPack();
		}
		
		activeButtons.push(P1,P2,P3);		
	},
	interrogation: function(p){
		
		var firstQuestion = p.questions[Math.round(Math.random()* (p.questions.length - 1))];
		var secondQuestion = p.questions[Math.round(Math.random()* (p.questions.length - 1))];
		
		if(firstQuestion === undefined){
			console.warn("No questions left");
		}else{
			while(secondQuestion === firstQuestion && (p.questions.length - 1) != 0){
				secondQuestion = p.questions[Math.round(Math.random()* (p.questions.length - 1))];
			}
							
			Q1 = new button(5, 335, canvas.width - 10, 50, questions[firstQuestion]);
			Q1.clickFunction = function(){
				p.ask(firstQuestion);
				gameState("interrogation",p);
			};
			Q2 = new button(5, 390, canvas.width - 10, 50, questions[secondQuestion]);
			Q2.clickFunction = function(){
				p.ask(secondQuestion);
				gameState("interrogation",p);
			};
			activeButtons.push(Q1,Q2)
		}
		
		back = new button(5,445, canvas.width / 2 - 5, 50, 'Back');
		back.clickFunction = function(){
			gameState("fotoWall");
		};
		
		evidence = new button(canvas.width / 2 + 5,445, canvas.width / 2 - 10, 50, 'Evidence');
		evidence.clickFunction = function(){
			gameState("evidence",p);
		};
		
		activeButtons.push(back,evidence);
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