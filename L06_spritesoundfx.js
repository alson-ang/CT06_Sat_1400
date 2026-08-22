let soundEffect, bgMusic, staticImage;
let staticImageX = 100, staticImageY = 280;
let staticSpeed = 5; // Speed of static image movement

function preload() {
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/BossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(600, 400);
    bgMusic.loop(); // Play background music in a loop. 
}

function draw() {
    background("lightblue");
    
    // Move the static image left and right
    if (keyIsDown(LEFT_ARROW)) {
        staticImageX -= staticSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        staticImageX += staticSpeed;
    }
    
    // Constrain static image within canvas boundaries
    staticImageX = constrain(staticImageX, 0, width - 100);
    
    // Draw the static image
    image(staticImage, staticImageX, staticImageY, 100, 100); // Display static image
}

function keyPressed() {
    if (keyCode === 32) { // Spacebar to trigger sound effect
        soundEffect.play();
    }
}