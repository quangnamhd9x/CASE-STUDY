class Plane {
    constructor(x, y) {      // tọa độ máy bay
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "img/plane.png";
        this.creatPlane = function () {
            ctx.drawImage(this.image, this.x, this.y, 70, 70);
        }
    }
}






