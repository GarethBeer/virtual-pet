

const {Pets} = require("../src")

describe('Create a new object with defined properties', () => {
    test('Create a new pet object', () => {
        expect(Pets('Fido')).toStrictEqual( {name: 'Fido'});
        expect(Pets('Tom')).toStrictEqual( {name: 'Tom'});
        expect(Pets('Mark')).toStrictEqual( {name: 'Mark'})

    })
})