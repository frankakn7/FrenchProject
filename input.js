var mouseX, mouseY;
var click = false;
var push = false;

//mouse
function listen() {
    canv.addEventListener('mousemove', function (evt) {
        mouseX = evt.offsetX;
        mouseY = evt.offsetY;
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
    P1.select(mouseX, mouseY, click);
    P2.select(mouseX, mouseY, click);
    P3.select(mouseX, mouseY, click);
    click = false;
}
listen();

function moveScreen(dir, axis) {
    view.lock = true;
    for (var i = 0; i < 45; i++) {
        (function (a) {
            window.setTimeout(function () {
                if (axis === 'y') {
                    view.y += dir;
                } else {
                    follow = false;
                    view.x += dir;
                }
                context.clearRect(0, 0, 500, 500);
                P1.draw();
                P2.draw();
                P3.draw();
                Q1.color = 'grey';
                Q2.color = 'grey';
                Q1.draw();
                Q2.draw();
            }, a * 10);
        }(i));
    }
    follow = true;
    view.lock = false;
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
    if (event.keyCode === 39 && keys.right === true) {
        if (view.pos === 1) {
            moveScreen(-10, 'x');
            view.pos = 1.5;
        } else if (view.pos === 2) {
            moveScreen(-10, 'x');
            view.pos = 2.5;
        }
        keys.right = false;
    } else if (event.keyCode === 40 && keys.down === true) {
        if (view.pos === 1) {
            view.pos = 2;
            moveScreen(-10, 'y');
        }
        keys.down = false;
    } else if (event.keyCode === 37 && keys.left === true) {
        if (view.pos === 1.5) {
            moveScreen(10, 'x');
            view.pos = 1;
        } else if (view.pos === 2.5) {
            moveScreen(10, 'x');
            view.pos = 2;
        }
        keys.left = false;
    } else if (event.keyCode === 38 && keys.up === true) {
        if (view.pos === 2) {
            moveScreen(10, 'y');
            view.pos = 1;
        }
        keys.up = false;
    }
}

function update() {
    initPack();
    if (view.lock) {
        Q1.lock = true;
        Q2.lock = true;
    } else {
        Q1.lock = false;
        Q2.lock = false;
    }
}
setInterval(update, 1000 / 30);

/*
(function (a) {
    window.setTimeout(function () {

    }, a * BulletDelay);
}(i));
*/