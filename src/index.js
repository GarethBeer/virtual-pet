function Pet (name) {
    this.name = name;
    this.age = 0;
    this.growUp = function() {
        this.age++
    }
    
}




module.exports =  Pet
