var bullet, wall;
var weight, speed, thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
  speed= random(55,90);
  weight= random(400,1500);
  bullet.velocityX=speed;
  weight=random(30,52);
  speed=random(223,331);
}

function draw() {
  background(255,255,255); 
  if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);

  }


  if (damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
  drawSprites(); 


}
function hasCollided ( lbullet, lwall )
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}

}














  
