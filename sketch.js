var spacecraft,sImg;
var asteroids,aImg;
var laser,lImg;
var bImg;

function preload(){
  sImg=loadImage("images/spacecraft.png");
  aImg=loadImage("images/asteroid.jpg");
  lImg=loadImage("images/laser.png");
  bImg=loadImage("images/back.jpg");
}
function setup() {
  createCanvas(800,600);

  spacecraft=createSprite(400, 500, 50, 50);
  spacecraft.addImage("space",sImg);
  spacecraft.scale=0.1;
}

function draw() {
  background(bImg); 
  if(keyDown("left")){
    spacecraft.x=spacecraft.x-5;
  }
  if(keyDown("right")){
    spacecraft.x=spacecraft.x+5;
  }
  spawnAsteroids();
  spawnLasers();

  drawSprites();
}

function spawnAsteroids(){
  if(frameCount%150===0){
   asteroids=createSprite(400,-10,50,50);
   asteroids.addImage("asteroid",aImg);
   asteroids.scale=0.07
   asteroids.velocityY=1;
   asteroids.depth=spacecraft.depth-1;
   asteroids.x=Math.round(random(0,800));
   asteroids.lifetime=800;
  }
}
function spawnLasers(){
  if(frameCount%10===0){
    laser=createSprite(400,500,50,50);
    laser.addImage("laser",lImg);
    laser.scale=0.1;
    laser.depth=spacecraft.depth-2
    laser.lifetime=800;
    laser.x=spacecraft.x;
  }
  if(keyDown("space")){
    laser.velocityY=laser.velocityY-3;
  }
}