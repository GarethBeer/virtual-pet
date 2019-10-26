/* eslint-disable no-undef */
const Pet = require('../src')

describe('Create a new object with defined properties', () => {
  let pet
  beforeEach(() => { pet = new Pet('Fido') })

  test('Create a new pet object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object)
  })
  test('Create a new pet object', () => {
    expect(new Pet('Max')).toBeInstanceOf(Object)
  })
  test('Create a name property and value', () => {
    expect(pet.name).toStrictEqual('Fido')
  })
  test('initial age value set to 0', () => {
    expect(pet.age).toBe(0)
  })
  test('initial fitness value set to 0', () => {
    expect(pet.fitness).toBe(10)
  })
  test('initial hunger value set to 0', () => {
    expect(pet.hunger).toBe(0)
  })
})

describe('Testing prototype methods on the object', () => {
  let pet
  beforeEach(() => { pet = new Pet('Fido') })

  test('growUp method increments age by 1', () => {
    expect(pet.age).toBe(0)
    pet.growUp()
    expect(pet.age).toBe(1)
  })
  test('testing growUp method increases initial values to by 1, 5 and 7', () => {
    pet.growUp()
    expect(pet.age).toBe(1)
    expect(pet.hunger).toBe(5)
    expect(pet.fitness).toBe(7)
  })

  test('testing walk method increases fitness above 6', () => {
    pet.fitness = 8
    pet.walk()
    expect(pet.fitness).toBe(10)
  })
  test('testing walk method increases fitness  below 6', () => {
    pet.fitness = 5
    pet.walk()
    expect(pet.fitness).toBe(9)
  })

  test('testing feed method decreases hunger to 0 when current level is 3 or below', () => {
    pet.hunger = 2
    pet.feed()
    expect(pet.hunger).toBe(0)
  })
  test('test feed method decreases hunger by 3', () => {
    pet.hunger = 4
    pet.feed()
    expect(pet.hunger).toBe(1)
  })

  test('returns string when check up called', () => {
    const result = pet.checkUp()
    pet.checkUp()
    expect(typeof result).toBe('string')
  })

  test('returns message to let us know pet is hungry', () => {
    pet.hunger = 5
    expect(pet.checkUp()).toStrictEqual('I am hungry')
  })

  test('returns a message if fitness is low and needs a walk', () => {
    pet.fitness = 2
    expect(pet.checkUp()).toStrictEqual('I need a walk')
  })

  test('returns a message if it is not tired and not hungry', () => {
    pet.fitness = 4
    pet.hunger = 0
    expect(pet.checkUp()).toStrictEqual('I feel great!')
  })
  test('returns a message if it is tired and hungry', () => {
    pet.fitness = 3
    pet.hunger = 5
    expect(pet.checkUp()).toStrictEqual('I am hungry and I need a walk')
  })

  test('is it alive', () => {
    expect(pet.isAlive()).toBe(true)
  })

  test('is it dead if its fitness is low', () => {
    pet.fitness = 0
    expect(pet.isAlive()).toBe(false)
  })

  test('is it dead if its age is 30', () => {
    pet.age = 30
    expect(pet.isAlive()).toBe(false)
  })

  test('is it alive if its age is 29', () => {
    pet.age = 29
    expect(pet.isAlive()).toBe(true)
  })

  test('is it dead if its age is 31', () => {
    pet.age = 31
    expect(pet.isAlive()).toBe(false)
  })
})
