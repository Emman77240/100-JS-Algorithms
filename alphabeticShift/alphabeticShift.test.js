const alphabeticShift = require("./alphabeticShift");

describe("Alphabetic Shift Function", () => {
    test("Tests that a character is shifted to the next character", () => {
        const data = "crazy";

        expect(alphabeticShift(data)).toBe("dsbaz");
    })
})