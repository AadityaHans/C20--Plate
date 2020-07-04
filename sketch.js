var fix_rect ,move_rect



function setup() {
  createCanvas(800,800);
  fix_rect=createSprite(400, 180, 50, 50);
  fix_rect.shapeColor="cyan"

  move_rect=createSprite(500, 400,50,50)
  move_rect.shapeColor="green"
  fix_rect.velocityX=2
  fix_rect.velocityY=2
  move_rect.velocityX=2
  move_rect.velocityY=2



}

function draw() {
  background(0,0,0);  
  move_rect.x=World.mouseX
  move_rect.y=World.mouseY

  if(move_rect.x-fix_rect.x < move_rect.width/2+fix_rect.width/2 &&
     fix_rect.x-move_rect.x <move_rect.width/2+fix_rect.width/2 &&
     fix_rect.y-move_rect.y <move_rect.height/2+fix_rect.height/2&&
     move_rect.y-fix_rect.y <move_rect.height/2+fix_rect.height/2
     ) {
    fix_rect.shapeColor="red"
    move_rect.shapeColor="red"}

    else{
      fix_rect.shapeColor="cyan"
      move_rect.shapeColor="green"}
if(move_rect.x-fix_rect.x < move_rect.width/2+fix_rect.width/2 &&
  fix_rect.x-move_rect.x <move_rect.width/2+fix_rect.width/2 ){
    move_rect.velocityX=move_rect.velocityX*(-1)
    fix_rect.velocityX=fix_rect.velocityX*(-1)
  }

  if(fix_rect.y-move_rect.y <move_rect.height/2+fix_rect.height/2 &&
    move_rect.y-fix_rect.y <move_rect.height/2+fix_rect.height/2){
    move_rect.velocityY=move_rect.velocityY*(-1)
    fix_rect.velocityY=fix_rect.velocityY*(-1)
    }

  drawSprites();
}