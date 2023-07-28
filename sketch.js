let deg = 12;
let value = 0;

function setup() {
  createCanvas(400, 400);
  let onlyInSetup =5;
}

function draw() {
  background(0);
  fill(255,0,0);
  deg+=3;
  rotatingCiricle();

}

function rotatingCiricle() {
  push(); 
  translate (200,200);
  rotate (radians (deg));
  ellipse (0,0,170,170);
  // line(0, 20, 0, 0);
  pop(); 
  rotatingText();
}

function rotatingText() {
  
  push();
  fill(255);
    translate(170,170);
    rotate( radians(deg) );
    text("ROTATE ME", 40, 20);
	pop();
}


