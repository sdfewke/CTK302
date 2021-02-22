let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100) ;

noStroke() ;

push() ;
translate(x, 0) ;
avatar() ;
pop() ;

x += 10 ;

if (x > width) {
  x = -700 ;
}
}

function avatar() {
  fill('white')
  fill(255)
  ellipse(750, 230, 10, 20)
  fill(240)
  ellipse(580, 390, 25, 75)
  ellipse(600, 390, 25, 75)
  ellipse(700, 390, 25, 75)
  fill(240)
  ellipse(720, 390, 25, 75)
  ellipse(740, 280, 50, 100)
  ellipse(760, 250, 60, 35)
  fill(255)
  ellipse(725, 230, 10, 20)
  fill(240)
  ellipse(725, 230, 5, 10)
  ellipse(750, 230, 5, 10)
  ellipse(760, 250, 50, 25)
  fill(0)
  ellipse(740, 240, 5, 5)
  ellipse(750, 238, 5, 5)
  ellipse(780, 250, 10, 10)
  fill('grey')
  triangle(565, 300, 565, 350, 450, 325)
  triangle(450, 325, 440, 390, 470, 325)
  triangle(450, 325, 440, 260, 470, 325)
  fill('white')
  ellipse(650, 325, 200, 100)



  push()
    fill('grey')
  translate(270, -60)
  triangle(350, 350, 350, 300, 400, 350)
  pop()
}
