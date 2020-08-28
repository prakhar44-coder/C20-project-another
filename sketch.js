
var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX=5;
  movingRect=createSprite(400, 200, 50, 80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=-5;
}

function draw() {
  background(255,255,0); 
  //movingRect.x=mouseX;
  //movingRect.y=mouseY; 

  //detecting collision in horizontal direction
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2)
    {
         movingRect.velocityX=movingRect.velocityX*(-1);
         fixedRect.velocityX=fixedRect.velocityX *(-1);
    }

  //detectecting collision in vertical direction
  if( fixedRect.y -movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2)
   {
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY *(-1)
    
   }
  
  drawSprites();
}