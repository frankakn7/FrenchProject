var mouseX, mouseY;

var click = false;

canvas.addEventListener('mousemove', function(evt){
	if(evt.offsetX) {
		mouseX = evt.offsetX;
		mouseY = evt.offsetY;
	}
	
	if(!(click) && !(first.clicked)){
		if(first.click(mouseX,mouseY)){
			first.color = 'gray';
			first.draw();
		}else{
			first.color = 'black';
			first.draw();
		}
	}
});

canvas.addEventListener('mousedown', function(evt){
	if(evt.button === 0){
		if(first.click(mouseX,mouseY)){
			first.color = 'green';
			first.draw();
		}
		click = true;
	}
});

canvas.addEventListener('mouseup', function(evt){
	if(evt.button === 0){
		if(first.click(mouseX,mouseY)){
			if(first.clicked){
				first.clicked = false;
			}else{
				first.clicked = true;
			}	
			first.draw();
		}
		click = false;
	}
});