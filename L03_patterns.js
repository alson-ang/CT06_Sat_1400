function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  // circle(75, 200, 100);
  // circle(225, 200, 100);
  // circle(375, 200, 100);
  // circle(525, 200, 100);

  let num = 5;
  let a = 10;
  let b = 20;
  const pi = 3.14159;
  const gravity = 9.81;

  let one_word = 1; // Python: snake_case
  let oneWord = 2;  // JS: camelCase

  // for i in range(0, 10, 1):  // Python
  //   print(i); // 0 - 9

  // for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }
  // for (let i = 10; i >= 0; i--) {
  //   console.log(i);
  // }
  // Task 1: Colour Gradient
  for (let i = 0; i < 5; i++) {
    console.log(i);
    circle(75 + i * 50, 0 + i * 50, 100 + i * 20);
  }
  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}