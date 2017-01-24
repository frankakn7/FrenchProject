var mouseX, mouseY;
var click = false;
var push = false;

//mouse
sCanvas.addEventListener('mousemove', function(evt){
	if (evt.offsetX) {
		mouseX = evt.offsetX;
		mouseY = evt.offsetY;
	}
});
sCanvas.addEventListener('mousedown', function(evt){
    if (evt.button === 0) {
	    push = true;
	}
});
sCanvas.addEventListener('mouseup', function(evt){
    if (evt.button === 0) {
        push = false;
        click = true;
    }
});
    function initPack() {
        sButton.onButton(mouseX, mouseY, click);
        click = false;
    }

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
    if (event.keyCode === 39 && keys.right === true){
        keys.right = false;
    }else if (event.keyCode === 40 && keys.down === true){
        keys.down = false;
    }else if (event.keyCode === 37 && keys.left === true){
        keys.left = false;
    }else if (event.keyCode === 38 && keys.up === true){
        keys.up = false;
    }
}

function update() {
    initPack();
}
setInterval(update, 1000 / 30);