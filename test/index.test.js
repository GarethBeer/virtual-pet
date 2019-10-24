const Pet = require("../src")

describe('Create a new object with defined properties', () => {
    test('Create a new pet object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object)
    })
    test('Create a new pet object', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toStrictEqual('Fido');
    })
});

describe('Create a method on the object', () => {
    test('testing age is set to 0', () => {
        const dog = new Pet ('Max');
        expect(dog.age).toBe(0);
    })
    test('growUp method increments age by 1', () => { const dog = new Pet ('Max');
                
        expect(dog.name).toStrictEqual('Max')
        expect(dog.age).toBe(0);
        dog.growUp();
        expect(dog.age).toBe(1)
    })
});

describe('Create a prototype for the pet which changes multiple values', () => {
    test('testing hunger has initial to 0', () => {
        const dog = new Pet ('Max');
        expect(dog.hunger).toBe(0);
    })
    test('testing fitness has initial value of 10', () => { const dog = new Pet ('Max');
                
        expect(dog.name).toStrictEqual('Max')
        expect(dog.age).toBe(0);
        expect(dog.hunger).toBe(0);
        expect(dog.fitness).toBe(10);
    })
    test('testing method increases initial values to by 1, 5 and -3', () => { 
        const dog = new Pet ('Max');
                
        expect(dog.name).toStrictEqual('Max')
        expect(dog.age).toBe(0);
        expect(dog.hunger).toBe(0);
        expect(dog.fitness).toBe(10);
        dog.growUp();
        expect(dog.age).toBe(1);
        expect(dog.hunger).toBe(5);
        expect(dog.fitness).toBe(7);
        console.log(dog.age,dog.hunger,dog.fitness)
    })
    test('testing method increases initial values when called', () => { 
        const cat = new Pet ('leo');
                
        expect(cat.name).toStrictEqual('leo')
        expect(cat.age).toBe(0);
        expect(cat.hunger).toBe(0);
        expect(cat.fitness).toBe(10);
        cat.growUp();
        expect(cat.age).toBe(1);
        expect(cat.hunger).toBe(5);
        expect(cat.fitness).toBe(7);
        cat.growUp();
        expect(cat.fitness).toBe(4)
        console.log(cat.age,cat.hunger,cat.fitness)
    })
    test('testing method increases initial values when called', () => { 
        const cat = new Pet ('leo');
                
        expect(cat.name).toStrictEqual('leo')
        expect(cat.age).toBe(0);
        expect(cat.hunger).toBe(0);
        expect(cat.fitness).toBe(10);
        cat.growUp();
        cat.growUp();
        expect(cat.fitness).toBe(4)
        cat.walk();
        expect(cat.fitness).toBe(8)
        cat.walk();
        expect(cat.fitness).toBe(10)

        console.log(cat.age,cat.hunger,cat.fitness)
    })
    test('testing feed method decreases hunger when called', () => { 
        const cat = new Pet ('leo');
        expect(cat.hunger).toBe(0)
    })
    test('testing feed method decreases hunger when called', () => { 
        const cat = new Pet ('leo');
        cat.growUp();
        cat.growUp();
        cat.feed()
        expect(cat.hunger).toBe(7)
    })

    test('alarm to let us know pet fitness is low and needs a walk and needs a feed', () => { 
       const dog = new Pet('Max');
       dog.growUp();
       dog.growUp();
       dog.growUp();
       expect(dog.checkUp()).toStrictEqual('I am hungry and I need a walk')
    })
    
    test('alarm to let us know pet is hungry', () => { 
        const dog = new Pet('Max');
        dog.growUp();
        
        expect(dog.checkUp()).toStrictEqual('I am hungry')
     })

     test('alarm to tell me if fitness is low and needs a walk', () => { 
        const dog = new Pet('Max');
        dog.feed();
        dog.growUp();
        dog.growUp();
        dog.growUp();
        dog.feed();
        dog.feed();
        dog.feed();
        dog.feed();

        expect(dog.checkUp()).toStrictEqual('I need a walk')
     })
     test('alarm to tell us if it is not tired and not hungry', () => { 
        const dog = new Pet('Max');
        

        expect(dog.checkUp()).toStrictEqual('I feel great!')
     })
});