var questions = ["who are you ?", "where are you ?", "when are you ?", "why are you ?", "what are you ?"];

function person(){
	this.questions = [];
	this.answer = [];
	
	for(var i = 0; i < questions.length; i++){
		this.questions.push(i);
	}
	
	this.addAnswer = function(answer){
		this.answer.push(answer);
	}
	
	this.ask = function(question){
		console.log(this.answer[question]);
		var index = this.questions.indexOf(question);
		this.questions.splice(index,1);
	}
}

var person1 = new person();
person1.addAnswer("no");
person1.addAnswer("maybe");
person1.addAnswer("yes");
person1.addAnswer("lol");
person1.addAnswer("who ?");

var person2 = new person();
person2.addAnswer("what");
person2.addAnswer("the");
person2.addAnswer("hell");
person2.addAnswer("...");
person2.addAnswer("is");

var person3 = new person();
person3.addAnswer("hey");
person3.addAnswer("how");
person3.addAnswer("are");
person3.addAnswer("you");
person3.addAnswer("?");
