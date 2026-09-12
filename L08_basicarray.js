// Recap
let squareX = 300;
let squareY = 200;

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // Movement
    squareX += 5;

    // if square's x pos goes past left side
    if (squareX > width) {

    }

    fill(255, 255, 0);
    rect(squareX, squareY, 100, 100); // (x pos, y pos, width, height)
}