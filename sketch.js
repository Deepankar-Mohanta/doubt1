
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Canvas
var paper1;
var dustbin1;
var ground;


function preload()
{
	
}

function setup() {
	Canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(400, 350);
	dustbin1=new Dustbin(700, 650, 100, 20);
	ground=new Ground1(400, 700);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  Engine.update(engine);

  paper1.display();
  dustbin1.display();
  ground.display();
  drawSprites();

 
}



