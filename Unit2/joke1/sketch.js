let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch (state) {
    case 0:
    background('red');
    text("Did you hear about the\nnew restaurant called Karma?", width/2, height/2);
    break;

    case 1:
    background('green');
    text("There's no menu...\nYou get what you deserve.", width/2, height/2);
    break;

}
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
