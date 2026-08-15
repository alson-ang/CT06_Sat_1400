function setup() {
    createCanvas(200,200);
    background(220);
}

function draw() {
    background(220);

    circle(100, 100, 50);
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
    } else if (mouseX )
}