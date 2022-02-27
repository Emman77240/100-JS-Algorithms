const add = require('./add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});




describe(add.name, () => {
  it('test 1', () => {
      // act
      const result = add(1, 2);

      // assert
      expect(result).toBe(3);
  });

  it('test 2', () => {
      // act
      const result = add(3, 2);

      // assert
      expect(result).toBe(5);
  });
});
