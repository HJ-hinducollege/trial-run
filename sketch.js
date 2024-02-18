
let colorlist = ['blue', '#03FF0D', 'rgb(255,10,10)', ]

function setup() {
  createCanvas(windowWidth,windowHeight);
  //background(230);
 background("#000000"); 
}

function draw() {
  noStroke()
  //stroke(255);


  fill(random(colorlist));
  ellipse(mouseX, mouseY, 80,80 );
  //rect( mouseX, mouseY, random (20,80) );
  //rect( mouseX, mouseY, 80,80 );
  textSize(40);
  text("ERROR: YOUR PRIVACY DOESN'T EXIST",width/2.3,height/2.3,)

  
}