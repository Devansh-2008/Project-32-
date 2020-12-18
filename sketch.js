const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var particles = [];


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
ground = new Ground(250,650,500,20);
division1 = new Division(10,650,5,500);
division2 = new Division(90,650,10,500);
division3 = new Division(170,650,10,500);
division4 = new Division(250,650,10,500);
division5 = new Division(330,650,10,500);
division6 = new Division(410,650,10,500);
division7 = new Division(475,650,5,500);
plinko1 = new Plinko(50,40);
plinko2 = new Plinko(100,40);
plinko3 = new Plinko(150,40);
plinko4 = new Plinko(200,40);
plinko5 = new Plinko(250,40);
plinko6 = new Plinko(300,40);
plinko7 = new Plinko(350,40);
plinko8 = new Plinko(400,40);
plinko9 = new Plinko(450,40);
plinko10 = new Plinko(20,120);
plinko11 = new Plinko(70,120);
plinko12 = new Plinko(120,120);
plinko13 = new Plinko(170,120);
plinko14 = new Plinko(220,120);
plinko15 = new Plinko(270,120);
plinko16 = new Plinko(320,120);
plinko17 = new Plinko(370,120);
plinko18 = new Plinko(420,120);
plinko19 = new Plinko(470,120);
plinko20 = new Plinko(50,200);
plinko21 = new Plinko(100,200);
plinko22 = new Plinko(150,200);
plinko23 = new Plinko(200,200);
plinko24 = new Plinko(250,200);
plinko25 = new Plinko(300,200);
plinko26 = new Plinko(350,200);
plinko27 = new Plinko(400,200);
plinko28 = new Plinko(450,200);
plinko29 = new Plinko(20,280);
plinko30 = new Plinko(70,280);
plinko31 = new Plinko(120,280);
plinko32 = new Plinko(170,280);
plinko33 = new Plinko(220,280);
plinko34 = new Plinko(270,280);
plinko35 = new Plinko(320,280);
plinko36 = new Plinko(370,280);
plinko37 = new Plinko(420,280);
plinko38 = new Plinko(470,280);
}


function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  } 
  
  for(var par=0;par<particles.length;par++) {
    particles[par].display();
  }
  
ground.display();
division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();
plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();
plinko20.display();
plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();
plinko25.display();
plinko26.display();
plinko27.display();
plinko28.display();
plinko29.display();
plinko30.display();
plinko31.display();
plinko32.display();
plinko33.display();
plinko34.display();
plinko35.display();
plinko36.display();
plinko37.display();
plinko38.display();

}
