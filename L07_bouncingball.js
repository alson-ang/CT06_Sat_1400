// Recap 1
let picoImage;
let popSound;

let x = 0;
let y = 0;
let picoWidth = 100;

function preload() {
    picoImage = loadImage("assets/pico-a.png");
    popSound = loadSound("assets/pop.mp3");
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background("gray");

    // Movement
    if (keyIsDown(UP_ARROW)) {
        y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    // Constrain static image within canvas boundaries
    x = constrain(x, 0, width - 100);   // (variable, min, max)
    y = constrain(y, 0, height - 100);

    

    // Draw pico
    image(picoImage, x, y, 100, 100);  // (image, x pos, y pos, width, height)
}

function keyPressed() {
    // Spacebar to trigger sound effect
    if (key === " ") { 
        popSound.play();
    }
}