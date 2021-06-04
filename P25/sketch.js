
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,paper,ground ;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(200,450,70);
	ground= new Ground (800,670,1600,20);
  dustbin= new Dustbin(1200,650);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display();
  //side1.display();
  //side2.display();
  //side3.display();


  
  drawSprites();
 
}



function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}