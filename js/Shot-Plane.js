class Plane {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "../img/tauta.jpg"
        this.creatPlane = function (){
            ctx.drawImage(this.image, this.x, this.y, 200, 150);
        }

    }

}
let PlaneRoi = function (x, y){
    this.x = x;
    this.y = y;
    this.dy = speed;
    this.isExit = true;
    this.countAlready = false;
    this.image = new Image();
    this.image.src = "../img/tau.png";
    this.creatPlanRoi = function (){
        this.y += this.dy;
        ctx.drawImage(this.image, this.x, this.y, 30,100);
    }
    function StartGame(){
        let randomX= Math.floor(Math.random() * (700)) + 1;
        planeroi[count] = new PlaneRoi(randomX, -100);
        tauta = new Plane(300, 420);
        soundAll();
        timeID = setInterval(drawALL, 30);
        timeID2 = setInterval(creatNewPlaneRoi, 250);
    }
    function soundAll(){
        let soundrandom = Math.floor(Math.random() * (8)) + 1;
        nhacNen = new Audio("../audio/nhacnen.mp3");
        soundGetScore = new Audio("../audio/congdiem.wav");
    }
    function drawALL(){
        ctx.clearRect(0,0,800,585);
        for (let i = 0; i < planeroi.length; i++) {
            
        }
    }
}