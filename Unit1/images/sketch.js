let p1, p2, p3;

function setup() {
  createCanvas(800, 800);

  p1 = loadImage("assets/hockey.jpg");
  p2 = loadImage("assets/juice.jpg");
  p3 = loadImage("assets/pc.jpg");

  imageMode(CENTER);
}

function draw() {
background('white');

image(p1, width/2, height/2, 200, 200);
image(p2, width/2, height/2 - 200, 200, 200);
image(p3, width/2, height/2 + 200, 200, 200);

}
