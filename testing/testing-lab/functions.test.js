let testingFunctions = require('./functions')

test("returnTwo test", () => {
    expect(testingFunctions.returnTwo()).toEqual(2)
})

test("greeting test", () => {
    expect(testingFunctions.greeting("James")).toEqual("Hello, James.");
    expect(testingFunctions.greeting("Jill")).toEqual("Hello, Jill.");
})

test("add test", () => {
    expect(testingFunctions.add(1, 2)).toEqual(3);
    expect(testingFunctions.add(5, 9)).toEqual(14);
})

describe("Math functions", () => {
    test("Add", () => {
        expect(testingFunctions.add(14, 6)).toEqual(20);
    })

    test("Subtract", () => {
        expect(testingFunctions.subtract(11, 3)).toEqual(8);
    })

    test("Multiply", () => {
        expect(testingFunctions.multiply(12, 3)).toEqual(36);
    })
    
    test("Divide", () => {
        expect(testingFunctions.divide(15, 5)).toEqual(3);
    })
})