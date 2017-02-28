var sizes = [10, 27, 30, 13, 190, 180, 80, 80, 100, 40];

function setup() {
  createCanvas(1000, 300);
}

function draw() {
  noStroke();
	background(255);
  for (var i = 0; i < sizes.length; i += 1) {
    colorMode(HSB);
		fill(i*35,100,100);
    ellipse(i*110+50+x, height/2+v, sizes[i], sizes[i]);
		var x = random(-1,1);
		var v = random(1,2);
  }
}
