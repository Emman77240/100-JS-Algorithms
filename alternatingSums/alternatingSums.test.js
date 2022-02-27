const alternatingSums = require("./alternatingSums")

describe("Alternating Sums", () => {
    test("Test for the computation of alternating array number sums", () => {
        const data = [50, 60, 60, 45, 70]

        expect(alternatingSums(data)).toEqual([180, 105])
    })
})