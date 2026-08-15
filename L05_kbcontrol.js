let x = 0;

function setup() {
    createCanvas(200,200);
    background(220);
}

function draw() {
    background(220);

    circle(x, 100, 50);

    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }

    if (x < 25) {
        
    }
}

function keyPressed() {
    if (key === "w") {
        fill("white");
    } else if (key === "r") {
        fill("red");
    } else if (key === "g") {
        fill("green");
    } else {
        fill("yellow");
    }
}

function mouseMoved() {
    if (mouseX < 75) {
        fill("red");
    } else if (mouseX >= 75 && mouseX < 125) {
        fill("green");
    } else if (mouseX >= 125) {
        fill("blue");
    }
}