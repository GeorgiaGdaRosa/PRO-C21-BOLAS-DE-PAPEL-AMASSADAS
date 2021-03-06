
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var groundObj
var leftSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200,10,20,ball_options);
  	World.add(world,ball);

	  groundObj= new Ground(width/2,670,width,20);
	  leftSide= new Ground(1100,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display()
  leftSide.display()

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})

	}
}


