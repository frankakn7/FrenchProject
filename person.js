var questions = ["who are you ?", "where are you ?", "when are you ?", "why are you ?", "what are you ?"];
var audioQuestion = new Audio('Question.m4a');

function person(){
	this.questions = [];
	this.answer = [];
	var that = this;
	
	for(var i = 0; i < questions.length; i++){
		this.questions.push(i);
	}
	
	this.addAnswer = function(answer){
		this.answer.push(answer);
	}
	
	this.ask = function(question){
		var index = this.questions.indexOf(question);
		this.questions.splice(index,1);
		
		resetAll();
		
		audioQuestion.play();
		audioQuestion.onended = function(){
			that.answer[question].play();
			that.answer[question].onended = function(){
				gameState("interrogation", that);
			}
		}
		
	}
}

var person1 = new person();
person1.addAnswer(new Audio('Answer.m4a'));
person1.addAnswer(new Audio('Answer.m4a'));
person1.addAnswer(new Audio('Answer.m4a'));
person1.addAnswer(new Audio('Answer.m4a'));
person1.addAnswer(new Audio('Answer.m4a'));

var person2 = new person();
person2.addAnswer(new Audio('Answer.m4a'));
person2.addAnswer(new Audio('Answer.m4a'));
person2.addAnswer(new Audio('Answer.m4a'));
person2.addAnswer(new Audio('Answer.m4a'));
person2.addAnswer(new Audio('Answer.m4a'));

var person3 = new person();
person3.addAnswer(new Audio('Answer.m4a'));
person3.addAnswer(new Audio('Answer.m4a'));
person3.addAnswer(new Audio('Answer.m4a'));
person3.addAnswer(new Audio('Answer.m4a'));
person3.addAnswer(new Audio('Answer.m4a'));
