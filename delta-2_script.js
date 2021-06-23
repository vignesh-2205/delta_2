var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var gravity = 1;
var playerY = 425;
const playerX = 50;
let rect_fh_x = 850;
let rect_fh_y = 500;
let rect_ch_x = 850
let rect_ch_y = 0;


function draw() {
    ctx.clearRect(0, 0, 1000, 600);
    gravity_effect();
    player_Generate();
    draw_floor_ceiling();
    draw_hole_ceiling();
    update();
    draw_hole_floor();



}
setInterval(draw, 10);
setInterval(holes, 11500);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function holes() {
    rect_fh_x = 1000;


}

function update() {
    rect_fh_x -= 1;
    rect_ch_x -= 1;

}

function draw_floor_ceiling() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 1000, 100);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 500, 1000, 100);
}


function draw_hole_floor() {
    ctx.fillStyle = '#eee';

    ctx.fillRect(rect_fh_x, rect_fh_y, 150, 100);
}

function draw_hole_ceiling() {
    ctx.fillStyle = '#eee';
    ctx.fillRect(rect_ch_x, rect_ch_y, 150, 100);
}

function player_Generate() {
    ctx.fillStyle = '#F000F0'
    ctx.fillRect(playerX, playerY, 80, 80);

}

function gravity_effect() {
    if (gravity == 1 && playerY < 425) {
        playerY += 6.5;

    }
    if (gravity == 0 && playerY > 100) {
        playerY -= 6.5;
    }
}
document.addEventListener("keydown", gravity_shift, false);

function gravity_shift(e) {
    if (e.code == "Space") {
        console.log(1);
        if (playerY == 425) {
            console.log(3);
            gravity = 0;
        }
        if (playerY == 100) {
            console.log(2);
            gravity = 1;
        }


    }
}