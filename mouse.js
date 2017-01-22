var mouseX, mouseY;
var click = false;

//Start button
sCanvas.addEventListener('mousemove', function(evt){
	if (evt.offsetX) {
		mouseX = evt.offsetX;
		mouseY = evt.offsetY;
	}
	
	if (!click) {
	    sButton.onButton(mouseX, mouseY, click);
	}
});

sCanvas.addEventListener('mousedown', function(evt){
    if (evt.button === 0) {
	    click = true;
	    sButton.onButton(mouseX, mouseY, click);
	}
});

sCanvas.addEventListener('mouseup', function(evt){
    if (evt.button === 0) {
		click = false;
		if (sButton.onButton(mouseX, mouseY, click)) {
		    gameState(inGame);
		}
	}
});