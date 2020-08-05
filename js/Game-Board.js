class Crash {
    constructor(obj1, obj2) {
        this.left1 = obj1.x;
        this.right1 = obj1.x + 50;
        this.top1 = obj1.y;
        this.bottom1 = obj1.y + 50;
        this.left2 = obj2.x;
        this.right2 = obj2.x + 50;
        this.top2 = obj2.y;
        this.bottom2 = obj2.y + 50;

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
                enemy[i].image.src = "img/enemycrash.png";
                setTimeout(function () {
                    enemy[i].image.src = "img/enemy1.png";
                }, 70);
                soundkill.play();
                countHPEnemy--;
                bullet[j].y -= 8000
                if (countHPEnemy === 0) {
                    enemy[i].image.src = "img/boom.png";
                    setTimeout(function () {
                        enemy[i].y -= 800000;
                    }, 200);
                    bullet[j].y -= 8000;
                    score += 1;
                    soundGetScore.play();
                    remainPoint += 1;
                }

            } else if (crashPlane.isCrash()) {
                crashSuperman.play();
                countHPSuperman--;
                enemy[i].y -= 800000;
                plane.image.src = "img/HP.png";
                setTimeout(function () {
                    plane.image.src = "img/plane.png";
                }, 200);
                if (countHPSuperman === 0) {
                    soundLose.play();
                    nhacnen.pause();
                    let status = window.confirm("YOU LOSE! Again?");
                    if (status) {
                        window.location.reload();
                        break;
                    }
                }
            }
            if (enemy[i].y > canvas.height) {
                lostPlaneAudio.play();
                enemy[i].x = -1000;
                enemy[i].y = -1000;
                lostPlane++;
            }

        }
    }
}

// function checkItems() {
//     for (let i = 0; i < items.length; i++) {
//             let crashItems = new Crash(plane, items[i]);
//             if (crashItems.isCrash()) {
//                 setTimeout(function () {
//                     ping3 = setInterval(creatNewBullet, 50);}, 200);
//             }
//         }
// }
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