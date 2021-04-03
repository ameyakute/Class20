var a;
var b;

function setup()
{
  createCanvas (1200,600);
  a = createSprite (500,400,40,100);
  a.shapeColor = "cyan";
  a.velocityY = -5;
  
  b = createSprite (500,300,70,80);
  b.shapeColor = "red";
  b.velocityY = 5;
}

function draw()
{
  background ("pink");
  //b.x = mouseX;
  //b.y = mouseY;
  console.log(b.x - a.x);

  if(a.x-b.x<a.width/2+b.width/2
    &&b.x-a.x<a.width/2+b.width/2)
    {
     a.velocityX = a.velocityX*(-1);
     b.velocityX = b.velocityX*(-1);
    }
    
    if(a.y-b.y<a.height/2+b.height/2
    &&b.y-a.y<a.height/2+b.height/2)
    {
    a.velocityY = a.velocityY*(-1);
    b.velocityY = b.velocityY*(-1);
    }
  
  
  drawSprites();
}