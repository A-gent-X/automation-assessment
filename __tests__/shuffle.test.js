const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('shuffle return array', () => {
    let result = shuffle();

    expect(result).toStrictEqual([]);
})

test("can the shuffle function shuffle the items in the array provided.", async () => {

  let abcArr = ['a', 'b', 'c', 'd']
  let result = shuffle(abcArr)
  expect(abcArr).not.toStrictEqual(result)

});

test("are the items the same as in the array provided.", async () => {

  let abcArr = ['a', 'b', 'c', 'd']
  let result = shuffle(abcArr)
  expect(result).toContain('a', 'b', 'c', 'd')

});

});
