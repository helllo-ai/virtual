//Create variables here
 var dog,happyDog, database, foodS, foodStock,dog1
function preload()
{
  dog1=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200,20,20)
  dog.addImage(dog1)
  database=firebase.database()
  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if (keyWentDown(Up_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
  
}
fill("white")
  textSize(20)
text("Food Remaning:"+foodStock,300,300)
fill("white")
  textSize (20)
  text("Note press up arrow",400,400)
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



