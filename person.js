function person(answer1, answer2, answer3, answer4){
	this.questions = [0,1,2,3];
	this.answer = [answer1, answer2, answer3, answer4];
	
	this.ask = function(question){
		console.log(this.answer[question]);
		var index = this.questions.indexOf(question);
		this.questions.splice(index,1);
	}
}

var person1 = new person("no", "maybe", "yes", "lol");
var person2 = new person("what", "the", "hell", "...");
var person3 = new person("hey", "how", "are", "you?");