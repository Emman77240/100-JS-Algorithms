const adjacentElementsProduct = require('./adjacentElementsProduct');

test('tests the product of adjacent elements in an array', () => {
    const data = [3, 6, -2, -5, 7, 3];

    expect(adjacentElementsProduct(data)).toBe(21);
});


