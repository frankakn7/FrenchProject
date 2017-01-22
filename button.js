var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var game = window;

function button(x,y,width,height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = 'black';
	
	this.draw = function(){
		context.fillStyle = this.color;
		context.clearRect(this.x,this.y,this.width,this.height);
		context.fillRect(this.x ,this.y,this.width,this.height);
	}
	
	this.onButton = function(mx,my){
		if(	mx >= this.x && mx <= this.x+this.width &&
			my >= this.y && my <= this.y+this.height){
				return true;
		}
	}
}

var first = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25 ,100,50);

first.draw();