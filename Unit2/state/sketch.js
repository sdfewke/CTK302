let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
    background('red');
    text("State 0", 100, 100);
    pattern(15, 1);
    break;

    case 1:
    background('orange');
    text("State 1", 100, 100);
    pattern(10, 20);
    break;

    case 2:
    background('yellow');
    text("State 2", 100, 100);
    pattern(50, 5);
    break;

    case 3:
    background('green');
    text("State 3", 100, 100);
    pattern(25, 25);
    break;

    case 4:
    background('blue');
    text("State 4", 100, 100);
    pattern(-2, 20);
    break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}

function pattern(p1, p2) {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      rect(i * 50 + 10, j * 50 + 10, p1, p2);
    }
  }
}
