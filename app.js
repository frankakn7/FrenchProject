var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
context.font = '30px Arial';

var image = {};

image.background = {};

image.background.start = new Image();
image.background.start.src = "Images/Start.png";
image.background.start.width = 2908;
image.background.start.height = 1875;

image.captain = new Image();
image.captain.src = "Images/Captain.png";
image.captain.width = 1000;
image.captain.height = 1700;

image.franzose = new Image();
image.franzose.src = "Images/Franzose.png"
image.franzose.width = 400;
image.franzose.height = 1056;
