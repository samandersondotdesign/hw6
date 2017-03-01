var invaderSpeed = 1.25;
var invaders = [
	{ x: 80,
	  y: 30,
	  w: 30,
	  h: 10
	},
	{ x: 235,
	  y: 45,
	  w: 30,
		h: 10
	},
];
var playerX = 200;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
	for (var i = 0; i < invaders.length; i += 1) {
		paintInvader(invaders[i]);
	}
	paintPlayer(playerX);
}
	
function paintInvader(invader) {
	rect(invader.x, invader.y, invader.w, invader.h);
	invader.x+=invaderSpeed;
	if (invader.x > 380) {
		invaderSpeed*=(-1);
		invader.y+=random(-10,10);
	}
	if (invader.x < 0) {
		invaderSpeed*=(-1);
		invader.y+=10;
	}
	
}

function paintPlayer(position) {
	triangle(position-10, height-20,
					 position+10, height-20,
					 position, height-60);
}
