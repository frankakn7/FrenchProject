var questions =["was hast du am samstag um 23:00 Uhr gemacht ?", 
				"wann waren sie das letzte mal im luvre ?", 
				"wissen sie warum sie hier sind ?", 
				"haben sie irgendwas gesehen ?", 
				"wo arbeiten sie ?",
				"haben sie Familie ?",
				"sind sie mit ihrem leben zufrieden ?"];

var audioQuestion = new Audio('Question.m4a');

function person(){
	this.questions = [];
	this.audioAnswer = [];
	this.textAnswer = [];
	var that = this;
	
	for(var i = 0; i < questions.length; i++){
		this.questions.push(i);
	}
	
	this.addAnswer = function(answerAudio,answerText){
		this.audioAnswer.push(answerAudio);
		this.textAnswer.push(answerText);
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
person1.addAnswer(new Audio('Answer.m4a'),"Ich war auf dem heimweg vom restaurant");
person1.addAnswer(new Audio('Answer.m4a'),"Keine Ahnung");
person1.addAnswer(new Audio('Answer.m4a'),"Diesmal bin ich nicht betrunken auto gefahren");
person1.addAnswer(new Audio('Answer.m4a'),"Ich weiss nichts sie muessen mir glauben");
person1.addAnswer(new Audio('Answer.m4a'),"Ich bin arbeitslos");
person1.addAnswer(new Audio('Answer.m4a'),"Nein");
person1.addAnswer(new Audio('Answer.m4a'),"Nein ... meine Frau hat mich verlassen und ich bin arbeitslos");

var person2 = new person();
person2.addAnswer(new Audio('Answer.m4a'),"Ich habe im luvre gearbeitet");
person2.addAnswer(new Audio('Answer.m4a'),"Heute habe ich dort gearbeitet");
person2.addAnswer(new Audio('Answer.m4a'),"Ich habe nichts falsch gemacht");
person2.addAnswer(new Audio('Answer.m4a'),"Alles schien ganz normal");
person2.addAnswer(new Audio('Answer.m4a'),"Ich bin eine putzkraft im luvre");
person2.addAnswer(new Audio('Answer.m4a'),"Eine freundin und Kinder aus einer früheren beziehung");
person2.addAnswer(new Audio('Answer.m4a'),"EIgentlich schon ... ich hätte nur gerne eine beförderung");

var person3 = new person();
person3.addAnswer(new Audio('Answer.m4a'),"Ich habe mir die sterne angeschaut");
person3.addAnswer(new Audio('Answer.m4a'),"Letztes wochenende mit meiner Frau");
person3.addAnswer(new Audio('Answer.m4a'),"Nein ich weiss es nicht");
person3.addAnswer(new Audio('Answer.m4a'),"NEIN!");
person3.addAnswer(new Audio('Answer.m4a'),"Ich bin backmeister");
person3.addAnswer(new Audio('Answer.m4a'),"Ich bin verheiratet");
person3.addAnswer(new Audio('Answer.m4a'),"ALles ist super mein geschäft laeuft gut ... ich koennte nicht gluecklicher sein");
