let f1, f2 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  f1 = loadFont("assets/Pacifico.ttf");
  f2 = loadFont("assets/Amatic.ttf");
}

function draw() {
background(100);
textSize(100);

textFont(f1);
text("hello", width/2, height/2);
textFont(f2, 50);
text("World", width/2, height/2 + 50);
}
