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
    this.width = 100;
    this.height = 300;
    this.lock = false;
    
    this.answer = [];

    this.draw = function(){
        context.clearRect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

person1 = new person(75, 200, 'red');
person2 = new person(325, 200, 'blue');
person3 = new person(575, 200, 'green');