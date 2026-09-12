// Recap
let squareX = 300;
let squareY = 200;
let squareSpeed = 5;

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // Reset canvas / clear screen
    background(220);

    // Movement
    // if square's x pos goes past right or left side
    if (squareX > width - 100 || squareX < 0) {
        // invert the speed to change directions
        squareSpeed *= -1;
    }

    squareX += squareSpeed;

    fill(255, 255, 0);
    rect(squareX, squareY, 100, 100); // (x pos, y pos, width, height)
}