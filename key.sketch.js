//code started off from Colorful Coding on youtube ---> https://www.youtube.com/watch?v=uk96O7N1Yo0
//store song in variable
var song;
//store fft object in this variable
var fft;
var s01, s02, s03, s04, s05;
let h;

function preload() {
  s01 = loadSound("assets/note.1.wav");
  s02 = loadSound("assets/note.2.wav");
  s03 = loadSound("assets/note.3.wav");
  s04 = loadSound("assets/note.4.wav");
  s05 = loadSound("assets/note.5.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  fft = new p5.FFT();
}

function draw() {
  background(0);
  // variable to store waveform data
  stroke(255);
  var wave = fft.waveform();

  drawTopLine();

  drawTopMidLine();

  drawCenterLine();

  drawMidLine();

  drawBottomLine();
}

//keys cliked to make noise
function keyTyped() {
  if (key == "a") {
    s01.play();
  }
  if (key == "s") {
    s02.play();
  }
  if (key == "d") {
    s03.play();
  }
  if (key == "f") {
    s04.play();
  }
  if (key == "g") {
    s05.play();
  }
}

function drawTopLine() {
  stroke(9,9,90);
  // variable to store waveform data
  var wave = fft.waveform();
  //for loop that draws data as a wave scross canvas
  beginShape();
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));

    var x = i;
    var y = wave[index] * 300 + height / 6;
    vertex(x, y);
  }
  endShape();
}

function drawTopMidLine() {
  // variable to store waveform data
  var wave = fft.waveform();
  //for loop that draws data as a wave scross canvas
  beginShape();
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));

    var x = i;
    var y = wave[index] * 300 + height / 1.6;
    vertex(x, y);
  }
  endShape();
}

function drawCenterLine() {
  // variable to store waveform data
  var wave = fft.waveform();
  //for loop that draws data as a wave scross canvas
  beginShape();
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));

    var x = i;
    var y = wave[index] * 450 + height / 2.1;
    vertex(x, y);
  }
  endShape();
}

function drawMidLine() {
  // variable to store waveform data
  var wave = fft.waveform();
  //for loop that draws data as a wave scross canvas
  beginShape();
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));

    var x = i;
    var y = wave[index] * 300 + height / 1.25;
    vertex(x, y);
  }
  endShape();
}

function drawBottomLine() {
  // variable to store waveform data
  var wave = fft.waveform();
  //for loop that draws data as a wave scross canvas
  beginShape();
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));

    var x = i;
    var y = wave[index] * 300 + height / 3;
    vertex(x, y);
  }
  endShape();
}
