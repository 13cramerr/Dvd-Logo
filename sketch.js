let x;
let y;

let xspeed;
let yspeed;

let logo;

let r, g, b;

function preload() {
  logo = loadImage("logo.png");
}

function setup() {
  createCanvas(800, 600);
  frameRate(20);
  x = 400;
  y = 300;
  xspeed = 10;
  yspeed = 10;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  // rect(x, y, 80, 60);
  tint(r, g, b);
  image(logo, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + logo.width >= width || x == 0) {
    xspeed = xspeed * -1;
    pickColor();
  }

  if (y + logo.height >= height || y == 0) {
    yspeed = yspeed * -1;
    pickColor();
  }
}