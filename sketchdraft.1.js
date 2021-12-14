//code started off from Colorful Coding on youtube ---> https://www.youtube.com/watch?v=uk96O7N1Yo0
//store song in variable
var song;
//store fft object in this variable
var fft;

//load the song you want the visualizer to respond to.
function preload() {
  song = loadSound("follow-instr.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //change from RADIUS TO DEGREES
  angleMode(DEGREES);
  // fft short hand for fast fourier transform
  fft = new p5.FFT();
  console.log(fft);
}

function draw() {
  background(0);
  sphere(fft*.5);
  drawInnerCircle();
  drawOuterCircle();
  
}

// function to start and pause the song
function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
    noLoop();
  } else {
    song.play();
    loop();
  }
}

///store the code for circles in functions

function drawInnerCircle() {
  
  //stroke(182,55,66);
  //noFill();
  //move circle
  //translate(width / 2, height / 2);

  // variable to store waveform data
  var wave = fft.waveform();

  //create a for loop that runs the code twice to create a completed circle
  //second outter circle
  for (var u = -1; u <= 1; u += 2) {
    beginShape();
    for (var p = 0; p <= 180; p += 0.55) {
      var index2 = floor(map(p, 0, 180, 0, wave.length - 1));

      var r2 = map(wave[index2], -1, 1, 350, 45);

      var x2 = r2 * sin(p) * u;
      var y2 = r2 * cos(p);
     
    }
    endShape();
  }
}

function drawOuterCircle() {
  stroke(12,55,166);
  strokeWeight(4);
  //noFill();
  fill('rgba(0, 0, 255, 0.25)');
  //move circle
  //translate(width / 2, height / 2);

  // variable to store waveform data
  var wave = fft.waveform();

  //for loop that draws data as a wave across canvas
  //create a for loop that runs the code twice to create a completed circle
  for (var t = -1; t <= 1; t += 2) {
    beginShape();
    for (var i = 0; i <= 180; i += 0.5) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));

      var r = map(wave[index], -1, 1, 150, 850);

      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }
}
