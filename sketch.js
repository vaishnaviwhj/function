var mr,fr

function setup() {
  createCanvas(1200,800);
 fr= createSprite(400, 100, 50, 50);
  fr.shapeColor="black"
  fr.debug=true
  mr= createSprite(400, 800, 80, 60);
  mr.shapeColor="black"
  mr.debug=true
  mr.velocityY=-5
  fr.velocityY=+5
}

function draw() {
  background(255,255,255);  
  


  if(mr.x-fr.x<fr.width/2+mr.width/2 &&fr.x-mr.x<fr.width/2+mr.width/2 ){
    mr.velocityX=mr.velocityX*(-1)
    fr.velocityX=fr.velocityX*(-1)
  }
    if( mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2) {
     mr.velocityY=mr.velocityY*(-1) 
     fr.velocityY=fr.velocityY*(-1)
    mr.shapeColor="purple"
    fr.shapeColor="purple"
  } 
  else{ mr.shapeColor="black"
  fr.shapeColor="black"}

  
  drawSprites();
}