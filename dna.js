function DNA(genes){
  this.vecMag = 0.2;
  if(genes){
    this.genes = genes;
  }
  else{
    this.genes = [];
    for(var i=0;i<400;i++){
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(this.vecMag);
    }
  }


  this.crossover = function(dna){
    var pivot = floor(random(this.genes.length));
    var newGenes = [];

    for(var i=0;i<this.genes.length;i++){
      if(i<pivot){
        newGenes[i] = this.genes[i];
      }
      else{
        newGenes[i] = dna.genes[i];
      }
    }

    return new DNA(newGenes);
  }//crossover

  this.mutate = function(){
    for(var i=0;i<this.genes.length;i++){
      if(random(1)<0.01){
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(this.vecMag);
      }
    }
  }
}
