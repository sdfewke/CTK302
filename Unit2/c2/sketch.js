let state = 0;
var mic;
var vol;
let myTimer = 0;

function setup() {
  createCanvas(500, 500);

  textAlign(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel().toFixed(2));

  background(100);

  switch (state) {

    case 0:
    background('green');
      text("shhhh", width/2, height/2);
      if (vol > .05) {
        state = 1;
      }
      break;

    case 1:
    background('red');
      text("QUIET DOWN!!!", width/2, height/2);
      myTimer++
      if (myTimer > 5*60) {
        myTimer = 0;
        state = 0;
      }
      break;

  }
}
