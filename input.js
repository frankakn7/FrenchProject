var mouseX, mouseY;
var click = false;

function buttonPack() {
    for (var i in activeButtons) {
		    activeButtons[i].onButton(mouseX, mouseY, click);
	}
    click = false;
}

//mouse
canvas.addEventListener('mousemove', function (evt) {
    mouseX = evt.offsetX;
    mouseY = evt.offsetY;
    
    buttonPack();
});
canvas.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
	    push = true;
    }
    
    buttonPack();
});
canvas.addEventListener('mouseup', function (evt) {
    if (evt.button === 0) {
	    push = false;
        click = true;
    }
    buttonPack();
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

gameState("start");