var population;
var lifespan;
var count;
var target;
var pLife;
var pGeneration;
var gen;

var rx = 300;
var ry = 300;
var rw = 200;
var rh = 10;
var obsticle;
function setup(){
  createCanvas(800,600);
  population = new Population();
  target = createVector(width/2,height/2-200);
  count = 0;
  gen=0;
  lifespan = 400;
  pLife = document.createElement('p');
  pGeneration = document.createElement('p');
  obsticle={
    x:rx,
    y:ry,
    w:rw,
    h:rh
  }
}

function draw(){
  background(51);

  noStroke();
  ellipse(target.x,target.y,20,20);

  population.run(target,count,obsticle);
  //population.howFar(target);
  count++;
  if(count==lifespan){
    population.evaulate(target);
    population.selection();
    count=0;
    gen++;
  }
  pLife.innerHTML = count;
  pGeneration.innerHTML = gen;

   rect(rx, ry, rw, rh);
}
