var questions =["Qu'avez-vous fait le samedi ?", 
				"Quand ils sont eu attende pour la derniére fois au Louvre ?", 
				"Vous savez pourquoi vous êtes ici ?", 
				"Pouvez-vous nous dire quelque chose sur ce sujet ?", 
				"Ou est-ce que vous travaillez ?",
				"Vous avez de la famille ?",
				"Êtess-vous content avec votre vie?"];

var audioQuestion = {};
audioQuestion[29] = new Audio('Code/Audio/p4_q1.wav');    //was hast du am samstag um 23:00 Uhr gemacht ?
audioQuestion[59] = new Audio('Code/Audio/p4_q2.wav');    //wann waren sie das letzte mal im luvre ?
audioQuestion[35] = new Audio('Code/Audio/p4_q3.wav');    //wissen sie warum sie hier sind ?
audioQuestion[50] = new Audio('Code/Audio/p4_q4.wav');    //haben sie irgendwas gesehen ?
audioQuestion[31] = new Audio('Code/Audio/p4_q5.wav');    //wo arbeiten sie ?
audioQuestion[25] = new Audio('Code/Audio/p4_q6.wav');    //haben sie Familie ?
audioQuestion[34] = new Audio('Code/Audio/p4_q7.wav');    //sind sie mit ihrem leben zufrieden ?

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

drunkGuy.addAnswer(new Audio('Code/Audio/P1_Q1.wav'), "J'étais sur le chemin au restaurant");
drunkGuy.addAnswer(new Audio('Code/Audio/P1_Q2.wav'), "Keine Ahnung");
drunkGuy.addAnswer(new Audio('Code/Audio/p1_q3.wav'), "Diesmal bin ich nicht betrunken auto gefahren");
drunkGuy.addAnswer(new Audio('Code/Audio/p1_q7.wav'), "Ich weiss nichts sie muessen mir glauben");
drunkGuy.addAnswer(new Audio('Code/Audio/p1_q4.wav'), "Ich bin arbeitslos");
drunkGuy.addAnswer(new Audio('Code/Audio/p1_q5.wav'), "Nein");
drunkGuy.addAnswer(new Audio('Code/Audio/p1_q6.wav'), "Nein ... meine Frau hat mich verlassen und ich bin arbeitslos");

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

blackJanitor.addAnswer(new Audio('Code/Audio/what they did saterday.mp3'), "Ich habe im luvre gearbeitet");
blackJanitor.addAnswer(new Audio('Code/Audio/last time at louvre.mp3'), "Heute habe ich dort gearbeitet");
blackJanitor.addAnswer(new Audio('Code/Audio/why they are there.mp3'), "Ich habe nichts falsch gemacht");
blackJanitor.addAnswer(new Audio('Code/Audio/what they notised.mp3'), "Alles schien ganz normal");
blackJanitor.addAnswer(new Audio('Code/Audio/work.mp3'), "Ich bin eine putzkraft im luvre");
blackJanitor.addAnswer(new Audio('Code/Audio/family.mp3'), "Eine freundin und Kinder aus einer früheren beziehung");
blackJanitor.addAnswer(new Audio('Code/Audio/happy with life.mp3'), "EIgentlich schon ... ich hätte nur gerne eine beförderung");

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
							
frenchGuy.addAnswer(new Audio('Code/Audio/P3_Q1.m4a'), "Ich war im restaurante");
frenchGuy.addAnswer(new Audio('Code/Audio/P3_Q2.m4a'), "Letztes wochenende mit meiner Frau");
frenchGuy.addAnswer(new Audio('Code/Audio/P3_Q3.m4a'), "Nein ich weiss es nicht");
frenchGuy.addAnswer(new Audio('Code/Audio/P3_Q7.m4a'), "NEIN!");
frenchGuy.addAnswer(new Audio('Code/Audio/P3_Q4.m4a'), "Ich bin backmeister");
frenchGuy.addAnswer(new Audio('Code/Audio/P3_Q5.m4a'), "Ich bin verheiratet");
frenchGuy.addAnswer(new Audio('Code/Audio/P3_Q6.m4a'), "ALles ist super mein geschäft laeuft gut ... ich koennte nicht gluecklicher sein");
