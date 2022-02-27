const almostIncreasingSequence = require("./almostIncreasingSequence");

describe("Almost Increasing Sequence", () => {
    test("First test for almost increasing sequence in array", () => {
        const data = [1, 3, 2, 1];

        expect(almostIncreasingSequence(data)).toBe(false);
    });

    test("Second test for almost increasing sequence in array", () => {
        const data = [1, 3, 2];

        expect(almostIncreasingSequence(data)).toBe(true);
    });
})
