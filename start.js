var sCanvas = document.getElementById("startCanvas");
var sContext = sCanvas.getContext("2d");
sContext.font = '30px Arial';
var game = window;

function button(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'black';
    this.text = text;

    this.draw = function () {
        sContext.fillStyle = this.color;
        sContext.clearRect(this.x, this.y, this.width, this.height);
        sContext.fillRect(this.x, this.y, this.width, this.height);
        sContext.fillStyle = 'white';
        sContext.fillText(this.text, this.x + 5, this.y + 35);
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

var sButton = new button((sCanvas.width / 2) - 50, (sCanvas.height / 2) - 25, 100, 50, 'Start');

sButton.draw();