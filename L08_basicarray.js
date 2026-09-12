// Recap
let squareX = 300;
let squareY = 200;

function setup() {
    new Canvas(600, 400);
    background(220);
}

function draw() {
    // Movement
    squareX += 5;

    fill(255, 255, 0);
    rect(squareX, squareY, 100, 100); // (x pos, y pos, width, height)
}