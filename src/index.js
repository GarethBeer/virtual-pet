function Pet (name) {
    this.name = name;
    this.age = 0;
    this.fitness = 10
    this.hunger = 0
    //this.growUp = function() {
        //this.age++
    }
    


Pet.prototype.growUp = function (){
    this.age++
    this.hunger = this.hunger +5
    this.fitness = this.fitness -3
}


module.exports =  Pet
