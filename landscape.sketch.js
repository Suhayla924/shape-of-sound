let sound;
let amp;
let fft;

function preload() {
  sound = loadSound("assets/ach-island.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  amp = new p5.Amplitude();
  fft = new p5.FFT();

}

function draw() {
  background(255, 10);

  drawSun();
  drawHill();
  drawWater();

}

// function to start and pause the song
function mouseClicked() {
  if (sound.isPlaying()) {
    sound.pause();
    noLoop();
  } else {
    sound.play();
    loop();
  }
}

function drawHill() {
  //data from song stored in variables
  let level = amp.getLevel();
  let waveform = fft.waveform();
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length / 2; i++) {
    let x = map(i, 0, spectrum.length / 6, width / 4, width);
    let flippedX = map(i, 0, spectrum.length / 2, width / 2, 0);
    let size = map(spectrum[i], 0, 255, 0, height / 0.5 * 0.3);
    stroke(59,22,236);
    fill(172,156,245);
    rect(x, height - size, 2, size);
    rect(flippedX, height - size, 5, size);
  }

}

function drawWater() {
  //data from song stored in variables
  let level = amp.getLevel();
  let waveform = fft.waveform();
  let spectrum = fft.analyze();

  for (let i = 0; i < waveform.length; i++) {
    fill(195,255,247);
    stroke(141,255,229);

    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, height / 2);
    circle(x, y, 20);
  }


}

function drawSun() {

  //data from song stored in variables
  let level = amp.getLevel();
  let waveform = fft.waveform();
  let spectrum = fft.analyze();

  let size = map(level, 0, 1, 0, width * 0.5);
  stroke(245,156,230);
  fill(232,165,255);
  circle(width / 2, width / 4, size);

}
