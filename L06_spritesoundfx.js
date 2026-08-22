let soundEffect, bgMusic, staticImage;
let x = 100, y = 280;
let speed = 5;

function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(600, 400);
    bgMusic.loop(); // Play background music in a loop. 
}

function draw() {
    background("lightblue");
    
    // Movement
    if (keyIsDown(UP_ARROW)) {
        y -= speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += speed;
    }
    
    // Constrain static image within canvas boundaries
    x = constrain(x, 0, width - 100);
    y = constrain(x, 0, width - 100);
    
    // Draw the static image
    image(staticImage, x, y, 100, 100); // Display static image
}

function keyPressed() {
    if (keyCode === 32) { // Spacebar to trigger sound effect
        soundEffect.play();
    }
}