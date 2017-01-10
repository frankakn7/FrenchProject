var mouseX, mouseY;

var click = false;

canvas.addEventListener('mousemove', function(evt){
	if(evt.offsetX) {
		mouseX = evt.offsetX;
		mouseY = evt.offsetY;
	}
	
	if(!(click) && first.clickStatus != 3){
		if(first.click(mouseX,mouseY)){
			first.clickStatus = 1;
			first.draw();
		}else{
			first.clickStatus = 0;
			first.draw();
		}
	}
});

canvas.addEventListener('mousedown', function(evt){
	if(evt.button === 0){
		if(first.click(mouseX,mouseY)){
			first.clickStatus = 2;
			first.draw();
		}
		click = true;
	}
});

canvas.addEventListener('mouseup', function(evt){
	if(evt.button === 0){
		if(first.click(mouseX,mouseY)){
			if(first.clickStatus === 3){
				first.clickStatus = 0;
			}else{
				first.clickStatus = 3;
			}	
			first.draw();
		}
		click = false;
	}
});