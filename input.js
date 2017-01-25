var mouseX, mouseY;
var click = false;
var push = false;

//mouse
function listen() {
    canv.addEventListener('mousemove', function (evt) {
        mouseX = evt.offsetX;
        mouseY = evt.offsetY;
        /*
        if (evt.offsetX) {
            mouseX = evt.offsetX;
            mouseY = evt.offsetY;
        }
        */
    });
    canv.addEventListener('mousedown', function (evt) {
        if (evt.button === 0) {
            push = true;
        }
    });
    canv.addEventListener('mouseup', function (evt) {
        if (evt.button === 0) {
            push = false;
            click = true;
        }
    });
}
    function initPack() {
        sButton.onButton(mouseX, mouseY, click);
        Q1.onButton(mouseX, mouseY, click);
        Q2.onButton(mouseX, mouseY, click);
        Q3.onButton(mouseX, mouseY, click);
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
        gameState(end);
        keys.right = false;
    } else if (event.keyCode === 40 && keys.down === true) {
        for (var i = 0; i < 50; i++) {
            (function (a) {
                window.setTimeout(function () {
                    view.y += 10;
                    context.clearRect(0, 0, 500, 500);
                }, a * 10);
            }(i));
        }
        keys.down = false;
    } else if (event.keyCode === 37 && keys.left === true) {
        context.clearRect(0, 0, 500, 500);
        keys.left = false;
    } else if (event.keyCode === 38 && keys.up === true) {
        for (var i = 0; i < 50; i++) {
            (function (a) {
                window.setTimeout(function () {
                    view.y -= 10;
                    context.clearRect(0, 0, 500, 500);
                }, a * 10);
            }(i));
        }
        keys.up = false;
    }
}

function update() {
    initPack();
}
setInterval(update, 1000 / 30);

/*
(function (a) {
    window.setTimeout(function () {

    }, a * BulletDelay);
}(i));
*/