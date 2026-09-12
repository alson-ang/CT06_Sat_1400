// Recap
let squareX = 300;
let squareY = 200;
let squareSpeed = 5;

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // Movement
    squareX += squareSpeed;

    // if square's x pos goes past right side
    if (squareX > width) {
        squareSpeed *= -1;
    }

    fill(255, 255, 0);
    rect(squareX, squareY, 100, 100); // (x pos, y pos, width, height)
}