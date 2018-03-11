function Population(){
  this.rockets = [];
  this.popsize = 30;
  this.matingPool = [];

  for(var i=0;i<this.popsize;i++){
    this.rockets[i] = new Rocket();
  }

 this.howFar = function(target){
   for(var i=0;i<this.popsize;i++){
     this.rockets[i].calculateFittness(target);
   }
 }

  this.evaulate = function(){

    var maxFitness = 0;
    var maxNormalised = 0;
    for(var i=0;i<this.popsize;i++){
       this.rockets[i].calculateFittness(target);
       if(this.rockets[i].fitness>maxFitness)
          maxFitness = this.rockets[i].fitness;
    }
    //console.log(maxFitness);
    for(var i=0;i<this.popsize;i++){
      this.rockets[i].fitness/=maxFitness;

      //console.log(this.rockets[i].fitness);
    }

    for(var i=0;i<this.popsize;i++){
      if(this.rockets[i].fitness>0.5){
        var times = this.rockets[i].fitness * 100;
        for(var j=0;j<times;j++){
          this.matingPool.push(this.rockets[i]);
        }
      }
    }

  }


  this.selection = function(){
    var newRockets = [];

    for(var i=0;i<this.popsize;i++){
      var parentA = random(this.matingPool).dna;
      var parentB = random(this.matingPool).dna;
      var newDna = parentA.crossover(parentB);
      newDna.mutate();
      newRockets[i] = new Rocket(newDna);
    }

    this.rockets = newRockets;
  }

  this.run = function(target){
    for(var i=0;i<this.popsize;i++){
      this.rockets[i].update(target,count,obsticle);
      this.rockets[i].show();
    }
  }
}
