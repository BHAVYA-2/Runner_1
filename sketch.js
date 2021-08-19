var Runner_1,Runner_2;
var path,pathAnimation;

function preload(){

  //pre-load images
    pathImage = loadImage("path.png");
    Runner = loadAnimation("Runner-2.png","Runner-1.png");
}  

function setup(){
  createCanvas(400,400);
  
 //create a path sprite
  path = createSprite(200,200);
  path.addAnimation("pathImage","path.png");
  path.scale=1.2;
  path.velocityY = 4;
  //create a Runner sprite
  Runner = createSprite(310,360,20,50);
  Runner.addAnimation("Runner-1.png","Runner-2.png");
  Runner.scale=0.05;
 
}

function draw() {
  background(220);

  if(path.y > 400){
    path.y = path.height/2;
  }
Runner.x=World.mouseX;
if(Runner.x<-200){
  Runner.x = 250;
}

  drawSprites();
}
