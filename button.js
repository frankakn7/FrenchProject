var Q1, Q2;

function button(x, y, width, height, text, person, img) {
    this.img = img;
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'black';
    this.text = text;
    this.lock = false;
    this.person = person;
	
    this.draw = function () {
	    if(img != undefined){
	        context.fillStyle = this.color;
	        context.clearRect(this.x, this.y, this.width, this.height);
	        context.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y, this.width, this.height);
		}else{
			context.fillStyle = this.color;
	        context.clearRect(this.x, this.y, this.width, this.height);
	        context.fillRect(this.x, this.y, this.width, this.height);
			
			if(text != false){
	        	context.fillStyle = 'white';
				context.fillText(this.text, this.x + 5, this.y + 35);
			}
		}
    }
    
    this.clickFunction = 0;
    
    this.onButton = function (mx, my, click) {
        if (mx >= this.x && mx <= this.x + this.width &&
			my >= this.y && my <= this.y + this.height && !this.lock) {
            if(!click){
                this.color = 'grey';
                this.draw();
            }else{
                if(click){
                    if(this.clickFunction === 0){
	                    console.warn("No function assigned to this button");
                    }else{
	                    this.clickFunction();
                    }	
                }
            }
        }else{
	        if(!this.lock){
            	this.color = 'black';
				this.draw();
			}else{
				this.draw();
			}
        }
    }
}
