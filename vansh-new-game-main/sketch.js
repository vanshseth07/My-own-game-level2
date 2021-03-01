var gameState= 0;
var score= 0;


function preload()
{
  vaccineimg=loadImage("Images/vaccine2.png");
  backgroundimg=loadImage("Images/background.png");
  virus1img=loadImage("Images/virus.png");
  background2img=loadImage("Images/background2.png");
  virus2img=loadImage("Images/virus2.png");
}

function setup() 
{
  createCanvas(3000,1000);

  bg = createSprite(1500,500,3000,1000);
  bg.addImage("1",backgroundimg);
  bg.scale =3 

  vaccine=createSprite(400, 750, 50, 50);
  vaccine.addImage(vaccineimg);
  vaccine.scale=0.2;

  virusGroup=new Group();
  virusGroup2=new Group();
 
}

function draw() 
{
  background(0);  
  drawSprites();
 
  textSize(80)
  fill("white")
  text("Score "+score,50,100);

  if(keyDown(UP_ARROW))
  {
    vaccine.y-=7
  }
  if(keyDown(DOWN_ARROW))
  {
    vaccine.y+=7
  }
  if(keyDown(LEFT_ARROW))
  {
    vaccine.x-=7
  }
  if(keyDown(RIGHT_ARROW))
  {
    vaccine.x+=7
  }
  if(gameState===0)
  {
   
    spawnvirus();
    if (virusGroup.isTouching(vaccine))
    {
      score=score+100
      console.log(score)
      virusGroup.destroyEach();
      if(score>1000)
      {
      gameState=1
      }
    }
    
  } 
  if(gameState===1)
  {
   spawnvirus2();
   if (virusGroup2.isTouching(vaccine))
    {
      score=score+200
      console.log(score)
      virusGroup2.destroyEach();
      if(score>3000)
      {
      gameState=2
      }
    }
    
  }
} 
function spawnvirus()
{  
    if(frameCount%70===0)
    {
      virus = createSprite(3000,100,10,10);
      virus.addImage(virus1img);
      virus.y= Math.round(random(200,1000));
      virus.velocityX=-10;
      
      virus.lifetime=300;
      virus.scale=0.7;
     
      virusGroup.add(virus);
      
    }
}

function spawnvirus2()
{  
    if(frameCount%70===0)
    {
      virus2 = createSprite(3000,100,10,10);
      virus2.addImage(virus2img);
      virus2.y= Math.round(random(200,1000));
      virus2.velocityX=-30;
      
      virus2.lifetime=300;
      virus2.scale=0.7;
     
      virusGroup2.add(virus2);
      
    }
}