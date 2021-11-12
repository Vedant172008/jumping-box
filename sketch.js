var canvas;
var music;
var r1,r2,r3,r4,square,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    r1=createSprite(0,580,360,30);
    r1.shapeColor="blue";
    r2=createSprite(295,580,200,30);
    r2.shapeColor="orange";
    r3=createSprite(515,580,200,30);
    r3.shapeColor="red";
    r4=createSprite(740,580,220,30);
    r4.shapeColor="green";
    square=createSprite(50,100,40,40);
    square.shapeColor="white";

    //create box sprite and give velocity
    square.velocityX=4;
    square.velocityY=9;
}


function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    square.bounceOff(edges);
    if(r1.isTouching(square)){
        square.shapeColor="blue";
    }
    if(r2.isTouching(square)){
        square.shapeColor="orange";
    }
    if(r3.isTouching(square)){
        square.shapeColor="red";
    }
    if(r4.isTouching(square)){
        square.shapeColor="green";
    }






    //add condition to check if box touching surface and make it box
    drawSprites()
}
