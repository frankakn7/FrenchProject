var questions = ["who are you ?", "where are you ?", "when are you ?", "why are you ?"];

var gButton,iButton;
/*
function person(answer1, answer2, answer3, answer4){
	this.questions = [0,1,2,3];
	this.answer = [answer1, answer2, answer3, answer4];
	
	this.ask = function(question){
		console.log(this.answer[question]);
		var index = this.questions.indexOf(question);
		this.questions.splice(index,1);
	}
}
*/
/*

var person1 = new person("no", "maybe", "yes", "lol");
var person2 = new person("what", "the", "hell", "...");
var person3 = new person("hey", "how", "are", "you?");
*/

function person(x, y, color) {
    this.x = x;
    this. y = y;
    this.color = color;
    this.width = 100;
    this.height = 300;
    this.lock = false;
    
    this.answer = [];

    this.draw = function(){
        context.clearRect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    
    this.clickFunction = function(){
		context.clearRect(gButton.x,gButton.y,gButton.width,gButton.height);
		context.clearRect(iButton.x,iButton.y,iButton.width,iButton.height);
		
		var index = activeButtons.indexOf(gButton);
		activeButtons.splice(index,1);
		index = activeButtons.indexOf(iButton);
		activeButtons.splice(index,1);

		var that = this;
		
		gButton = new button(this.x + this.width / 2 - 110, this.y - 60, 100,50, "Guilty");
		activeButtons.push(gButton);
		gButton.clickFunction = function(){
			gameState("ending");
		}
		iButton = new button(this.x + this.width / 2 + 10, this.y - 60, 100,50, "inter");
		activeButtons.push(gButton);
		iButton.clickFunction = function(){
			gameState("interrogation", that);
		}
		click = false;
		buttonPack();
	}

    this.onButton = function (mx, my, click) {
        if (mx >= this.x && mx <= this.x + this.width &&
			my >= this.y && my <= this.y + this.height && !this.lock) {
            if(!click){
                //this.color = 'grey';
                this.draw();
            }else{
                if(click){
	                this.clickFunction();
                }
            }
        }else{
	        if(!this.lock){
            	//this.color = 'black';
				this.draw();
			}else{
				this.draw();
			}
        }
    }
}

P1 = new person(75, 200, 'red');
P2 = new person(325, 200, 'blue');
P3 = new person(575, 200, 'green');