function button(x, y, width, height, text, state, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'black';
    this.text = text;
    this.lock = false;
    this.ctx = ctx;
    this.state = state;

    this.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.clearRect(this.x + view.x, this.y + view.y, this.width, this.height);
        this.ctx.fillRect(this.x + view.x, this.y + view.y, this.width, this.height);
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.text, this.x + 5 + view.x, this.y + 35 + view.y);
    }
    
    this.onButton = function (mx, my, click) {
        if (mx >= this.x + view.x && mx <= this.x + this.width + view.x &&
			my >= this.y + view.y && my <= this.y + this.height + view.y && !this.lock) {
            if (!click) {
                this.color = 'grey';
                this.draw();
            } else {
                if (click)
                    if (this.state === gState) {
                    console.log(this.text);
                    gameState(inGame);
                }
            }
        } else {
            if (!this.lock) {
                if (this.color !== 'black') {
                    this.color = 'black';
                    this.draw();
                }
            } else {
                if (this.color !== 'grey') {
                    this.color = 'grey';
                    this.draw();
                }
			}
        }
    }
}

var sButton = new button((sCanvas.width / 2) - 50, (sCanvas.height / 2) - 25, 100, 50, 'Start', start, sContext);
var Q1 = new button(5, 390 + 450, 490, 50, 'Q1', inGame, context);
var Q2 = new button(5, 445 + 450, 490, 50, 'Q2', inGame, context);
var Q3 = new button(5, 445, 490, 50, 'Q3', end, eContext);
sButton.draw();