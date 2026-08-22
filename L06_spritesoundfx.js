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
        x -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 2;
    }

    x = constrain(x, 50, 350 - 50);    // (value, min, max)
    y = constrain(y, 50, 350 - 50);    // (value, min, max)

    rect(x, y, 50, 50); // (x pos, y pos, width size, height size);
}

function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 2;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 2;
    }
}
