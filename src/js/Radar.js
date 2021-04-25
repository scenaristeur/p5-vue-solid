let p5;
let delegate;

export function main(_p5) {
  p5 = _p5

  //const script = function (p5) {
  var speed = 2;
  var posX = 0;

  // NOTE: Set up is here
  p5.setup = function() {
    // p5.createCanvas(500, 500);
    var canvas = p5.createCanvas(500, 500)
    canvas.parent("p5Canvas");
    p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);

console.log(this.store)


  }       // NOTE: Draw is here
  p5.draw = function() {
    p5.background(0);
    const degree = p5.frameCount * 3;
    const y = p5.sin(p5.radians(degree)) * 50;

    p5.push();
    p5.translate(0, p5.height / 2);
    p5.ellipse(posX, y, 50, 50);
    p5.pop();   posX += speed;

    if (posX > p5.width || posX < 0) {
      speed *= -1;
    }
    notifyCurrentTime();
  }
}
export function setDelegate(_delegate) {
  delegate = _delegate;
}

function notifyCurrentTime() {
  if (delegate !== undefined) {
    const message = p5.hour() + ":" + p5.minute() + ":" + p5.second();

    delegate(message);
  }
}
