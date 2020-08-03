class Enemy {
    constructor(x, y) { //hiển thị tọa độ địch
        this.x = x;
        this.y = y;
        this.move = speed;
        this.image = new Image();
        this.image.src = "img/enemy1.png";
        this.creatEnemy = function () {
            this.y += this.move;
            ctx.drawImage(this.image, this.x, this.y, 70, 70);
        }
    }
}
function creatNewEnemy() {              //khởi tạo nhiều vị trí địch trên màn hình
    count++;
    let randomX = Math.floor(Math.random() * (750)) + 100;
    enemy[count] = new Enemy(randomX, -10);
}
