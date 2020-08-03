class Bullet {
    constructor(x, y) {              // tạo tọa độ đạn
        this.x = x;
        this.y = y;
        this.move = speed + 20;
        this.image = new Image();
        this.image.src = "img/bullet.png";
        this.creatBullet = function () {
            this.y -= this.move;
            ctx.drawImage(this.image, this.x, this.y, 30, 60);
        }
        this.checkPoint = function (point) {            // đạn bắn trúng địch và cộng điểm
            if ((point.x > this.x && point.x + 100 < this.x + 200)
                && (point.y > this.y && point.y + 100 < this.y + 200)) {
                point.y += 8000;
                point.isExist = false;
                score += 1;
                soundGetScore.play();
                remainPoint += 1;

            }
            if (point.y > canvas.height && point.isExist && !point.countAlready) {
                lostPlane++;
                point.countAlready = true;
            }
        }
    }
}
