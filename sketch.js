const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse
const MouseConstraint=Matter.MouseConstraint;

var engine,world,canvas;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var mConstraint;
var rope1,rope2,rope3,rope4,rope5;


function preload(){

}

function setup(){
canvas=createCanvas(windowWidth ,windowHeight );
engine = Engine.create();
world = engine.world;

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio= pixelDensity();
let options={
    mouse:canvasmouse
}
  
mConstraint= MouseConstraint.create(engine,options);
World.add(world,mConstraint);

pendulum1=new Pendulum(300,250,"red")
pendulum2=new Pendulum(350,250,"lightblue")
pendulum3=new Pendulum(400,250,"blue")
pendulum4=new Pendulum(450,250,"green")
pendulum5=new Pendulum(500,250,"lightgreen")

rope1=new Sling(pendulum1.body,{x: 300, y: 150})
rope2=new Sling(pendulum2.body,{x: 350, y: 150})
rope3=new Sling(pendulum3.body,{x: 400, y: 150})
rope4=new Sling(pendulum4.body,{x: 450, y: 150})
rope5=new Sling(pendulum5.body,{x: 500, y: 150})



Engine.run(engine);

}

function draw(){
    rectMode(CENTER)
    background(0)
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()

    pendulum1.display()
    pendulum2.display()
    pendulum3.display()
    pendulum4.display()
    pendulum5.display()

    
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, { x: mouseX,y: mouseY})  
}
