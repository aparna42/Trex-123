const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine, world;
var object, ground;
function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200, 100, 50, 50);
  World.add(world, object);

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 400, 10);
}
