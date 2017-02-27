function setup() { 
  createCanvas(400, 400);
	background(255);
	stroke('rgba(0,0,0,0.14)');
}

function draw() {
	var r = random(0,400);
	var c = random(0,400);
	var b = random(0,400);
	var q = random(0,400);
	for (v = 0; v <= 10; v+=10) {
		line (r,c,b,q);
	}
} 
