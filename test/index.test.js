

const Pet = require("../src")

describe('Create a new object with defined properties', () => {
    test('Create a new pet object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object)
    })
    test('Create a new pet object', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toStrictEqual('Fido');
    })
})