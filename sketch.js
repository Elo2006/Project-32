const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var chain;
var player;

var ball;
var score = 0;


function preload(){
  img = loadImage("hexagon (1).png");

}

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
    world = engine.world;


  block1 = new Box(610,260,40,40);
  block2 = new Box(570,260,40,40);
  block3 = new Box(540,260,40,40);
  block4 = new Box(630,260,40,40);
  block5 = new Box(660,260,40,40);


  block6 = new Box(550,220,40,40);
  block7 = new Box(575,220,40,40);
  block8 = new Box(615,220,40,40);
  block9 = new Box(645,220,40,40);


  block10 = new Box(550,170,40,40);
  block11 = new Box(590,180,40,40);
  block12 = new Box(630,180,40,40);


  block13 = new Box(590,140,40,40);

  ground1 = new Ground(600,285,230,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Box(900,170,35,40);
  block15 = new Box(930,170,35,40);
  block16 = new Box(870,170,35,40);
  block17 = new Box(840,170,35,40);
  block18 = new Box(960,170,35,40);

  block19 = new Box(900,140,35,40);
  block20 = new Box(930,140,35,40);
  block21 = new Box(870,140,35,40);

  block22 = new Box(900,110,35,40);

  player = new Player(50,200,50,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  chain = new Chain(this.ball,{x:140, y:170});

  score = 0

}

function draw() {
  background("#8156FF");
  Engine.update(engine);



  fill("lightblue");

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  

  fill("#FF7456");
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();

  fill("lightPink");
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill("white");

  block13.display();
  block13.score();
  

  fill("#E0FF56")
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  fill("#56FFC9");

  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  fill("white");
  

  block22.display();
  block22.score();

  ground1.display();
  ground2.display();
  ground3.display();


  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  chain.display();
  textSize(25)
  fill("white")
 // text("Press Space to Replay",20,40)
  
  text("SCORE: "+score, 750, 40)

  
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

//function keyPressed(){
	//if(keyCode === 32){
  //  chain.attatch(this.player);
  //}}     

