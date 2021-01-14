
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var doggy
var dogIMG
var happyIMG
var foodS
var foodStock

function preload()
{
	dogIMG=loadImage("Dog.png")
	happyIMG=loadImage("happydog.png")
	milky=loadImage("MILK.png")
}

function setup() {
	database = firebase.database();
	createCanvas(610,610);
doggy=createSprite(width/2, height/2, 10,10);
	doggy.addImage(dogIMG)
	doggy.scale=0.4

milk=createSprite(150, 424, 10,10);
	milk.addImage(milky)

	foodStock = database.ref('FOOD');
    foodStock.on("value",readdata,showerr);

	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}
function readdata(data){
	foodS = data.val();
	}
	function showerr(){
		console.log("error")
	
	}
	
	function writeStock(x){
	  if(x <= 0){
		x = 0;
	  }
	  else{
		x = x-1;
	  }
		database.ref('/').update({
		 'FOOD' : x
		})
	  }





function draw() {
  
  background("yellow");

  if(keyWentDown(UP_ARROW)){
	  writeStock(foodS)
	  doggy.addImage(happyIMG)
  }
textSize(25)
fill("black")
  text("food remaning :"+foodS,170,130)
  textSize(27)
  text("Press UP ARROW Key to feed your pet 'MILO'",40,100 )
  text(" 'MILO' has already drank some milk before",40,50 )
  //text(mouseX+" ," +mouseY, mouseX,mouseY)
  drawSprites();
 
}



