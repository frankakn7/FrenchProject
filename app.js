var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

var image = {};

image.background = {};
image.table = {};
image.jail = {};

image.background.start = new Image();
image.background.start.src = "Images/Start.png";
image.background.start.width = 2908;
image.background.start.height = 1875;

image.background.fotoWall = new Image();
image.background.fotoWall.src = "Images/FotoWallBackground.png";
image.background.fotoWall.width = 1028;
image.background.fotoWall.height = 632;

image.background.drunkGuy = new Image();
image.background.drunkGuy.src = "Images/inter_drunk.png";
image.background.drunkGuy.width = 2000;
image.background.drunkGuy.height = 1500;

image.background.blackJanitor = new Image();
image.background.blackJanitor.src = "Images/inter_janitor.png";
image.background.blackJanitor.width =2000;
image.background.blackJanitor.height = 1500;

image.background.frenchGuy = new Image();
image.background.frenchGuy.src = "Images/inter_french.png";
image.background.frenchGuy.width = 2000;
image.background.frenchGuy.height = 1500;

image.captain = new Image();
image.captain.src = "Images/Captain.png";
image.captain.width = 1000;
image.captain.height = 1700;

image.janitor = new Image();
image.janitor.src = "Images/Janitor.png";
image.janitor.width = 500;
image.janitor.height = 985;

image.franzose = new Image();
image.franzose.src = "Images/Franzose.png"
image.franzose.width = 400;
image.franzose.height = 1056;

image.text1 = new Image();
image.text1.src = "Images/Cutscene_Text1.png"
image.text1.width = 750;
image.text1.height = 500;

image.text2 = new Image();
image.text2.src = "Images/Cutscene_Text2.png"
image.text2.width = 750;
image.text2.height = 500;

image.text3 = new Image();
image.text3.src = "Images/Cutscene_Text3.png"
image.text3.width = 750;
image.text3.height = 500;

image.louvre = new Image();
image.louvre.src = "Images/louvre.png"
image.louvre.width = 430;
image.louvre.height = 288;

image.frame = new Image();
image.frame.src = "Images/frame.png"
image.frame.width = 600;
image.frame.height = 462;

image.table.drunkGuy = new Image();
image.table.drunkGuy.src = "Images/table_drunk.png";
image.table.drunkGuy.width = 750;
image.table.drunkGuy.height = 500;

image.table.frenchGuy = new Image();
image.table.frenchGuy.src = "Images/table_french.png";
image.table.frenchGuy.width = 750;
image.table.frenchGuy.height = 500;

image.table.blackJanitor = new Image();
image.table.blackJanitor.src = "Images/table_janitor copy.png";
image.table.blackJanitor.width = 750;
image.table.blackJanitor.height = 500;

image.jail.drunkGuy = new Image();
image.jail.drunkGuy.src = "Images/jail_drunk.png";
image.jail.drunkGuy.width = 750;
image.jail.drunkGuy.height = 500;

image.jail.frenchGuy = new Image();
image.jail.frenchGuy.src = "Images/jail_french.png";
image.jail.frenchGuy.width = 750;
image.jail.frenchGuy.height = 500;

image.jail.blackJanitor = new Image();
image.jail.blackJanitor.src = "Images/jail_janitor.png";
image.jail.blackJanitor.width = 750;
image.jail.blackJanitor.height = 500;