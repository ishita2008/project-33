const Engine=Matter.Engine;
const World = Matter.World;
const Constraint=Matter.Constraint; 
const Bodies = Matter.Bodies;
const Render=Matter.Bodies;
var football,sports


var sportsCreatedFrame=0

var rand;

function preload(){
  football = loadImage("football.png");
  basketball= loadImage("basketball.png");
  Bomb=loadImage("Bomb.png");




}


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(2000,600);

  girl=new Girl(100,400)
  baby=new Baby(160,300)

  slingshot = new SlingShot(Baby.body,{x:200, y:50});
     
  



  
}

function draw() {
  Engine.update(engine)
  
  background("pink"); 


  girl.display();
  baby.display();
  slingshot.display();

  rand = Math.round(random(1,4));
  if(frameCount%80===0){
      sportsCreatedFrame=frameCount;
      sports = createSprite(random(10,370), random(10,50), 10, 10);
      switch(rand){
          case 1: sports.addImage(football);
          break;
          case 2: sports.addImage(basketball);
          break;
          case 3:sports.addImage(Bomb);
          break;
       

      
          default:break; 
      }
     sports .scale = random(0.1,0.2)
  }

  if(sportsCreatedFrame +10 ===frameCount && sports){
      sports.destroy();
  }

    

  drawSprites();

    }
    function mouseDragged(){
      Matter.Body.setPosition(baby.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
      slingshot.fly();
  }

    