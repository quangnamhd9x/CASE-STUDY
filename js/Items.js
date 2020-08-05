class Items {
    constructor(x, y) { //hiển thị tọa độ địch
        this.x = x;
        this.y = y;
        this.move = speed;
        this.image = new Image();
        this.image.src = "img/gift.png";
        this.creatItems = function () {
            this.y += this.move;
            ctx.drawImage(this.image, this.x, this.y, 50, 50);
        }
    }

}
function creatNewItems() {              //khởi tạo nhiều vị trí địch trên màn hình
    countItems++;
    let randomX = Math.floor(Math.random() * (800)) + 100;
    items[countItems] = new Items(randomX, 10);
}
