const alphabetSubsequence = require("./alphabetSubsequence");


describe("Alphabet Subsequence Function", () => {
    test("First test that the subsequent char in a string comes after it on the alphabet", () => {
        const data = "effg";

        expect(alphabetSubsequence(data)).toBe(false);
    })

    test("Second test that the subsequent char in a string comes after it on the alphabet", () => {
        const data = "aceg";

        expect(alphabetSubsequence(data)).toBe(true);
       

    })

})