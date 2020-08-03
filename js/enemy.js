class Enemy {
    constructor(x, y) { //hiển thị tọa độ địch
        this.x = x;
        this.y = y;
        this.move = speed;
        this.isExist = true;
        this.countAlready = false;
        this.image = new Image();
        this.image.src = "img/enemy1.png";
        this.creatEnemy = function () {
            this.y += this.move;
            ctx.drawImage(this.image, this.x, this.y, 70, 70);
        }

    }
}