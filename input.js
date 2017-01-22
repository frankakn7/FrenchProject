var mouseX, mouseY;
var click = false;

//mouse
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

//keys
var keys = {
    up: false,
    down: false,
    left: false,
    right: false,
}
document.onkeydown = function (event) {
    if (event.keyCode === 39)
        keys.right = true;
    else if (event.keyCode === 40)
        keys.down = true;
    else if (event.keyCode === 37)
        keys.left = true;
    else if (event.keyCode === 38)
        keys.up = true;
}
document.onkeyup = function (event) {
    if (event.keyCode === 39 && keys.right === true)
        keys.right = false;
    else if (event.keyCode === 40 && keys.down === true)
        keys.down = false;
    else if (event.keyCode === 37 && keys.left === true)
        keys.left = false;
    else if (event.keyCode === 38 && keys.up === true)
        keys.up = false;
}