var Q1, Q2;

function button(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'black';
    this.text = text;
    this.lock = false;

    this.draw = function () {
	    if(this.lock){
		    context.clearRect(this.x, this.y, this.width, this.height);
	    }else{
	        context.fillStyle = this.color;
	        context.clearRect(this.x, this.y, this.width, this.height);
	        context.fillRect(this.x, this.y, this.width, this.height);
	        context.fillStyle = 'white';
	        context.fillText(this.text, this.x + 5, this.y + 35);
		}
    }
    
    this.clickFunction = 0;
    
    this.onButton = function (mx, my, click) {
        if (mx >= this.x && mx <= this.x + this.width &&
			my >= this.y && my <= this.y + this.height && !this.lock) {
            if (!click) {
                this.color = 'grey';
                this.draw();
            } else {
                if(click){
                	console.log(this.text);
                    this.clickFunction();
                }
            }
        } else {
	        if(!this.lock){
            	this.color = 'black';
				this.draw();
			}else{
				this.draw();
			}
        }
    }
}
var sButton = new button((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50, 'Start'); 
sButton.clickFunction = function(){	
	gameState(inGame,"gameCanvas");
};
sButton.draw();