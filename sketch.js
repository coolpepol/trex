
var cloud , cloudimg
var ground,groundimg
var e 
var trex ,trex_running;
var g2
var o1,o2,o3,o4,o5,o6
//The first function read by the macine
//all the images Images and sounds are loaded in preload function
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
 groundimg = loadImage("ground2.png")
 cloudimg = loadImage("cloud.png")
 o1 = loadImage("obstacle1.png")
 o2 = loadImage("obstacle2.png")
 o3 = loadImage("obstacle3.png")
 o4 = loadImage("obstacle4.png")
 o5 = loadImage("obstacle5.png")
 o6 = loadImage("obstacle6.png")
}
function newcloud (){
  if (frameCount%133 == 0){
    cloud = createSprite (610,random(10,60),20,20)
    cloud.velocityX = -5
    cloud.addImage(cloudimg)
    //time = distance/speed
    cloud.lifetime=126
    cloud.depth = trex.depth 
    trex.depth =  trex.depth +1 
  }
}

function newCactus(){
  if (frameCount%70 == 0){
  var cactus = createSprite (600,170,10,30)
  cactus.velocityX = -3
  var choice = Math.round(random(1,6))
  console.log(choice)
  
switch (choice){
  case 1:cactus.addImage("cac",o1);break;
  case 2:cactus.addImage("cac",o2);break;
  case 3:cactus.addImage("cac",o3);break;
  case 4:cactus.addImage("cac",o4);break;
  case 5:cactus.addImage("cac",o5);break;
  case 6:cactus.addImage("cac",o6);break;
}



  }

}


function setup(){
  
  ground = createSprite(300,191,600,10)
  ground.addImage("ground",groundimg)
  
  g2 = createSprite(300,200,600,10)
  createCanvas(600,200)
  e = createEdgeSprites()
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addImage("running", trex_running);
  trex.scale = 0.7
  ground.velocityX = -3
  g2.visible = false
}

function draw(){

  newcloud ()
  newCactus()
  if(ground.x<0){
    ground.x = width/2
  }
  if(keyDown("space")&&trex.isTouching(ground)){
 // if (keyDown("space")&&trex.y > 167){
    console.log(trex.y) 
    trex.velocityY = -8
  }
  trex.velocityY+=0.3
  background("white")
  drawSprites();
//trex.collide(e[3])
trex.collide(g2)
//e[0]left edge,e[1]rgiht edge,e[2]top edge,e[3]bottem edge
text("Score: " + score,500,50);
score = score + Math.round(getFrameRate()/60);
}