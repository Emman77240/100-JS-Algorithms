const arrayConversion = require("./arrayConversion");


describe("Array conversion function to single number", () => {
    test('Test 1', () => {
        // arrange
        const data = [1, 2, 3, 4, 5, 6, 7, 8];

        // act
        const response = arrayConversion(data);

        // assert
        expect(response).toBe(186);
    });
});
