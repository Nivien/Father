var ball;
 
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall7,wall8,wall9,wall10;

var topEdge,bottomEdge,rightEdge,leftEdge;

var win, winImage;

var fathers, fatherImg;

function preload(){
  winImage = loadImage("pictures/flag.jpg");

  fatherImg = loadImage("pictures/fatherdayimg.jpg");
}

function setup() {
  createCanvas(400,400);
  
  ball = createSprite(50,50,20,20);

  wall1 = createSprite(100,50,10,150);
  wall2 = createSprite(150,120,110,10);
  wall3 = createSprite(200,120,120,10);
  wall4 = createSprite(260,145,10,60);
  wall5 = createSprite(260,212,10,120);
  wall6 = createSprite(340,268,170,10);
  wall7 = createSprite(50,220,120,10);
  wall8 = createSprite(105,300,10,150);
  wall9 = createSprite(200,370,200,10);
  wall10 = createSprite(300,440,10,150);

  topEdge = createSprite(200,0,400,10);
  bottomEdge = createSprite(200,400,800,10);
  leftEdge = createSprite(0,200,10,400);
  rightEdge = createSprite(400,200,10,400);

  win = createSprite(350,350,30,30);
  win.addImage("win", winImage);
  win.scale = 0.05;

  fathers = createSprite(200,200,50,50);
    fathers.addImage("image",fatherImg);
    fathers.scale = 1.25;
    fathers.visible = false;
}

function draw() {
  background("white");  

  if(keyDown("s")){
    ball.y += 3;
  }
  if(keyDown("w")){
    ball.y += -3;
  }
  if(keyDown("a")){
    ball.x += -3;
  }
  if(keyDown("d")){
    ball.x += 3;
  }

  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(wall4);
  ball.bounceOff(wall5);
  ball.bounceOff(wall6);
  ball.bounceOff(wall7);
  ball.bounceOff(wall8);
  ball.bounceOff(wall9);
  ball.bounceOff(wall10);

  if(ball.isTouching(win)){
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();

    win.destroy();

    ball.destroy();

    fathers.visible = true;
    
    
  }
  
  drawSprites();
}

