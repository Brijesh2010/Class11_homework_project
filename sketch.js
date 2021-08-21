//creating variables
var track, track_running;
var jaxon, jaxon_running


function preload(){
    //pre-load images
    track_running = loadImage("path.png")
    jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
    //create Canvas
    createCanvas(400,400);

    //create track sprite
    track = createSprite(200,200)
    track.addImage("ground",track_running);
    track.velocityY = 4;
    track.scale = 1.2;
    //create jaxon sprite
    jaxon = createSprite(200,300,50,50);
    jaxon.addAnimation("runner",jaxon_running)
    jaxon.scale = 0.1
    //create boundaries
    boundary1 = createSprite(1,0,30,800)
    boundary2 = createSprite(400,0,30,800)

    //making the boundaries invisible
    boundary1.visible = false
    boundary2.visible = false
 
}

function draw() {
    background(0);

    //creating a if codition to repeat the background
    if(track.y > 400){
        track.y = height/2
    }

    //moving the jaxon according to the mouse X
    jaxon.x = World.mouseX;

    //colliding the jaxon with boundaries
    jaxon.collide(boundary1)
    jaxon.collide(boundary2)

    drawSprites();
} 