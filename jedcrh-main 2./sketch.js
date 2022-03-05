var backgroundImg
var background
var playerImg
var player
var alienImg
var alien
var edges
var laser
var laserImg
var alienGroup
var laserGroup
var alienLaser
var alienLaserImg
var alienLaserGroup
var leftEdge
var rightEdge
var score = 0
var life = 3
var boom
var boomImg
var gameState = "play"
var resetButtonImg
var resetButton







function preload(){
  backgroundImg = loadImage("images/background.jpeg")
  playerImg = loadImage("images/player.png")
  alienImg = loadImage("alien2.png")
  laserImg = loadImage("images/player laser.png")
  alienLaserImg = loadImage("images/alienlaser.png")
  boomImg = loadAnimation("images/boom.png")
  resetButtonImg = loadImage("reset.png")
}

function setup(){

createCanvas(windowWidth,windowHeight)

player = createSprite(windowWidth/2,windowHeight-100,20,20)
player.addAnimation("player",playerImg)
player.scale = 0.2
player.addAnimation("boom",boomImg)

resetButton = createSprite(windowWidth/2,windowHeight/2-300,20,20)
resetButton.addImage(resetButtonImg)



alienGroup = new Group()
laserGroup = new Group()
alienLaserGroup = new Group()

}


function draw(){
 background(backgroundImg)


 fill("red")
 textSize(26)
text("score: " + score,windowWidth-300,50)

text("life: "+ life,300,50)

console.log("hi");
if(gameState==="play"){

  resetButton.visible = false
  console.log("hello");
 if(keyIsDown(RIGHT_ARROW)){
   player.x += 15

   
 }
 if(keyIsDown(LEFT_ARROW)){
  player.x -= 15
  
}


if(alienGroup.isTouching(laserGroup)){
  alien.changeAnimation("boom",boomImg)
  alienGroup.destroyEach()
  laserGroup.destroyEach()
  
  score +=1
  
}
if(alienLaserGroup.isTouching(player)){
  alienLaserGroup.destroyEach()
  life -= 1
  
}
if(alienGroup.x = 1500){
  alienGroup.velocityX = 0
  alienGroup.velocityX = -4
}
if(alienGroup.y = 0){
  alienGroup.velocityX = 0
  alienGroup.velocityX = 4
}

  
spawnAlien()
spawnLaser()
spawnAlienLaser()
if(life === 0){
  gameState = "end"
}

}

if(gameState == "end"){
  player.changeAnimation("boom",boomImg)
  alienGroup.destroyEach()
  text("GAME OVER!",windowWidth/2-100,windowHeight/2)

  resetButton.visible = true

  if(mousePressedOver(resetButton)){
    reset()
  }
}
drawSprites()
}  

function spawnAlien(){
  if(frameCount%100 === 0){
  alien = createSprite(200,150,50,50)
  alien.addImage(alienImg)
  alien.scale = 0.15
  alien.velocityX = 4
  alien.x = random(windowWidth -1500,windowHeight)
  
  alien.debug = true
  alienGroup.add(alien)
 
  }
}

function spawnLaser(){
  if(keyWentDown(UP_ARROW)){
    laser = createSprite(player.x,player.y-30,50,50)
    laser.addImage(laserImg)
    laser.scale = 0.3
    laser.velocityY = -8
    laser.debug = true
    laser.setCollider("rectangle",0,0,60,180)
    laserGroup.add(laser)
  }
}

function spawnAlienLaser(){
  if(keyWentDown("W")){
  alienLaser = createSprite(alien.x,alien.y,50,50)
  alienLaser.addImage(alienLaserImg)
  alienLaser.scale = 0.3
  alienLaser.velocityY = 4
  alienLaserGroup.add(alienLaser)
  }
}

function bounce(){
  alienGroup.bounceOff(edges)

  edges.add(leftEdge)
  edges.add(rightEdge)

}

function reset(){
  gameState = "play"
  score = 0
  life = 3
  player.changeAnimation("player",playerImg)
}

    

    
  

  
 
    
    
  
    
    

  
  
  
 





