var mouseX, mouseY;

var click = false;

canvas.addEventListener('mousemove', function(evt){
	if(evt.offsetX) {
		mouseX = evt.offsetX;
		mouseY = evt.offsetY;
	}
	
	if(!(click)){
		if(first.onButton(mouseX,mouseY)){
			first.color = 'grey';
			first.draw();
		}else{
			first.color = 'black';
			first.draw();
		}
	}
});

canvas.addEventListener('mousedown', function(evt){
	if(evt.button === 0){
		if(first.onButton(mouseX,mouseY)){
			first.color = 'black';
			first.draw();
		}
		click = true;
	}
});

canvas.addEventListener('mouseup', function(evt){
	if(evt.button === 0){
		if(first.onButton(mouseX,mouseY)){
			game.flow.inGame();
		}
		click = false;
	}
});