function button(x, y, width, height, text, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'black';
    this.text = text;
    this.lock = false;
    this.ctx = ctx;

    this.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.text, this.x + 5, this.y + 35);

    }
    
    this.onButton = function (mx, my, click) {
        if (mx >= this.x && mx <= this.x + this.width &&
			my >= this.y && my <= this.y + this.height && !this.lock) {
            if (!click) {
                this.color = 'grey';
                this.draw();
            } else {
                if (click)
                    console.log(this.text);
                    gameState(inGame);
            }
        } else {
	        if(!this.lock){
            	this.color = 'black';
				this.draw();
			}else{
				this.color = 'grey';
				this.draw();
			}
        }
    }
}

var sButton = new button((sCanvas.width / 2) - 50, (sCanvas.height / 2) - 25, 100, 50, 'Start', sContext);
var Q1 = new button(5, 390, 490, 50, 'Q1', context);
var Q2 = new button(5, 445, 490, 50, 'Q2', context);
var Q3 = new button(5, 445, 490, 50, 'Q3', eContext);
sButton.draw();