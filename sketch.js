var ship, shipA;
var sea, seaImg;

function preload(){
    shipA = loadAnimation('ship-1.png','ship-2.png');
    seaImg = loadImage('sea.png');
}

function setup(){
    createCanvas(400,400);
    background(51);

    sea = createSprite(200,200,20,20);
    sea.addImage('sea',seaImg);
    sea.scale=0.3;
    sea.velocityX=-3;
    sea.x = sea.width / 8;

    ship = createSprite(200,200,20,20);
    ship.addAnimation('movingShip',shipA);
    ship.scale=0.3;

}

function draw(){
    background("white");

    if(sea.x < 0){
        sea.x = sea.width / 8;
    }

    drawSprites();
}