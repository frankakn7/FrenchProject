var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

var image = {};

image.background = {};

image.background.start = new Image();
image.background.start.src = "Images/Start.png";
image.background.start.width = 2908;
image.background.start.height = 1875;

image.background.fotoWall = new Image();
image.background.fotoWall.src = "Images/FotoWallBackground.png";
image.background.fotoWall.width = 1028;
image.background.fotoWall.height = 632;

image.background.drunkGuy = new Image();
image.background.drunkGuy.src = "";
image.background.drunkGuy.width = 0;
image.background.drunkGuy.height = 0;

image.background.blackJanitor = new Image();
image.background.blackJanitor.src = "";
image.background.blackJanitor.width = 0;
image.background.blackJanitor.height = 0;

image.background.frenchGuy = new Image();
image.background.frenchGuy.src = "";
image.background.frenchGuy.width = 0;
image.background.frenchGuy.height = 0;

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

image.louvre = new Image();
image.louvre.src = "Images/louvre.png"
image.louvre.width = 430;
image.louvre.height = 288;

image.frame = new Image();
image.frame.src = "Images/frame.png"
image.frame.width = 600;
image.frame.height = 462;