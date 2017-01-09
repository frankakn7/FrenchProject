var canvas = document.getElementById("spriteCanvas");
var context = canvas.getContext("2d");

function button(width,height){
	this.width = width;
	this.height = height;
	
	this.draw = function(x,y){
		context.clearRect(x,y,this.width,this.height);
		context.fillRect(x - (this.width / 2),y - (this.height / 2),this.width,this.height);
	}
}

var first = new button(100,50);

first.draw(canvas.width / 2, canvas.height / 2);