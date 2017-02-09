var questions =["was hast du am samstag um 23:00 Uhr gemacht ?", 
				"wann waren sie das letzte mal im luvre ?", 
				"wissen sie warum sie hier sind ?", 
				"haben sie irgendwas gesehen ?", 
				"wo arbeiten sie ?",
				"haben sie Familie ?",
				"sind sie mit ihrem leben zufrieden ?"];

var audioQuestion = {};
audioQuestion[45] = new Audio('Code/Audio/Question.m4a');    //was hast du am samstag um 23:00 Uhr gemacht ?
audioQuestion[40] = new Audio('Code/Audio/Question.m4a');    //wann waren sie das letzte mal im luvre ?
audioQuestion[32] = new Audio('Code/Audio/Question.m4a');   //wissen sie warum sie hier sind ?
audioQuestion[29] = new Audio('Code/Audio/Question.m4a');    //haben sie irgendwas gesehen ?
audioQuestion[17] = new Audio('Code/Audio/Question.m4a');    //wo arbeiten sie ?
audioQuestion[19] = new Audio('Code/Audio/Question.m4a');    //haben sie Familie ?
audioQuestion[36] = new Audio('Code/Audio/Question.m4a');    //sind sie mit ihrem leben zufrieden ?

//new Audio('Code/Audio/Question.m4a');

function person(id, name, age, job, family, gender, bType, height, weight, birthday, hospital, guilty){
	var that = this;
	
	this.id = id;
	this.name = name;
	this.age = age;
	this.job = job;
	this.family = family;
	
	this.criminalActivity = [];
	
	this.gender = gender;
	this.bloodType = bType;
	this.height = height;
	this.weight = weight;
	this.birthday = birthday;
	this.hospital = hospital;
	
	this.guilty = guilty;
	
	this.questions = [];
	this.audioAnswer = [];
	this.textAnswer = [];
	
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
		
		console.log("Q: "+questions[question]);
		console.log("A: " + this.textAnswer[question]);
		console.log(questions[question].length);
		var i = questions[question].length;
		
		audioQuestion[i].play();
		audioQuestion[i].onended = function () {
			that.audioAnswer[question].play();
			that.audioAnswer[question].onended = function(){
				gameState("interrogation", that);
			}
		}
	}
}

var drunkGuy = new person( "drunkGuy", 
						   "noname", 
						   51,
						   "None", 
						   "None", 
						   "Male", 
						   "A-", 
						   1.90, 
						   120, 
						   "04.06.1966", 
						   "Hôpital Desbief",
						   false);

drunkGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "J'étais sur le chemin au restaurant");
drunkGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Keine Ahnung");
drunkGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Diesmal bin ich nicht betrunken auto gefahren");
drunkGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich weiss nichts sie muessen mir glauben");
drunkGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich bin arbeitslos");
drunkGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Nein");
drunkGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Nein ... meine Frau hat mich verlassen und ich bin arbeitslos");

var blackJanitor = new person( "blackJanitor", 
							   "noname",
							   28, 
							   "Janitor (louvre, 75001 Paris)", 
							   "Girfriend (pregnant) + 1 Boy", 
							   "Male", 
							   "AB+", 
							   1.75, 
							   81, 
							   "17.10.1988", 
							   "Hôpital Americain de Paris",
							   false);

blackJanitor.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich habe im luvre gearbeitet");
blackJanitor.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Heute habe ich dort gearbeitet");
blackJanitor.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich habe nichts falsch gemacht");
blackJanitor.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Alles schien ganz normal");
blackJanitor.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich bin eine putzkraft im luvre");
blackJanitor.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Eine freundin und Kinder aus einer früheren beziehung");
blackJanitor.addAnswer(new Audio('Code/Audio/Answer.m4a'), "EIgentlich schon ... ich hätte nur gerne eine beförderung");

var frenchGuy = new person( "frenchGuy", 
							"Francois Martinez",
							38, 
							"Owner Boulangerie", 
							"Wife (Luise Martinez)", 
							"Male", 
							"0+", 
							1.70, 
							70, 
							"09.02.1979", 
							"Centre Léon Bérard",
							true);
							
frenchGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich habe mir die sterne angeschaut");
frenchGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Letztes wochenende mit meiner Frau");
frenchGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Nein ich weiss es nicht");
frenchGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "NEIN!");
frenchGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich bin backmeister");
frenchGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "Ich bin verheiratet");
frenchGuy.addAnswer(new Audio('Code/Audio/Answer.m4a'), "ALles ist super mein geschäft laeuft gut ... ich koennte nicht gluecklicher sein");