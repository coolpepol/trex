var gameState = 1
var cactus_group, cloud_group
var score = 0
var cloud, cloudimg
var ground, groundimg
var e
var trex, trex_running, trex_ded
var g2
var o1, o2, o3, o4, o5, o6
var restart , restartImg
var gameover ,gameoverImg
var cheat = true
var checkpoint ,jump,die
//The first function read by the macine
//all the images Images and sounds are loaded in preload function
function preload() {
  die = loadSound("die.mp3")
  jump = loadSound("jump.mp3")
  checkpoint = loadSound("checkpoint.mp3")
  restartImg = loadImage("restart.png")
  gameoverImg = loadImage("gameOver.png")
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_ded = loadAnimation("trex_collided.png")
  groundimg = loadImage("ground2.png")
  cloudimg = loadImage("cloud.png")
  o1 = loadImage("obstacle1.png")
  o2 = loadImage("obstacle2.png")
  o3 = loadImage("obstacle3.png")
  o4 = loadImage("obstacle4.png")
  o5 = loadImage("obstacle5.png")
  o6 = loadImage("obstacle6.png")
}
function newcloud() {
  if (frameCount % 133 == 0) {
    cloud = createSprite(610, random(10, 60), 20, 20)
    cloud.velocityX = -5
    cloud.addImage(cloudimg)
    //time = distance/speed
    cloud.lifetime = 126
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
    cloud_group.add(cloud)
  }
}

function newCactus() {

  if (frameCount % 70 == 0) {
    var cactus = createSprite(600, 170, 10, 30)
    cactus.velocityX = -3
    var choice = Math.round(random(1, 6))
    cactus.scale = 0.7
    cactus.lifetime = 200
    cactus_group.add(cactus)
    cactus.velocityX = -(score/100+6)
    console.log(cactus.velocityX)
    switch (choice) {
      case 1: cactus.addImage("cac", o1); break;
      case 2: cactus.addImage("cac", o2); break;
      case 3: cactus.addImage("cac", o3); break;
      case 4: cactus.addImage("cac", o4); break;
      case 5: cactus.addImage("cac", o5); break;
      case 6: cactus.addImage("cac", o6); break;
    }

  }
  

}


function setup() {
  gameover = createSprite(300,100,50,10)
  restart = createSprite(300,130,20,20)
  restart.scale = 0.5
  cactus_group = createGroup()
  cloud_group = createGroup()
  ground = createSprite(300, 191, 600, 10);
  ground.addImage("ground", groundimg);
  gameover.addImage(gameoverImg)
  restart.addImage("restart",restartImg)
  g2 = createSprite(300, 200, 600, 10);
  createCanvas(600, 200);
  e = createEdgeSprites();
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("ded",trex_ded) ;
  trex.scale = 0.7;
  ground.velocityX = -3;
  g2.visible = false;
  //trex.debug = true;
 // trex.setCollider("rectangle", 0, 0,20,30);

}

function draw() {

  trex.collide(g2);
  background("white");
  if (gameState === 1) {
    gameover.visible = false
    restart.visible = false 
    if (trex.isTouching(cactus_group)&&cheat == false) {
      gameState = 0;


    }
    if (keyDown("space") && trex.isTouching(ground)) {
      // if (keyDown("space")&&trex.y > 167){
      //console.log(trex.y);
      jump.play()
      trex.velocityY = -10;
     
    }
    newcloud();
    newCactus();
    if (ground.x < 0) {
      ground.x = width / 2;
    }
    trex.velocityY += 0.7;
    score = score + Math.round(getFrameRate() / 60);
    
    ground.velocityX = -(score/1000+6)
   

  }

  else if (gameState === 0) {
    gameover.visible = true
    restart.visible = true
    ground.velocityX = 0;
    trex.velocityY = 0;
    cactus_group.setVelocityXEach(0);
    cloud_group.setVelocityXEach(0);
    cactus_group.setLifetimeEach(-36);
    cloud_group.setLifetimeEach(-36);
    trex.changeAnimation("ded",trex_ded)

  }






  drawSprites();
  //trex.collide(e[3])

  //e[0]left edge,e[1]rgiht edge,e[2]top edge,e[3]bottem edge
  text("Score: " + score, 500, 50);
if(cheat = true){
  trex.setCollider("rectangle", 70, 0,250,trex.height);
  if (trex.isTouching(cactus_group)) {
   trex.velocityY = -10
   trex.debug = true

  }


}
}