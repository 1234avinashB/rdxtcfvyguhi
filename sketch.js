const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground1;
var box1,box2,box3,box4,box5, box6, box7;
var pig1, pig2, pig3, log1, log2, log3, log4, log5, bird, backgroundImage;
function preload(){
  backgroundImage = loadImage("sprites/bg.png");
}
function setup() {
  myEngine=Engine.create();
  myWorld=myEngine.world;
  createCanvas(1500,750);


  box1=new Box(900,700,70,70);
  box2 =new Box(1200,700,70,70);
  ground1 = new Ground(750,740,1500,20);
  pig1 = new Pig(1050,700);
  log1 = new Log(1050,630,370,PI/2);
  box3 = new Box(900,575,70,70);
  box4 = new Box(1200,575,70,70);
  pig2 = new Pig(1050,515);
  log2 = new Log(1050,490,370,PI/2);
  box6 = new Box (900, 450, 70, 70);
  box7 = new Box(1200, 450, 70, 70);
  pig3 = new Pig(1050, 450);
  log5 = new Log(1050, 380, 370, PI/2);
  box5 = new Box(1050,320,70,70);
  log3 = new Log(1000,320,150,PI/4);
  log4 = new Log(1100,320,150,-PI/4);
  bird = new Bird(300,300);
  platform = new Ground(100, 650, 300, 170);
  console.log(bird.body);
  
}

function draw() {
  Engine.update(myEngine) 
  background(backgroundImage);
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display()
  log3.display();
  log4.display();
  bird.display();
  pig3.display();
  log5.display();
  box6.display();
  box7.display();
  platform.display();
}
