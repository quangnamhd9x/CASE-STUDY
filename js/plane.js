class Plane {
    constructor(x, y) {      // tọa độ máy bay
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "img/plane.png";
        this.creatPlane = function () {
            ctx.drawImage(this.image, this.x, this.y, 70, 70);
        }
        this.checkLose = function (lose) {          // check va chạm máy bay và địch rồi gameover
            if ((lose.x > this.x && lose.x + 10 < this.x + 60)
                && (lose.y > this.y && lose.y + 50 < this.y + 60)) {
                lose.y += 800;
                lose.isExist = false;
                nhacnen.pause();
                soundLose.play();
                clearInterval(ping1);
                clearInterval(ping2);
                clearInterval(ping3);
                status = window.confirm("YOU LOSE! Again?");
                if (status) {
                    window.location.reload();
                }
            }
        }
    }
}






