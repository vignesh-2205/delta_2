var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let highscore_disp = document.getElementById("Highscore");
let score_disp = document.getElementById("Score");
var score = 0;
let start;
var gravity = 1;
var playerY = 425;
var ceiling_hole_size;
var floor_hole_size;
const playerX = 50;
let rect_fh_x = 1000;
let rect_fh_y = 500;
let rect_ch_x = 1600;
let rect_ch_y = 0;

var chole_spawntime = 750;
var fhole_spawntime = 750;
ceiling_hole_size = getRandomint(200, 501);
floor_hole_size = getRandomint(200, 501);



function draw() {
    ctx.clearRect(0, 0, 1000, 600);
    score_count();
    gravity_effect();
    player_Generate();
    draw_floor_ceiling();
    hole_initialize();
    draw_hole_ceiling();
    update();
    draw_hole_floor();
    lose_Condition();




}
var Interval = setInterval(draw, 10);

function startGm() {
    window.addEventListener('keyup', function() {
        start = 1;
    })
};


function getRandomint(min, max) {
    return Math.random() * (max - min) + min;
}

function score_count() {
    highscore = localStorage.getItem("hscore");
    if (score > highscore) {
        highscore = score;
    }
    highscore_disp.innerText = highscore;
    score_disp.innerText = score;
    score++;

}

function lose_Condition() {
    if (playerX + 60 >= rect_fh_x && playerX <= rect_fh_x + floor_hole_size && playerY == 425) {
        alert("GAME OVER!! SCORE: " + score);
        if (score > highscore) {
            highscore = score;
            highscore_disp.innerText = highscore;
            localStorage.setItem("hscore", highscore);
        }
        document.location.reload();
        clearInterval(Interval);
    }
    if (playerX + 60 >= rect_ch_x && playerX <= rect_ch_x + ceiling_hole_size && playerY == 100) {
        alert("GAME OVER!! SCORE: " + score);
        if (score > highscore) {
            highscore = score;
            highscore_disp.innerText = highscore;
            localStorage.setItem("hscore", highscore);
        }
        document.location.reload();
        clearInterval(Interval);
    }
}


function hole_initialize() {
    fhole_spawntime--;
    if (fhole_spawntime <= 0) {
        rect_fh_x = 1000;
        floor_hole_size = getRandomint(200, 501);
        fhole_spawntime = 750;
    }
    if (fhole_spawntime <= 375 || chole_spawntime < 750) {
        chole_spawntime--;


    }
    if (chole_spawntime <= 0) {
        rect_ch_x = 1000;
        ceiling_hole_size = getRandomint(200, 501);
        chole_spawntime = 750;

    }
}

function holes_floor() {
    rect_fh_x = 1000;
    floor_hole_size = getRandomint(200, 501);
}

function holes_ceiling() {
    rect_ch_x = 1000;
    ceiling_hole_size = getRandomint(200, 501);
}


function update() {
    rect_fh_x -= 2;
    rect_ch_x -= 2;

}

function draw_floor_ceiling() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 1000, 100);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 500, 1000, 100);
}


function draw_hole_floor() {
    ctx.fillStyle = '#eee';

    ctx.fillRect(rect_fh_x, rect_fh_y, floor_hole_size, 100);
}

function draw_hole_ceiling() {
    ctx.fillStyle = '#eee';
    ctx.fillRect(rect_ch_x, rect_ch_y, ceiling_hole_size, 100);
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

        if (playerY == 425) {

            gravity = 0;
        }
        if (playerY == 100) {

            gravity = 1;
        }


    }
}