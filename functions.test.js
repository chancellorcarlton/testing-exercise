let myFunctions = require('./functions');

test('Return Two test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
});

test('Greeting Test', () => {
    expect(myFunctions.greeting('James')).toBe('Hello James.')
});

test('Addition Test', () => {
    expect(myFunctions.add(1, 2)).toBe(3)
});

//Extra

describe('Extra Challenge', () => {
    test('Subtract', () => {
        expect(myFunctions.subtract(5, 2)).toBe(3)
    })

    test('Multiply', () => {
        expect(myFunctions.multiply(20, 2)).toBe(40)
    })

    test('Divide', () => {
        expect(myFunctions.divide(10, 2)).toBe(5)
    })
})