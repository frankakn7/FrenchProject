var canvas = document.getElementById("spriteCanvas");
//var context = canvas.getContext("2d");

var spriteImg = new Image();
spriteImg.src = "sprite.png";

function sprite(options){
	var that = {};
	
	that.frameIndex = 0,
	that.tickCount = 0,
	that.ticksPerFrame = options.ticksPerFrame;
	that.numberOfFrames = options.numberOfFrames;
	
	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;
	
	that.render = function(){
		that.context.drawImage(
			that.image,
			that.frameIndex * that.width / that.numberOfFrames,
			0,
			that.width / that.numberOfFrames,
			that.height,
			0,
			0,
			that.width / that.numberOfFrames,
			that.height
		);
	}
	
	that.update = function(){
		that.tickCount += 1;
		that.context.clearRect(0,0,that.width,that.height)
		if(that.tickCount > that.ticksPerFrame){
			that.tickCount = 0;
			that.frameIndex += 1;
		}
		that.frameIndex = that.frameIndex % that.numberOfFrames;
	}
	
	return that;
}

var jump = sprite({
	context: canvas.getContext("2d"),
	width: 612,
	height: 148,
	image: spriteImg,
	ticksPerFrame: 7,
	numberOfFrames: 6,
	
});

function spriteLoop(){
	window.requestAnimationFrame(spriteLoop);
	
	jump.update();
	jump.render();
}

spriteImg.addEventListener("load", spriteLoop);