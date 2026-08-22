let x = 100;
let y = 100;
let direction = "up";

function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    background(220);

    if (keyIsDown(UP_ARROW)) {
        y -= 2;
        direction = "up";
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 2;
        direction = "down";
    }

    
    y = constrain(y, 0, height);    // (value, min, max)

    rect()
}

function keyPressed() {

}
