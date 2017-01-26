function person(x, y, color) {
    this.x = x;
    this. y = y;
    this.color = color;
    this.width = 150;
    this.height = 370;
    this.lock = false;

    this.draw = function () {
        if (selected !== this.color) {
            context.clearRect(this.x + view.x, this.y + view.y, this.width + view.x, this.height + view.y);
            context.fillStyle = this.color;
            context.fillRect(this.x + view.x, this.y + view.y, this.width + view.x, this.height + view.y);
        } else {
            context.clearRect(this.x, this.y, this.width, this.height);
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    this.select = function (mx, my, click) {
        if (mx >= this.x + view.x && mx <= this.x + this.width + view.x &&
           my >= this.y + view.y && my <= this.y + this.height + view.y && !this.lock) {
            if (click && gState === inGame) {
                selected = this.color;
                console.log(this.color);
            }
        }
    }
}

P1 = new person(13, 10, 'red');
P2 = new person(175, 10, 'blue');
P3 = new person(337, 10, 'green');