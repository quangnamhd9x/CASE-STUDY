class Bullet {
    constructor(x, y) {              // tạo tọa độ đạn
        this.x = x;
        this.y = y;
        this.move = speed + 20;
        this.image = new Image();
        this.image.src = "img/bullet.png";
        this.creatBullet = function () {
            this.y -= this.move;
            ctx.drawImage(this.image, this.x, this.y, 50, 60);
        }
    }
}
function creatNewBullet() {             // tạo nhiều đạn trên màn hình
    soundBullet.play();
    countBullet++;
    bullet[countBullet] = new Bullet(plane.x + 19, plane.y - 50);
}
