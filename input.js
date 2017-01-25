var mouseX, mouseY;
var click = false;
var push = false;

//mouse
function listen() {
    canvas.addEventListener('mousemove', function (evt) {
        mouseX = evt.offsetX;
        mouseY = evt.offsetY;
    });
    canvas.addEventListener('mousedown', function (evt) {
        if (evt.button === 0) {
            push = true;
        }
    });
    canvas.addEventListener('mouseup', function (evt) {
        if (evt.button === 0) {
            push = false;
            click = true;
        }
    });
}
    function initPack() {
        if(scene === 1){
        	sButton.onButton(mouseX, mouseY, click);
		}else if(scene === 2){
			Q1.onButton(mouseX, mouseY, click);
			Q2.onButton(mouseX, mouseY, click);
		}
        click = false;
    }
    listen();
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
    if (event.keyCode === 39 && keys.right === true) {
        console.log(mouseX);
        keys.right = false;
    } else if (event.keyCode === 40 && keys.down === true) {
        listen();
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