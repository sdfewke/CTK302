function setup() {
  createCanvas(900, 500);
  textAlign(CENTER);
  noStroke()
}

function draw() {
  background('#89cff0');
  fill('white')
  textSize(18);
  text("Sharama is a half shark half llama hybrid with the power to destroy entire planets whenever it sneezes", 450, 150)

  fill('blue')
  rect(0, 200, 900, 400)

  fill('yellow')
  ellipse(0, 0, 200, 200)

  fill('#d4d4d4')
  ellipse(200, 0, 75, 75)

  fill('grey')
  ellipse(250, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(300, 0, 75, 75)

  fill('grey')
  ellipse(500, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(550, 0, 75, 75)

  fill('grey')
  ellipse(600, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(650, 0, 75, 75)

  fill('grey')
  ellipse(700, 0, 75, 75)

  fill('#f0dd97')
  quad(650, 400, 750, 250, 900, 200, 900, 500)

  fill('green')
  quad(750, 400, 800, 300, 900, 250, 900, 450)

  fill('navy')
  ellipse(325, 350, 300, 30)

  fill('grey')
  triangle(350, 350, 350, 300, 400, 350)

  push()
    fill('grey')
  translate(-25, 0)
  triangle(250, 350, 250, 320, 275, 350)
  pop()

  if (mouseIsPressed) {

  background('black');


  textSize(18);
  text("This being is so powerful some have even labeled it as their god", 450, 150)

  fill('blue')
  rect(0, 200, 900, 400)

  fill('white')
  ellipse(0, 0, 200, 200)

  fill('#d4d4d4')
  ellipse(20, 20, 15, 15)

      fill('#d4d4d4')
  ellipse(25, 70, 30, 30)

    fill('#d4d4d4')
  ellipse(50, 50, 10, 10)

  fill('#d4d4d4')
  ellipse(200, 0, 75, 75)

  fill('grey')
  ellipse(250, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(300, 0, 75, 75)

  fill('grey')
  ellipse(500, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(550, 0, 75, 75)

  fill('grey')
  ellipse(600, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(650, 0, 75, 75)

  fill('grey')
  ellipse(700, 0, 75, 75)

  fill('#f0dd97')
  quad(250, 400, 350, 250, 500, 200, 500, 500)
  rect(500, 200, 500, 450)

  fill('green')
  quad(350, 400, 400, 300, 500, 250, 500, 450)
  rect(500, 250, 500, 200)

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
  else {
      fill('blue')
  rect(0, 200, 900, 400)

  fill('yellow')
  ellipse(0, 0, 200, 200)

  fill('#d4d4d4')
  ellipse(200, 0, 75, 75)

  fill('grey')
  ellipse(250, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(300, 0, 75, 75)

  fill('grey')
  ellipse(500, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(550, 0, 75, 75)

  fill('grey')
  ellipse(600, 0, 75, 75)

  fill('#d4d4d4')
  ellipse(650, 0, 75, 75)

  fill('grey')
  ellipse(700, 0, 75, 75)

  fill('#f0dd97')
  quad(650, 400, 750, 250, 900, 200, 900, 500)

  fill('green')
  quad(750, 400, 800, 300, 900, 250, 900, 450)

  fill('navy')
  ellipse(325, 350, 300, 30)

  fill('grey')
  triangle(350, 350, 350, 300, 400, 350)

  push()
    fill('grey')
  translate(-25, 0)
  triangle(250, 350, 250, 320, 275, 350)
  pop()
  }
}
