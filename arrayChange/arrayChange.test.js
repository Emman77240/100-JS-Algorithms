const arrayChange = require("./arrayChange");


describe("Array change function", () => {
    test('Test 1', () => {
        // arrange
        const data = [1, 1, 1];

        // act
        const response = arrayChange(data);

        // assert
        expect(response).toBe(3);
    });
});
