const areEquallyStrong = require("./areEquallyStrong");


describe("Arms are equally strong", () => {
    test("First test on arms strength", () => {
        // arrange
        const yourLeft = 10;
        const yourRight = 15;
        const friendsLeft = 15;
        const friendsRight = 10;

        // act
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);

        // assert
        expect(response).toEqual(true);
    });

    test("Second test on arms strength", () => {
        // arrange
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 10;

        // act
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);

        // assert
        expect(response).toEqual(true);
    });

    test("Third test on arms strength", () => {
        // arrange
        const yourLeft = 15;
        const yourRight = 10;
        const friendsLeft = 15;
        const friendsRight = 9;

        // act
        const response = areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight);

        // assert
        expect(response).toEqual(false);
    });
});
