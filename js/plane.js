let mang = 0;
let score = 0;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let enemy = [];
let bullet = [];
let plane;
let countbullet = 0;
let count = 0;
let nhacNen;
let soundGetScore;
let speed = 4;
let remainPoint = 0;
let ping1;
let ping2;
let ping3;
window.addEventListener("mousemove", moveMouse);

function moveMouse(event) {
    let canvas_x = event.pageX - 9;
    plane.x = canvas_x - 260;
}

function music() {
    nhacNen = new Audio("sound/nhacnen.mp3");
    soundGetScore = new Audio("sound/killer.mp3");
}

let Plane = function (x, y) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "img/plane.png";
    this.creatPlane = function () {
        ctx.drawImage(this.image, this.x, this.y, 70, 70);
    }
}
let Enemy = function (x, y) {
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

function creatNewEnemy() {
    count++;
    let randomX = Math.floor(Math.random() * (1000)) + 50;
    enemy[count] = new Enemy(randomX, -100);
}

let Bullet = function (x, y) {
    this.x = x;
    this.y = y;
    this.move = speed + 20;
    this.image = new Image();
    this.image.src = "img/bullet.png";
    this.creatBullet = function () {
        this.y -= this.move;
        ctx.drawImage(this.image, this.x, this.y, 30, 60);
    }
    this.checkPoint = function (point) {
        if ((point.x > this.x && point.x + 30 < this.x + 200)
            && (point.y + 100 > this.y && point.y < this.y + 150)) {
            point.y += 800;
            point.isExist = false;
            score += 1;
            remainPoint += 1;
            soundGetScore.play();
        }
        if (point.y > canvas.height && point.isExist && !point.countAlready) {
            mang++;
            point.countAlready = true;
        }
    }
}

function creatNewBullet() {
    countbullet++;
    bullet[countbullet] = new Bullet(plane.x + 20, plane.y);
}

function StartGame() {
    let randomX = Math.floor(Math.random() * (700)) + 1;
    enemy[count] = new Enemy(randomX, -100);
    bullet[countbullet] = new Bullet(randomX, +100);
    plane = new Plane(300, 500);
    music();
    ping1 = setInterval(drawALL, 30);
    ping2 = setInterval(creatNewEnemy, 1000);
    ping3 = setInterval(creatNewBullet, 100);
}

function drawALL() {
    ctx.clearRect(0, 0, 900, 585);
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].creatEnemy();
        bullet[bullet.length - 5].checkPoint(enemy[i]);
    }
    for (let j = 0; j < bullet.length; j++) {
        bullet[j].creatBullet();
    }
    if (remainPoint > 20) {
        speed += 3;
        remainPoint = 0;
    }
    plane.creatPlane();
    document.getElementById('score').innerHTML = "Tiêu diệt: " + score;
    document.getElementById('mang').innerHTML = "Vào trái đất: " + mang;
    nhacNen.play();
    endGame(mang);

    function endGame(tim) {
        if (tim === 20) {
            clearInterval(ping1);
            clearInterval(ping2);
            clearInterval(ping3);
            thongBao = window.confirm("YOU LOSE! Again?");
            if (thongBao) {
                window.location.reload();
            }
        }
    }
}