let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100) ;
textSize(random(50)) ;
text("Hello World", x, height/2) ;
x++ ;

if (x > width) {
  x = -100 ;
}

}
