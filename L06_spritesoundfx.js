let soundEffect, bgMusic, staticImage;
let x = 100, y = 280;
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
    
    // Movement
    if (keyIsDown(UP_ARROW)) {
        x -= staticSpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        x += staticSpeed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= staticSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += staticSpeed;
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