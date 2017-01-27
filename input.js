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
    var initPack = function() {
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
        gameState("evidence");
    }else if (event.keyCode === 37 && keys.left === true){
        keys.left = false;
    }else if (event.keyCode === 38 && keys.up === true){
        keys.up = false;
        gameState("interrogation")
    }
}

gameState("start");

function update() {
    initPack();
}
setInterval(update, 1000 / 30);