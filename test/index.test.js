

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
    test('testing method increases initial values when called', () => { 
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
});