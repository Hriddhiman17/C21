var fixedRect, movingRect, object, obj;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(200, 300,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;

  object = createSprite(400, 400,80,30);
  object.shapeColor = "green";
  object.debug = true;

  obj = createSprite(400, 100,80,30);
  obj.shapeColor = "green";
  obj.debug = true;

  object.velocityY = -5;
  obj.velocityY = +5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0,0,0);  

  bounceOff(object, obj);
  bounceOff(movingRect, fixedRect);
  drawSprites();
}
function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
}