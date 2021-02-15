var mouse, mouseImg;
var edges;
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var timer=60;
var house,houseImg;
var eat,eatImg;
var foodgroup;
function setup() {
  createCanvas(800, 600);
  mouse = createSprite(50,550);
  mouse.scale=0.15;
  mouse.addImage("mouse.png",mouseImg);
foodgroup=new Group();
}
function preload() {
  mouseImg=loadImage("mouse.png");
  eatImg=loadImage("cheese.png");
  houseImg=loadImage("house.png");
}

function draw() {
  background(houseImg);
  drawSprites();
  if(gameState===PLAY){
    timer=timer-0.05;
    textSize(25);
    text("TIME REMANING:"+Math.round(timer),500,30);
    text("score= " + score,50,30);
      edges=createEdgeSprites();
  mouse.collide(edges);
    
if(keyDown("UP_ARROW")){
  mouse.velocityY=-8; 
}
  if(keyDown("DOWN_ARROW")){
  mouse.velocityY=8; 
}
   if(keyDown("LEFT_ARROW")){
  mouse.velocityX=-8; 
}
   if(keyDown("RIGHT_ARROW")){
  mouse.velocityX=8; 
}
   cheese();

  if(foodgroup.isTouching(mouse)){
foodgroup.destroyEach(); 
mouse.scale+=0.05; 
    score++;
   }
    if(timer<0){
    gameState=END;   
       }
     }
  if(gameState===END){
   
   mouse.velocityX = 0;
    mouse.velocityY = 0;
    foodgroup.destroyEach();
     
     }
  
 
}
function cheese() {
 if(frameCount%60===0){
    food = createSprite(random(50,750),600,5,5);
    food.y = random(10,580);
    food.addImage(eatImg);
   food.scale=0.1;
   food.lifetime = 60
 }
  
}