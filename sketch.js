createEdgeSprites()
var canvas;
var music;
var block1,block2,block3,block4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(800,600,5,5);
surface2=createSprite(800,600,5,5);
surface3=createSprite(800,600,5,5);
surface4=createSprite(800,600,5,5);

    //create box sprite and give velocity
box=createSprite(random(20,750))
box.velocity=1;
music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites()


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        //change colour here
if(surface1.isTouching(box)){
    box.shapeColour = rgb,(225,128,0);
    ball.velocityX=0;
    music.stop();
}
if(surface2.isTouching(box)){
    box.shapeColour = rgb,(225,128,0);
    ball.velocityX=0;
    music.stop();
    }
    if(surface3.isTouching(box)){
        box.shapeColour = rgb,(225,128,0);
        ball.velocityX=0;
        music.stop();
    }
    if(surface4.isTouching(box)){
        box.shapeColour = rgb,(225,128,0);
        ball.velocityX=0;
        music.stop();
    }

