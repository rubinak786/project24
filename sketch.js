
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 360, 15);
	ground = new Ground(800,490,1600,30);
	
	d1 = new Dustbin(1200,465,170,20);
	d2 = new Dustbin(1110,415,20,120);
	d3 = new Dustbin(1295,415,20,120);

 
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
  });
 Render.run(render); 
}


function draw() {
  background("lightSkyBlue");
  
  Engine.update(engine);
  paper.display();
  ground.display();

  d1.display();
  d2.display();
  d3.display();

 

  textFont('Papyrus');
  stroke("White");
  strokeWeight(10);
  textSize(60);
  text("Keep it Clean and Green !!! ", 450, 100);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:30, y:-35})																																														
	}
}


