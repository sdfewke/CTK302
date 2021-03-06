let numberOfTouches ;
let p1, p2, p3;

function setup() {
  createCanvas(windowHeight, windowWidth);

  p1 = loadImage("assets/silvernobackground.png");
  p2 = loadImage("assets/silvernobackgroundAC.png");
  p3 = loadImage("assets/goldnobackground.png");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
      image(p1, width/2, height/2, windowWidth/2, windowHeight/2);
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
      image(p2, width/2, height/2, windowWidth/2, windowHeight/2);
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
      image(p3, width/2, height/2, windowWidth/2, windowHeight/2);
      break ;


  }

}
