const maximumFitness = 10
const  minimumHunger = 0

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.fitness = maximumFitness
    this.hunger = minimumHunger
   
    }
    


Pet.prototype.growUp = function (){
    this.age++
    this.hunger += 5
    this.fitness-= 3
}
Pet.prototype.walk = function() {
    if (this.fitness > 6) {
        this.fitness = maximumFitness
    } else {
        this.fitness += 4
    }
}

Pet.prototype.feed = function () {
    if (this.hunger >= 3){
        this.hunger -= 3;
    } if (this.hunger < 3) {
        this.hunger = minimumHunger
    }
}

module.exports =  Pet
