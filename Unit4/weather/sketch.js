// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;


function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Austin,TX,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=a44bb01209d271ed5c1d326a12e28c0e'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  description = weather.weather[0].description;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("Windspeed is " + windspeed, 20, 40);
      text("Temperature is " + temperature, 20, 60);
      text("Humidity is " + humidity, 20, 80);
      text("Description is " + description, 20, 100);

      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      ellipse(x+10, 200, 170, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > 500) x = -100;

      break;

  }
}
