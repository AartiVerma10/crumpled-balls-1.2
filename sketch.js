

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
  bg=loadImage("sprites/bg.jpg");
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Box(1000,470,200,30);
    box2 = new Box(910,400,20,140);
    box3 = new Box(1060,400,20,140);

    ball1 = new Ball(210,470,20);

    dustbin1 = new Dustbin();

    gd1 = new Ground();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);

  

  box1.display();
  box2.display();
  box3.display();

  ball1.display();

  dustbin1.display();

  gd1.display();

  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
      Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
  }
}

