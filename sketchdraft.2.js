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

  // fft short hand for fast fourier transform
  fft = new p5.FFT();
}

function draw() {
  background(0);
  //color of wave
  stroke(255);
  noFill();

  // variable to store waveform data
  var wave = fft.waveform();

  //for loop that draws data as a wave scross canvas
  beginShape();
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));

    var x = i;
    var y = wave[index] * 300 + height / 2;
    vertex(x, y);
  }
  endShape();
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
