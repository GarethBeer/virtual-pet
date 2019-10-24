const maxFitness = 10
const  minHunger = 0
const maxHunger = 10
const  minFitness = 0
const maxAge = 30

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.fitness = maxFitness
    this.hunger = minHunger
    this.isAlive = function() {
        if(this.age === maxAge || 
           this.fitness === minFitness ||
           this.hunger === maxHunger) {
               return false
           }  else {
               return true
           }
    }
}
    


Pet.prototype.growUp = function (){
    this.age++
    this.hunger += 5
    this.fitness-= 3
}
Pet.prototype.walk = function() {
    if (this.fitness > 6) {
        this.fitness = maxFitness
    } else {
        this.fitness += 4
    }
}

Pet.prototype.feed = function () {
    if (this.hunger > 3){
        this.hunger -= 3;
    } else {
        this.hunger = minHunger
    }
}
Pet.prototype.checkUp = function() {
    if(this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry and I need a walk'
    } if (this.fitness <= 3) {
        return 'I need a walk'
    } if (this.hunger >= 5 ) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
}
module.exports =  Pet


