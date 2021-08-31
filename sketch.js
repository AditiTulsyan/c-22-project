const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,ball1,ball2,ball3,ball4;
var ground;
var con,con1,con2,con3,con4;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  ground=new Ground(200,50,150,20);
  ball = Bodies.circle(200,100,10,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(150,100,10,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(175,100,10,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(225,100,10,ball_options);
  World.add(world,ball3);
  

  ball4 = Bodies.circle(250,100,10,ball_options);
  World.add(world,ball4);
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:60},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);

      con1 = Matter.Constraint.create({
        pointA:{x:150,y:60},
        bodyB:ball1,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con1);

    con2 = Matter.Constraint.create({
      pointA:{x:175,y:60},
      bodyB:ball2,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
    });

  World.add(world,con2);


  con3 = Matter.Constraint.create({
    pointA:{x:225,y:60},
    bodyB:ball3,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });

World.add(world,con3);


con4 = Matter.Constraint.create({
  pointA:{x:250,y:60},
  bodyB:ball4,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1
});

World.add(world,con4);
      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ground.show()

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body .setStatic(ball,false);
      
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

