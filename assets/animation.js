let canvas;
let context;
let screenH;
let screenW;
const stars = [];
const fps = 60;
const numStars = 500;
let animateInterval;

$('document').ready(function() {
  screenH = $(window).height();
  screenW = $(window).width();
  canvas = $('#space')[0];
  canvas.height = screenH;
  canvas.width = screenW;
  context = canvas.getContext('2d');

  for (let i = 0; i < numStars; i++) {
    const x = Math.round(Math.random() * screenW);
    const y = Math.round(Math.random() * screenH);
    const length = 1 + Math.random() * 1.5;
    const opacity = Math.random();
    const star = new Star(x, y, length, opacity);
    stars.push(star);
  }

  animate();
});

function animate() {
  context.clearRect(0, 0, screenW, screenH);

  for (let i = 0, len = stars.length; i < len; i++) {
    stars[i].draw(context);
  }

  requestAnimationFrame(animate);
}

function stopAnimation() {
  cancelAnimationFrame(animateInterval);
}

function Star(x, y, length, opacity) {
  this.x = parseInt(x);
  this.y = parseInt(y);
  this.length = parseInt(length);
  this.opacity = opacity;
  this.factor = 1;
  this.increment = Math.random() * .03;
}

Star.prototype.draw = function(context) {
  context.save();
  context.translate(this.x, this.y);

  if (this.opacity > 1) {
    this.factor = -1;
  } else if (this.opacity <= 0) {
    this.factor = 1;
    this.x = Math.round(Math.random() * screenW);
    this.y = Math.round(Math.random() * screenH);
  }

  this.opacity += this.increment * this.factor;

  context.beginPath();
  context.moveTo(0, this.length);

  for (let i = 5; i--;) {
    context.lineTo(0, this.length);
    context.translate(0, this.length);
    context.rotate((Math.PI * 2 / 10));
    context.lineTo(0, -this.length);
    context.translate(0, -this.length);
    context.rotate(-(Math.PI * 6 / 10));
  }

  context.closePath();

  context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
  context.shadowBlur = 5;
  context.shadowColor = '#fff';
  context.fill();

  context.restore();
};