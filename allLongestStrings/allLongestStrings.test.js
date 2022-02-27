const allLongestStrings = require('./allLongestStrings');


test("tests for returned array with longest strings", () => {
    const data = ["aba", "aa", "ad", "vcd", "aba"];

    expect(allLongestStrings(data)).toEqual(["aba", "vcd", "aba"]);
});