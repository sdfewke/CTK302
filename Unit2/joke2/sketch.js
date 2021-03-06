let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch (state) {
    case 0:
    background('Orange');
    text("What's the most used\nlanguage in programming?", width/2, height/2);
    break;

    case 1:
    background('Purple');
    text("Profanity.", width/2, height/2);
    break;

  }
timer++;
if (timer > 5*60) {
  timer = 0;
  state++;
  if (state > 1) {
    state = 0;
  }
}
}
