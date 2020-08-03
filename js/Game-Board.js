class Crash {
    constructor(obj1, obj2) {
        this.left1 = obj1.x;
        this.right1 = obj1.x + 70;
        this.top1 = obj1.y;
        this.bottom1 = obj1.y + 70;
        this.left2 = obj2.x;
        this.right2 = obj2.x + 70;
        this.top2 = obj2.y;
        this.bottom2 = obj2.y + 70;

    }

    isCrash() {
        return !(this.bottom2 < this.top1 || this.left2 > this.right1 || this.top2 > this.bottom1 || this.right2 < this.left1);
    }
}

function checkPoint() {
    for (let i = 0; i < enemy.length; i++) {
        for (let j = 0; j < bullet.length; j++) {
            let crash = new Crash(bullet[j], enemy[i]);
            let crashPlane = new Crash(plane, enemy[i]);
            if (crash.isCrash()) {
                enemy[i].y += 8000;
                bullet[j].y -= 8000;
                score += 1;
                soundGetScore.play();
                remainPoint += 1;
            } else if (crashPlane.isCrash()) {
                soundLose.play();
                nhacnen.pause();
                clearInterval(ping1);
                clearInterval(ping2);
                clearInterval(ping3);
                let status = window.confirm("YOU LOSE! Again?");
                if (status) {
                    window.location.reload();
                    break;
                }
            } else if (enemy[i] > 580){
                crashPlane++;
            }
        }
    }
}

function endGame(lost) {
    if (lost === 20) {
        soundLose.play();
        clearInterval(ping1);
        clearInterval(ping2);
        clearInterval(ping3);
        let thongBao = window.confirm("YOU LOSE! Again?");
        if (thongBao) {
            window.location.reload();
        }
    }
}