var canvas = document.getElementById("spriteCanvas");
var context = canvas.getContext("2d");

var spriteImg = new Image();
spriteImg.src = "sprite.png";

var ticks = 0;

function spriteImage(image,width,height,frames,rows){
	this.image = image;
	this.width = width;
	this.height = height;
	this.frames = frames;
	this.rows = rows;
	
	this.frameIndex = 0;
}

function render(object){
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(
		object.image,											//Image
		object.frameIndex * (object.width / object.frames),		//Source X
		0,														//Source Y
		object.width / object.frames,							//Source Width
		object.height / object.rows,							//Source Height
		0,														//Destination X
		0,														//Destination Y
		object.width / object.frames,							//Frame Width
		object.height / object.rows								//Frame Height
	);
	if(object.frameIndex >= object.frames - 1){
		object.frameIndex = 0;
	}else{
		object.frameIndex ++;
	}	
}

var walk = new spriteImage(spriteImg,612,148,6,1);

function updateLoop(){
	window.requestAnimationFrame(updateLoop);
	
	if(ticks >= 7){
		render(walk);
		ticks = 0;
	}else{
		ticks ++;
	}
}

spriteImg.addEventListener("load", updateLoop);