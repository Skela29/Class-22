const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ball,ground

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  var ground_options = {
isStatic:true
  }
  var ball_options = {
restitution:1
  }
  ball = Bodies.circle(100,100,20,ball_options)
ground = Bodies.rectangle(400,380,800,10,ground_options)
World.add(world,ball)
World.add(world,ground)
}

function draw() {
  background("black");  
  Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}