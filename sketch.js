const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){

    createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;
   
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
    
}

function draw(){

    background("black");

    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++){ drops[i].showDrop();
    drops[i].updateY();
    
}   

