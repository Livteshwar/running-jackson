var jackson
var jacksonImg
var road
var roadImg
var boundry1
var boundry2

function preload(){
  //pre-load images
  jacksonImg=loadAnimation("Runner-1.png,Runner-2.png")
  roadImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  jackson= createSprite(200,100)
  jackson.addAnimation("Running",jacksonImg)
  road=createSprite(200,200)
  road.addImage(roadImg)
  road.velocityY=4
  road.scale=1.2
  boundry1=createSprite(10,200,5,400)
  boundry1.visible=false
  jackson.collide(boundry1)
  boundry2=createSprite(390,200,5,400)
  boundry2.visible=false
  jackson.collide(boundry2)
}

function draw() {
  background(0);
  if (road.y>400){
    road.y=height/2
  }
  if (keydown("left")){
    jackson.x -=10
  }
  if (keydown("right")){
    jackson.x +=10
  }

}

