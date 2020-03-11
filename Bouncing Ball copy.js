var ball = {
    x: 200,
    y: 200,
    xspeed: 4,
    yspeed: -3,
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    if (mouseIsPressed)
        background(255)
    move();
    bounce();
    display();
}


function move() {
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;

}

function bounce() {
    if (ball.y > width || ball.y < 0) {
        ball.yspeed = ball.yspeed * -1;
    }
    if (ball.x > width || ball.x < 0) {
        ball.xspeed = ball.xspeed * -1;
    }
}

function display() {
    fill(255);
    if (mouseIsPressed)
        fill(0)
    ellipse(ball.x, ball.y, 24, 24);

}
