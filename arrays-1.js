var shade = [10, 20, 45, 25, 60, 90, 140, 190, 200]
var x = 0;

function setup() {
  createCanvas(400, 400);
	
}

function draw() {
	colorMode(HSB);
  noStroke();
	for (i=0; i < shade.length; i++) {
  fill(shade[i], 100, 100);
  rect(i*width/shade.length+x, 0, width/shade.length+x, height);
	shade[shade.length-1] = mouseY;
		x=x-.1;
		if(x<0) {
			x=400;
		}
		
	}
	
}
function mouseClicked() {
	append(shade, random(0,360))
}
