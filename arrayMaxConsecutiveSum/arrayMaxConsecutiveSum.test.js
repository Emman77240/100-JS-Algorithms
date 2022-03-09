const arrayMaxConsecutiveSum = require('./arrayMaxConsecutiveSum');

describe(arrayMaxConsecutiveSum.name, () => {
    test('Test 1', () => {
        // arrange
        const data = [2, 3, 5, 1, 6];
        const count = 2;

        // act
        const response = arrayMaxConsecutiveSum(data, count);

        // assert
        expect(response).toBe(8);
    });
});
