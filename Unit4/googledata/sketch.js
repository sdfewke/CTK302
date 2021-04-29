var bubbles = [];
let p1,p2;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '17gFfBL8NIR6DIRYRUfOTND7SFMwxi9RswZ5urGgQY4E'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  p1 = loadImage("assets/pancakes.png");
  p2 = loadImage("assets/waffle.png");

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Pick)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myPick) {
    this.name = myName;
    this.pick = myPick;
    this.pos = createVector(random(width), random(height));

  }


  display() {
    if (this.pick == "Pancakes") {
      image(p1, this.pos.x, this.pos.y, 50, 50);
    } else {
      image(p2, this.pos.x, this.pos.y, 50, 50);
    }

    text(this.name, this.pos.x, this.pos.y);
  }


}
