function Rocket(dna){
    this.pos = createVector(width/2,height*0.8);
    this.vel = createVector();
    this.acc = createVector();
    this.hitTheTarget = false;
    this.hitCrushed = false;
    if(dna){
      this.dna = dna;
    }
    else{
      this.dna = new DNA();
    }

    this.fitness = 0;

    this.applyForce = function(force){
      this.acc.add(force);
    }

    this.move = function(){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    this.calculateFittness = function(target){
      var candid = 1/Math.pow(dist(this.pos.x,this.pos.y,target.x,target.y),2);
      if(candid>this.fitness)
        this.fitness = candid;
      if(this.hitTheTarget){
        this.fitness *= 10;
      }
      else if(this.hitCrushed){
        this.fitness /= 10;
      }
    }

    this.update = function(target,count,obsticle){

      var d = dist(this.pos.x,this.pos.y,target.x,target.y);
      if(d<20){
        this.hitTheTarget = true;
      }

      if(this.pos.x > obsticle.x
        && this.pos.x < obsticle.x+obsticle.w
        && this.pos.y < obsticle.y+obsticle.h
        && this.pos.y > obsticle.y)
        this.hitCrushed=true;

      if(this.pos.x<0 || this.pos.x>width){
        this.hitCrushed = true;
      }
      if(this.pos.y<0 || this.pos.y>height){
        this.hitCrushed = true;
      }
      this.applyForce(this.dna.genes[count]);
      if(!(this.hitCrushed || this.hitTheTarget)){
        this.move();
      }
    }

    this.show = function(){
      push();
      translate(this.pos.x,this.pos.y);
      rotate(this.vel.heading());
      //rectMode(CENTER);
      //rect(0,0,25,5);
      ellipse(0,0,7,7);
      pop();
    }
}
