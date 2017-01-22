var sCanvas = document.getElementById("startCanvas");
var sContext = sCanvas.getContext("2d");
var game = window;

function button(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'black';

    this.draw = function () {
        sContext.fillStyle = this.color;
        sContext.clearRect(this.x, this.y, this.width, this.height);
        sContext.fillRect(this.x, this.y, this.width, this.height);
    }

    this.onButton = function (mx, my, click) {
        if (mx >= this.x && mx <= this.x + this.width &&
			my >= this.y && my <= this.y + this.height && !click) {
            this.color = 'grey';
            this.draw();
            return true;
        } else {
            this.color = 'black';
            this.draw();
            return false;
        }
    }
}

var sButton = new button((sCanvas.width / 2) - 50, (sCanvas.height / 2) - 25, 100, 50);

sButton.draw();