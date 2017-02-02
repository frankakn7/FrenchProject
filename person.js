var questions = ["who are you ?", "where are you ?", "when are you ?", "why are you ?"];

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
    this.width = 150;
    this.height = 370;
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
		gButton = 0;
		iButton = 0;
		var that = this;
		
		gButton = new button(this.x + this.width / 2 - 110, this.y - 60, 100,50, "Guilty");
		gButton.clickFunction = function(){
			gameState("ending");
		}
		iButton = new button(this.x + this.width / 2 + 10, this.y - 60, 100,50, "inter");
		iButton.clickFunction = function(){
			gameState("interrogation", that.person);
		}
		
		buttonPack = function(){
			P1.onButton(mouseX, mouseY, click);
			P2.onButton(mouseX, mouseY, click);
			P3.onButton(mouseX, mouseY, click);
			gButton.onButton(mouseX, mouseY, click);
			iButton.onButton(mouseX, mouseY, click);
			click = false;
			
		}
		click = false;
		buttonPack();
	}

    this.select = function (mx, my, click) {
        if (mx >= this.x + view.x && mx <= this.x + this.width + view.x &&
           my >= this.y + view.y && my <= this.y + this.height + view.y && !this.lock) {
            if (click) {
                selected = this.color;
                console.log(this.color);
            }
        }
    }
}

P1 = new person(13, 10, 'red');
P2 = new person(175, 10, 'blue');
P3 = new person(337, 10, 'green');


