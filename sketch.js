const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var man, manImage_Puppy, manImage_Changed;
var sound;
var log1_Image;
var trophyImage;
var stoneImage;
var baseImage;
var ground1, ground2;
var start,startImg;
var story1,story2,story3,story4,story5,story6,story7,story8,story9,story10,story11,story12,title;
var level1,level2,level3,level4,level5,level6;
var stone1,stone2,stone3,stone4,base1,base2,log1,log2,trophy;
var gameover, win;
var restartImg,restart;
var monster, monsterImg;
var puppy, puppyImg;
var youWon;

function preload(){
backgroundImg = loadImage("bg2.jpg");
stoneImage = loadImage("rock.png");
manImage_Puppy = loadImage("man for the game.gif");
log1_Image = loadImage("wood2.png");
trophyImage = loadImage("trophy.png");
baseImage = loadImage("base.png");
manImage_Changed = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png", "walking_5.png","walking_6.png",
"walking_7.png", "walking_8.png");
startImg = loadImage("start.jpg");
sound = loadSound("388079__xsgianni__mario-s-way.mp3");
restartImg = loadImage("reset.png");
monsterImg = loadImage("Monster-01.png");
puppyImg = loadImage("dog.png");
}

function setup(){
  createCanvas(1200,700);

 
  man = createSprite(100,590,20,20);
  man.addAnimation("man",manImage_Changed);
  man.scale = 0.2;

  man.setCollider("rectangle",0,0,man.width,man.height);
  man.debug = true

 // man.visible = false;

 start = createSprite(1000,590,10,10);
 start.addImage("start",startImg);
 start.scale = 0.2;

 monster = createSprite(730,205,20,20);
 monster.addImage("monster", monsterImg);
 monster.scale = 0.1;  
 monster.visible = true;

 puppy = createSprite(1130,605,20,20);
 puppy.addImage("puppy", puppyImg);
 puppy.scale = 0.3;
 puppy.visible = false;

  ground1  = createSprite(900,690,1200,10);
  ground1.addImage("base", baseImage);
  //ground1.visible = false;

  ground2 = createSprite(300,690,1200,10);
  ground2.addImage("base", baseImage);
  //ground2.visible = false;

 

  base1  = createSprite(900,690,1200,10);
  base1.addImage("base", baseImage);
  base1.visible = false;

  base2 = createSprite(300,690,1200,10);
  base2.addImage("base", baseImage);
  base2.visible = false;
                
  trophy = createSprite(1130,635,20,20);
  trophy.addImage("trophy",trophyImage);
  trophy.scale = 0.1;
  trophy.visible = false;
  
  stone1 = createSprite(400,660,20,20);
  stone1.addImage("stone", stoneImage);
  stone1.scale = 0.1;
  stone1.visible = false;

  stone2 = createSprite(1050,660,20,20);
      stone2.addImage("stone", stoneImage);
      stone2.scale = 0.1;
      stone2.visible = false;

      stone3 = createSprite(680,660,20,20);
      stone3.addImage("stone", stoneImage);
      stone3.scale = 0.1;
      stone3.visible = false;

  stone4 = createSprite(850,660,20,20);
  stone4.addImage("stone", stoneImage);
  stone4.scale = 0.1;
  stone4.visible = false;

  title = createElement('h1')
  title.html('The Lost Puppy')
  title.position(350,100);
 
  story1 = createElement('h2');
  story1.html("There was a man who was walking with his pet but soon his pet got lost.")
  story1.position(40,200);
  story2 = createElement('h2');
  story2.html("Help the man find his pet but listen the pet is kidnapped by the witty monster, The Leonard.")
  story2.position(40,220);
  story3 = createElement('h2');
  story3.html("Defeat the monster in the quiz so that you could get your pet back.")
  story3.position(40,240);
  story4 = createElement('h2');
  story4.html("There are a total of 2 levels in which the boss comes in the final level.")
  story4.position(40,260);
  story5 = createElement('h2');
  story5.html("The monster is very witty, he would try to defeat you in a quiz. If you get defeated, the monster wins.")
  story5.position(40,280);
  story6 = createElement('h2');
  story6.html("If you lose one time you have to start again from the first level. You have to defeat Leonard and get your pet back.")
  story6.position(40,300);
  story7 = createElement('h2');
  story7.html("1.	The man has to complete 2 levels to get his pet back. Touch the trophy to destroy the monster.")
  story7.position(40,320);
  story10 = createElement('h2');
  story10.html("and if you touch the obstacles with your original size, your game is over and you have to start again.")
  story10.position(40,380);
  story12 = createElement('h2');
  story12.html("Use A to move left, D to move right and SPACE to jump and to start click the start button");
  story12.position(40,420); 

  engine = Engine.create();
	world = engine.world;

 //game  =  new Game();
}

function draw(){
    background(backgroundImg);

  
    if(keyDown("D")){
      man.x = man.x + 8;
    }
    if(keyDown("A")){
      man.x = man.x - 8;
    }
    if(keyDown("space")){
      man.y = man.y - 20;
    }
    
    if(mousePressedOver(start)){  
      level1 = createElement('h1')
      level1.html('L E V E L 1')
      level1.position(350,100);

      story1.hide();
      story2.hide();
      story3.hide();
      story4.hide();
      story5.hide();
      story6.hide();
      story7.hide();
      story10.hide();
      story12.hide();
      title.hide();
      start.destroy();  
     
      base2.visible = true;
      base1.visible = true;
      stone1.visible = true;
     // stone2.visible = true;
      stone4.visible = true;
      //log2.visible = true;
      //log1.visible = true;
        trophy.visible = true;
      // man.collide(log1);
     // man.collide(log2);
      man.x = 100;
      man.y = 590;
      
    }
    if(man.isTouching(stone1) &&  stone1.visible === true   
      || man.isTouching(stone4) &&  stone4.visible === true){
      gameover = createElement('h2');
      gameover.html("G A M E O V E R. R E L O A D  T H E  P A G E  T O  P L A Y  A G A I N")
      gameover.position(40,200);
      restart = createSprite(600,350,20,20);
      restart.addImage("restart", restartImg);
      restart.scale = 0.1;
      trophy.visible = false;
      man.visible = false;
      stone1.destroy();
      stone4.destroy();
      trophy.destroy();
    }

  // if(mousePressedOver(restart)){  
  //   man.visible = true;
  //   man.x = 100;
  //   man.y = 590;
  //   stone2.visible = true;
  //   stone3.visible = true;
  //   restart.visible = false;
  //   trophy.visible = true;
  // }

    if(man.isTouching(trophy)){
      stone4.destroy();  
      stone1.destroy();  
      trophy.destroy();
      monster.destroy();
      puppy.visible = true;
      level1.hide();
      man.x = 100;
      man.y = 590;
     
    }
    if(man.isTouching(puppy)){
      youWon = createElement('h2');
      youWon.html("Y O U   W O N !!! :)");
      youWon.position(600, 350); 
      monster.visible = false;   
      man.visible = false;
      puppy.visible = false;
    }
    
    man.velocityY = man.velocityY + 0.8
    man.collide(ground2);
    man.collide(ground1);

    sound.play();
    //game.display();
    drawSprites();
}
