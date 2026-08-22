let x = 100;
let y = 100;

function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    // Reset drawing
    background(220);

    // Movement
    if (keyIsDown(UP_ARROW)) {
        y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 2;
    }
    if (keyIsDown(LEFT_ARROW)) {
        y -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        y += 2;
    }

    
    y = constrain(y, 0, height);    // (value, min, max)

    rect(x, y, 50, 50); // (x pos, y pos, width size, height size);
}

function keyPressed() {

}
