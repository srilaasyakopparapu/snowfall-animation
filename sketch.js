var background, backgroundImage
var boy, boyImage
var boyBody

function preload(){
  backgroundImage = loadImage("snow2.jpg")
  boyImage = loadImage("boy.png")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(backgroundImage); 
  boy = createSprite(400, 350, 20, 20)
  boy.addImage(boyImage)
  boy.scale = 0.1;

  boy.x = boyBody.position.x
  boy.y = boyBody.position.y 
  if(keyDown("right_arrow")){
    boy.x = boy.x + 3
  }
  if(keyDown("left_arrow")){
    boy.x = boy.x + 3
  }
  

  drawSprites();
}