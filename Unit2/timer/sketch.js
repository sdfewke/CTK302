let myState = 0;
let myTimer = 0;
let f1, f2 ;

function setup() {
  createCanvas(500, 500);

    textAlign(CENTER);

  f1 = loadFont("assets/Pacifico.ttf");
  f2 = loadFont("assets/Amatic.ttf");
}

function draw() {

  switch(myState) {
    case 0:
    background('silver');
    textFont(f1, 50);
    text("have a", width/2, height/2);
    myTimer++;
    if (myTimer > 3*60) {
      myTimer = 0;
      myState = 1;
    }
    break;

    case 1:
    background('gold');
    textFont(f2, 50);
    text("great", width/2, height/2);
    myTimer++;
    if (myTimer > 4*60) {
      myTimer = 0;
      myState = 2;
    }
    break;

    case 2:
    background('red');
    textFont(f1);
    text("day!", width/2, height/2);
    myTimer++;
    if (myTimer > 2*60) {
      myTimer = 0;
      myState = 0;
    }
    break;
  }

}
