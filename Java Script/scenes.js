var activeButtons = [];

function resetAll(){
	context.clearRect(0,0,canvas.width,canvas.height);
	click = false;
	activeButtons = [];

}

var scene = {
	start: function(){
		image.background.start.onload = function () {
			context.drawImage(image.background.start, 0, 0, image.background.start.width, image.background.start.height, 0, 0, canvas.width, canvas.height);
			buttonPack();
		}
		sButton = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50, ' Jouer');
		sButton.clickFunction = function () {
		    gameState("prolog");
		};
		activeButtons.push(sButton);
	},
	prolog: function(){
	    var frame = 1;
	    context.drawImage(image.text1, 0, 0, image.text1.width, image.text1.height, 0, 0, canvas.width, canvas.height);
		
		prologButton = new button((canvas.width / 2) - 50, canvas.height - 60, 128, 50, 'Prochain');
		prologButton.clickFunction = function () {
		    if (frame === 1) {
		        context.drawImage(image.louvre, 0, 0, image.louvre.width, image.louvre.height, 0, 0, canvas.width, canvas.height);
		    }
		    if(frame === 2){
		        context.drawImage(image.frame, 0, 0, image.frame.width, image.frame.height, 0, 0, canvas.width, canvas.height);
		    }
		    if(frame === 3){
		        context.drawImage(image.text2, 0, 0, image.text2.width, image.text2.height, 0, 0, canvas.width, canvas.height);
		    }
		    if(frame === 4){
		        context.drawImage(image.text3, 0, 0, image.text3.width, image.text3.height, 0, 0, canvas.width, canvas.height);
		    }
			if(frame === 5){
				gameState("fotoWall");
			} else {
			    frame++;
			}
		}
		activeButtons.push(prologButton);
	},
	fotoWall: function(){
		gButton = 0;
		iButton = 0;
		
		canvas.style.backgroundImage = "url("+image.background.fotoWall.src+")";
		
		//context.drawImage(image.background.fotoWall, 0, 0, image.background.fotoWall.width, image.background.fotoWall.height, 0, 0, canvas.width, canvas.height)
		
		P1 = new button(40, 130, 250, 400, false, drunkGuy, image.captain);
		P2 = new button(325, 200, 150, 300, false, blackJanitor, image.janitor);
		P3 = new button(525, 230, 125, 300, false, frenchGuy, image.franzose);
		
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
			
			gButton = new button(this.x + this.width / 2 - 160, this.y - 60, 150,50, "Coupable");
			gButton.clickFunction = function(){
				gameState("ending",that.person);
			}
			iButton = new button(this.x + this.width / 2 + 10, this.y - 60, 150,50, "Interroger");
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
		
		console.log(p.id);
		//console.log(image.background[p.id]);
		canvas.style.backgroundImage = "url("+image.background[p.id].src+")";
		
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
				//gameState("interrogation",p);
			};
			Q2 = new button(5, 390, canvas.width - 10, 50, questions[secondQuestion]);
			Q2.clickFunction = function(){
				p.ask(secondQuestion);
				//gameState("interrogation",p);
			};
			activeButtons.push(Q1,Q2)
		}
		
		back = new button(5,445, canvas.width / 2 - 5, 50, 'Dos');
		back.clickFunction = function(){
			gameState("fotoWall");
		};
		
		evidence = new button(canvas.width / 2 + 5, 445, canvas.width / 2 - 10, 50, 'Acte Criminale');
		evidence.clickFunction = function(){
			gameState("evidence",p);
		};
		
		activeButtons.push(back,evidence);
	},
	evidence: function (p) {
	    canvas.style.backgroundImage = "url(" + image.table[p.id].src + ")";
		
		evidenceBack = new button(canvas.width / 2 - 35, 5, 70, 50, 'Dos');
		evidenceBack.clickFunction = function(){
			gameState("interrogation",p);
		}
		
		activeButtons.push(evidenceBack);
	},
	ending: function(p){		
	    console.log("The End");
	    canvas.style.backgroundImage = "url(" + image.jail[p.id].src + ")";
	},
}
function gameState(state, person) {
	resetAll(); 
	scene[state](person);
	buttonPack();         //do not uncomment!!

}

//test