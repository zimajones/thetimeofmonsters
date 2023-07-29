let s = 'I need money';
let v = 'Can I kiss you?';
let k = 'Once I do this...';
let j = 'We have to have sex';
let d = 'When will I hoop again?';



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  words();

}





function words() {
  push()
  let word1;
  fill(255);
  textAlign(CENTER);
  translate(width/2, height/2);
  translate(p5.Vector.fromAngle(millis() / 500, 80));
  word1 = text(s, width/15, height/15);
  pop()

  push()
  let word2;
  fill(255);
  textAlign(CENTER);
  translate(width/2, height/2);
  translate(p5.Vector.fromAngle(millis() / 700, 80));
  word2 = text(v, width/40, height/40);
  pop()

  push()
  let word3;
  fill(255);
  textAlign(CENTER);
  translate(width/2, height/2);
  translate(p5.Vector.fromAngle(millis() / 400, 80));
  word3 = text(k, width/10, height/10);
  pop()

  push()
  let word4;
  fill(255);
  textAlign(CENTER);
  translate(width/2, height/2);
  translate(p5.Vector.fromAngle(millis() / 600, 80));
  word4 = text(j, width/10, height/10);
  pop()

  push()
  let word5;
  fill(255);
  textAlign(CENTER);
  translate(width/2, height/2);
  translate(p5.Vector.fromAngle(millis() / 800, 80));
  word5 = text(d, width/10, height/10);
  pop()



 
}




