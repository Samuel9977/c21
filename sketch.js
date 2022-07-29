
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
	}
	ball=Bodies.circle(260,100,20,ball_options)
	World.add(World,ball)
	btn1=createImg("right.png")
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)

	
	





		


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20)
  ground.Obj.display()
  groundObj=new ground (width/2,670,width,20)
	Leftside= new ground(1100,600,20,120)
 
}
function keyPressed(){
if (keycode=== UP_ARROW){


}

}
function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	
	}



