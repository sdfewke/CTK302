var cars = [];
var player;
var currentScene = 0;
var timer = 0;
var isGameSet = false;

let music;
var cupcakeImage;
var mouthImage;
var backgroundImage;

function preload() {
  music = loadSound('assets/song.mp3');
  cupcakeImage = loadImage('assets/cupcake.png');
  mouthImage = loadImage('assets/mouth.png');
  backgroundImage = loadImage('assets/cafe.jpg');
}

function setup() {
  rectMode("center");
  createCanvas(displayWidth, displayHeight * .86);
}

function draw() {
  background('black');
  background(backgroundImage, 0);

  switch (currentScene) {
    case 0:
      buildText("NO MORE NOMS!", "You're on a diet! avoid the delicous treats! \n\n\n click to start");

      if (mouseIsPressed) {
        startGame();
      }
      break;
    case 1:
      manageMovement();

      timer -= 1 / 60;

      fill("white");
      stroke('black');
      strokeWeight(5);
      textSize(48);
      text("" + round(timer), 50, 50);
      if (timer <= 0) {
        currentScene = "win"
      }
      break;
    case "win":
      buildText("YOU DID IT!", "Your personal trainer won't kick your ass, bet you can't do it again!. \n\n\n click to play again");
      if (mouseIsPressed) {
        currentScene = 0;
        isGameSet = false;
      }
      break;

    case "lose":
      buildText("YOU THOUGHT I WOULDN'T \n SEE YOU EAT THAT CUPCAKE?", "\n\nI know it looked tasty, but your personal trainer is going to find out! \n\n\n click to restart");
      if (mouseIsPressed) {
        currentScene = 0;
        isGameSet = false;
      }
      break;
  }
}

function Player() {
  this.position = createVector(width / 2, height / 2);
  this.size = 60;
  this.speed = 10;

  this.update = function() {
    fill("white");
    this.velocity = createVector(0, 0);
    if (keyIsDown(LEFT_ARROW)) {
      this.velocity.x = -1 * this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.velocity.x = 1 * this.speed;
    }

    if (keyIsDown(UP_ARROW)) {
      this.velocity.y = -1 * this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.velocity.y = 1 * this.speed;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size / 2) {
      this.position.x = width + this.size / 2;
    } else if (this.position.x > width + this.size / 2) {
      this.position.x = 0 - this.size / 2;
    } else if (this.position.y < 0 - this.size / 2) {
      this.position.y = height + this.size / 2;
    } else if (this.position.y > height + this.size / 2) {
      this.position.y = 0 - this.size / 2;
    }

    image(mouthImage, this.position.x, this.position.y, this.size, this.size);
  }
}

function Car() {
  this.accelerant = 0;
  this.color = createVector(random(255), random(255), random(255));

  this.size = random(30, 70);
  this.position = createVector(random(5 + this.size / 2, width - 5 - this.size / 2), random(5 + this.size / 2, height - 5 - this.size / 2));
  this.velocity = createVector(random(-3, 3), random(-3, 3));


  this.update = function() {
    fill(this.color.x, this.color.y, this.color.z);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size / 2) {
      this.position.x = width + this.size / 2;
      this.velocity = createVector(random(-5 - this.accelerant, 5 + this.accelerant), random(-5 - this.accelerant, 5 + this.accelerant));
      this.accelerant += .3;
    } else if (this.position.x > width + this.size / 2) {
      this.position.x = 0 - this.size / 2;
      this.velocity = createVector(random(-5 - this.accelerant, 5 + this.accelerant), random(-5 - this.accelerant, 5 + this.accelerant));
      this.accelerant += .3;
    } else if (this.position.y < 0 - this.size / 2) {
      this.position.y = height + this.size / 2;
      this.velocity = createVector(random(-5 - this.accelerant, 5 + this.accelerant), random(-5 - this.accelerant, 5 + this.accelerant));
      this.accelerant += .3;
    } else if (this.position.y > height + this.size / 2) {
      this.position.y = 0 - this.size / 2;
      this.velocity = createVector(random(-5 - this.accelerant, 5 + this.accelerant), random(-5 - this.accelerant, 5 + this.accelerant));
      this.accelerant += .3;
    }
    if (this.accelerant >= 30 && random(100) > 90) {
      this.accelerant = 0;
    }
    image(cupcakeImage, this.position.x, this.position.y, this.size, this.size);
  }
}

function manageMovement() {
  player.update();

  for (var i = 0; i < cars.length; i++) {
    cars[i].update();

    if (cars[i].position.dist(player.position) < player.size * .5 + (cars[i].size * .6)) {
      currentScene = "lose";
    }
  }
}

function buildText(textTitle, textMessage) {
  fill("white");
  stroke("black");
  strokeWeight(5);
  textSize(90);
  textAlign(CENTER, CENTER);
  text(textTitle, width / 2, height / 3);
  textSize(48);
  text(textMessage, width / 2, height / 2, width / 2, height / 2);
}

function startGame() {
  if (!music.isPlaying()) {

    music.play();
  }
  cars = [];
  for (var i = 0; i < 25; i++) {
    cars.push(new Car());
  }
  player = new Player();
  isGameSet = true;
  timer = 30;
  currentScene++;
}
